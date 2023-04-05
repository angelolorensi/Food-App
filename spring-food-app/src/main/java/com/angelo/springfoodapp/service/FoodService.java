package com.angelo.springfoodapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.angelo.springfoodapp.entity.Food;
import com.angelo.springfoodapp.exception.UserNotFoundException;
import com.angelo.springfoodapp.repository.FoodRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FoodService {
    
    private final FoodRepository foodRepository;

    public List<Food> getAll(){
        return foodRepository.findAll();
    }

    public Food getFoodById(Long id){
        return foodRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException("Food by id" + id + "was not found"));
    }

    public List<Food> getFoodByName(String foodName){
        return foodRepository.findByName(foodName);
    }

    public List<Food> getFoodByFoodOwner(String foodOwner){
        return foodRepository.findByFoodOwner(foodOwner);
    }

     public List<Food> getFoodByType(String type){
        return foodRepository.findByType(type);
    }

    public Food insertFood(Food food){
        return foodRepository.save(food);
    }

    public Food updateFood(Food food){
        return foodRepository.save(food);
    }

    public void deleteFood(Long id){
        foodRepository.deleteById(id);
    }

}
