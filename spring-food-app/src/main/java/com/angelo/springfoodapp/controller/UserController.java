package com.angelo.springfoodapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angelo.springfoodapp.dto.PasswordChangeRequest;
import com.angelo.springfoodapp.dto.UserInfo;
import com.angelo.springfoodapp.entity.User;
import com.angelo.springfoodapp.service.UserService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/api/user")
@RestController
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;

    @GetMapping("/find/all")
    public ResponseEntity<List<User>> getAll(){
        List<User> userList = userService.getAll();
        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }

    @GetMapping("/find/id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userService.getUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/find/name/{username}")
    public ResponseEntity<User> getUserById(@PathVariable String username){
        User user = userService.getUserByUsername(username);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/find/userinfo/{username}")
    public ResponseEntity<UserInfo> getUserInfo(@PathVariable String username){
        UserInfo userInfo = userService.getUserInfo(username);
        return new ResponseEntity<UserInfo>(userInfo, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User updatedUser = userService.updateUser(user);
        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody String email){
        userService.forgetPassword(email);
        return new ResponseEntity<>("Password recover email sent!",HttpStatus.OK);
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody PasswordChangeRequest request){
        User user = userService.getByResetPasswordToken(request.getToken());
        userService.updatePassword(user, request);
        return new ResponseEntity<>("Password Changed", HttpStatus.OK);
    }


}
