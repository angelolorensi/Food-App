package com.angelo.springfoodapp.exception;

public class FoodAppException extends RuntimeException{
    
    public FoodAppException(String message){
        super(message);
    }

    public FoodAppException(String message,Exception exception){
        super(message, exception);
    }

}
