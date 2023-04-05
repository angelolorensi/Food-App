package com.angelo.springfoodapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "image_model")
@Data
@NoArgsConstructor
public class ImageModel {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String type;
    @Column(length = 50000000)
    private byte[] bytes;

    public ImageModel(String name, String type, byte[] bytes){
        this.type = type;
        this.name = name;
        this.bytes = bytes;
    }
}
