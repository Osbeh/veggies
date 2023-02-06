package com.ossarol.veggiesbackend.fruits.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;


@Document("vegs")
public class FruitItem {
    //private ObjectId id;
    @Id
    private Integer id;
    private String name;
    private Double energyKcal;
    private Double carbohydrate;
    private Double fat;
    private Double protein;
    private String vegType;


    public FruitItem(Integer id, String name, Double energyKcal, String vegType, Double carbohydrate, Double fat, Double protein) {
        this.id = id;
        this.name = name;
        this.energyKcal = energyKcal;
        this.vegType = vegType;
        this.carbohydrate = carbohydrate;
        this.fat = fat;
        this.protein = protein;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getCarbohydrate() {
        return carbohydrate;
    }

    public void setCarbohydrate(Double carbohydrate) {
        this.carbohydrate = carbohydrate;
    }

    public Double getFat() {
        return fat;
    }

    public void setFat(Double fat) {
        this.fat = fat;
    }

    public Double getProtein() {
        return protein;
    }

    public void setProtein(Double protein) {
        this.protein = protein;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getEnergyKcal() {
        return energyKcal;
    }

    public void setEnergyKcal(Double energyKcal) {
        this.energyKcal = energyKcal;
    }

    public String getVegType() {
        return vegType;
    }

    public void setVegType(String vegType) {
        this.vegType = vegType;
    }
}
