package com.ossarol.veggiesbackend.fruits;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class FruitService {
    private static List<Fruit> fruits = new ArrayList<>();

    static {
        fruits.add(new Fruit(1,"Banaani", 12.45, 13.54, 23.1,5.1, "fruit"));
        fruits.add(new Fruit(2,"Peruna", 23.45, 25.54, 13.1,3.1, "vegetable"));
    }

    public List<Fruit> findAll() {
        return fruits;
    }

    public Fruit findFruit(int id) {
        Predicate<? super Fruit> predicate = fruit -> fruit.getId().equals(id);
        return fruits.stream().filter(predicate).findFirst().orElse(null);
    }

}
