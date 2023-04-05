package com.angelo.springfoodapp.service;

import java.io.IOException;
import java.time.Instant;
import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.angelo.springfoodapp.dto.AuthenticationRequest;
import com.angelo.springfoodapp.dto.AuthenticationResponse;
import com.angelo.springfoodapp.dto.RefreshTokenRequest;
import com.angelo.springfoodapp.dto.RegisterRequest;
import com.angelo.springfoodapp.entity.ImageModel;
import com.angelo.springfoodapp.entity.NotificationEmail;
import com.angelo.springfoodapp.entity.Role;
import com.angelo.springfoodapp.entity.User;
import com.angelo.springfoodapp.entity.VerificationToken;
import com.angelo.springfoodapp.exception.FoodAppException;
import com.angelo.springfoodapp.exception.UserNotFoundException;
import com.angelo.springfoodapp.repository.UserRepository;
import com.angelo.springfoodapp.repository.VerificationTokenRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;
    private final VerificationTokenRepository verificationTokenRepository;
    private final MailService mailService;

    public AuthenticationResponse register(RegisterRequest request){
        var user = User.builder()
        .username(request.getUsername())
        .password(passwordEncoder.encode(request.getPassword()))
        .email(request.getEmail())
        .phone(request.getPhone())
        .sex(request.getSex())
        .profileImage(request.getProfileImage())
        .role(Role.USER)
        .created(new Date())
        .userCode(UUID.randomUUID().toString())
        .enabled(false)
        .build();

        boolean usernameAlreadyExists = userRepository.findByUsername(user.getUsername()).isPresent();
        boolean emailAlreadyExists = userRepository.findByEmail(user.getEmail()).isPresent();

        if(usernameAlreadyExists || emailAlreadyExists){
            return AuthenticationResponse.builder()
            .errorMsg("User Already exists.")
            .build();
        }

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        var token = generateVerificationToken(user);

        mailService.sendMail(new NotificationEmail("Please Activate your Account",
        user.getEmail(), "Thank you for signing up to Food App, " +
        "please click on the below url to activate your account : " +
        "http://localhost:8080/api/auth/accountVerification/" + token));
        
        return AuthenticationResponse.builder()
        .authenticationToken(jwtToken)
        .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(), 
                request.getPassword()
            )
        );

        var user = userRepository.findByUsername(request.getUsername()).orElseThrow(() -> new UserNotFoundException("User not found"));
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
        .authenticationToken(jwtToken)
        .refreshToken(refreshTokenService.generateRefreshToken().getToken())
        .expiresAt(Instant.now().plusMillis(jwtService.getJwtExpirationInMillis()))
        .username(user.getUsername())
        .build();
    }

    public AuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        var user = userRepository.findByUsername(refreshTokenRequest.getUsername()).orElseThrow(() -> new UserNotFoundException("User not found"));

        refreshTokenService.validateRefreshToken(refreshTokenRequest.getRefreshToken());
        String token = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .authenticationToken(token)
                .refreshToken(refreshTokenRequest.getRefreshToken())
                .expiresAt(Instant.now().plusMillis(jwtService.getJwtExpirationInMillis()))
                .username(refreshTokenRequest.getUsername())
                .build();
    }

    private String generateVerificationToken(User user){
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(user);

        verificationTokenRepository.save(verificationToken);
        return token;
    }

    public void verifyAccount(String token){
        Optional<VerificationToken> verificationToken = verificationTokenRepository.findByToken(token);
        fetchUserAndEnable(verificationToken.orElseThrow(() -> new FoodAppException("Invalid Token")));
    }

    private void fetchUserAndEnable(VerificationToken verificationToken) {
        String username = verificationToken.getUser().getUsername();
        User user = userRepository.findByUsername(username).orElseThrow(() -> new FoodAppException("User not found with name - " + username));
        user.setEnabled(true);
        userRepository.save(user);
    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException{
        Set<ImageModel> imageModels = new HashSet<>();

        for(MultipartFile file: multipartFiles){
            ImageModel imageModel = new ImageModel(
                file.getOriginalFilename(),
                file.getContentType(),
                file.getBytes()
            );
            imageModels.add(imageModel);
        }
        return imageModels;
    }
        
}
