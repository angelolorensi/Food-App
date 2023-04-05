package com.angelo.springfoodapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelo.springfoodapp.entity.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken,Long>{
    
   Optional<VerificationToken> findByToken(String token);

}
