package com.angelo.springfoodapp.dto;


import java.util.Set;

import com.angelo.springfoodapp.entity.ImageModel;
import com.angelo.springfoodapp.entity.Role;

import lombok.Data;

@Data
public class UserInfo {

    private String username;
    private String phone;
    private String email;
    private String sex;
    private Role role;
    private Set<ImageModel> profileImage;
    
}
