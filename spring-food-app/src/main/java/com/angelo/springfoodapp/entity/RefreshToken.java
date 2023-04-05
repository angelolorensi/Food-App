package com.angelo.springfoodapp.entity;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class RefreshToken {
    
    @GeneratedValue
    @Id
    private Long id;
    private String token;
    private Instant created;

}
