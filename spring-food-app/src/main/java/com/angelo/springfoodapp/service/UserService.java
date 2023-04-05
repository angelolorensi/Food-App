package com.angelo.springfoodapp.service;

import java.util.List;
import java.util.UUID;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.angelo.springfoodapp.dto.PasswordChangeRequest;
import com.angelo.springfoodapp.dto.UserInfo;
import com.angelo.springfoodapp.entity.NotificationEmail;
import com.angelo.springfoodapp.entity.User;
import com.angelo.springfoodapp.exception.UserNotFoundException;
import com.angelo.springfoodapp.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final MailService mailService;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User getUserById(Long id){
        return userRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException("User by id" + id + "was not found"));
    }

    public User getUserByUsername(String username){
        return userRepository.findByUsername(username)
        .orElseThrow(() -> new UserNotFoundException("User by username" + username + "was not found"));
    }

    public UserInfo getUserInfo(String username){
        User user = userRepository.findByUsername(username).get();
        UserInfo userInfo = new UserInfo();
        userInfo.setUsername(user.getUsername());
        userInfo.setEmail(user.getEmail());
        userInfo.setPhone(user.getPhone());
        userInfo.setRole(user.getRole());
        userInfo.setSex(user.getSex());
        userInfo.setProfileImage(user.getProfileImage());

        return userInfo;
    }

    public User updateUser(User user){
        return userRepository.save(user);
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public void forgetPassword(String email){
        User user = userRepository.findByEmail(email).get();
        String token = UUID.randomUUID().toString();
        if(user != null){
            user.setResetPasswordToken(token);
            userRepository.save(user);
            this.mailService.sendMail(new NotificationEmail("Reset Password",
        user.getEmail(), "Hello, you have requested to reset your password, " +
        "please click the link to change your password : " +
        "http://localhost:4200/change-password/" + token));
        } else {
            throw new UserNotFoundException("Could not find any costumer with the email" + email);
        }
    }

    public User getByResetPasswordToken(String token){
        return userRepository.findByResetPasswordToken(token).get();
    }

    public void updatePassword(User user, PasswordChangeRequest request){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(request.getNewPassword());
        user.setPassword(encodedPassword);

        user.setResetPasswordToken(null);
        userRepository.save(user);
    }

}
