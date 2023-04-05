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

import com.angelo.springfoodapp.entity.Food;
import com.angelo.springfoodapp.service.FoodService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/api/food")
@RestController
@RequiredArgsConstructor
public class FoodController {
    
    private final FoodService foodService;

    @GetMapping("/find/all")
    public ResponseEntity<List<Food>> getAll(){
        List<Food> foodList = foodService.getAll();
        return new ResponseEntity<List<Food>>(foodList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable Long id){
        Food food = foodService.getFoodById(id);
        return new ResponseEntity<Food>(food, HttpStatus.OK);
    }

    @GetMapping("/find/foodOwner/{foodOwner}")
    public ResponseEntity<List<Food>> getFoodByFoodOwner(@PathVariable String foodOwner){
        List<Food> food = foodService.getFoodByFoodOwner(foodOwner);
        return new ResponseEntity<List<Food>>(food, HttpStatus.OK);
    }

    @GetMapping("/find/type/{type}")
    public ResponseEntity<List<Food>> getFoodByType(@PathVariable String type){
        List<Food> food = foodService.getFoodByType(type);
        return new ResponseEntity<List<Food>>(food, HttpStatus.OK);
    }

    @GetMapping("/search/{foodName}")
    public ResponseEntity<List<Food>> getFoodByName(@PathVariable String foodName){
        List<Food> foodList = foodService.getFoodByName(foodName);
        return new ResponseEntity<List<Food>>(foodList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Food> createFood(@RequestBody Food food){
        Food newFood = foodService.insertFood(food);
        return new ResponseEntity<Food>(newFood, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Food> updateFood(@RequestBody Food food){
        Food updatedFood = foodService.updateFood(food);
        return new ResponseEntity<Food>(updatedFood, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Food> deleteFood(@PathVariable Long id){
        foodService.deleteFood(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
