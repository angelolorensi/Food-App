package com.angelo.springfoodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelo.springfoodapp.entity.Food;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {
   
    List<Food> findByName(String name);
    List<Food> findByFoodOwner(String foodOwner);
    List<Food> findByType(String type);
}
