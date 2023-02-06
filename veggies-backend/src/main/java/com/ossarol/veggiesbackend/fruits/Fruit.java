package com.ossarol.veggiesbackend.fruits;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("vegs")
public class Fruit {

    private Integer id;
    private String name;
    private Double energyKcal;
    private Double carbohydrate;
    private Double fat;
    private Double protein;
    private String vegType;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getVegType() {
        return vegType;
    }

    public void setVegType(String vegType) {
        this.vegType = vegType;
    }

    public Fruit(Integer id, String name, Double energyKcal, Double carbohydrate, Double fat, Double protein, String vegType) {
        this.id = id;
        this.name = name;
        this.energyKcal = energyKcal;
        this.carbohydrate = carbohydrate;
        this.fat = fat;
        this.protein = protein;
        this.vegType = vegType;
    }

    @Override
    public String toString() {
        return "Fruit{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", energyKcal=" + energyKcal +
                ", carbohydrate=" + carbohydrate +
                ", fat=" + fat +
                ", protein=" + protein +
                ", vegType='" + vegType + '\'' +
                '}';
    }
}
