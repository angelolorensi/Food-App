package com.angelo.springfoodapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class SpringFoodAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringFoodAppApplication.class, args);
	}

}
