package com.angelo.springfoodapp.dto;

import java.util.Set;

import com.angelo.springfoodapp.entity.ImageModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterRequest {
    
    private String username;
    private String email;
    private String password;
    private String phone;
    private Set<ImageModel> profileImage;
    private String userCode;
    private String sex;

}
