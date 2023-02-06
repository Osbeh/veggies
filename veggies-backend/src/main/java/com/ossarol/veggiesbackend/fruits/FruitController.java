package com.ossarol.veggiesbackend.fruits;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.ossarol.veggiesbackend.fruits.model.FruitItem;
import com.ossarol.veggiesbackend.fruits.repository.FruitRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@EnableMongoRepositories
public class FruitController {


    FruitRepository fruitRepository;

    public FruitController(FruitRepository fruitRepository) {
        this.fruitRepository = fruitRepository;
    }


    @GetMapping("/fruits")
    public String findFruits() throws JsonProcessingException {
        List<FruitItem> fruits = fruitRepository.findFruits("fruit");
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);

        return mapper.writeValueAsString(fruits);
    }

    @GetMapping("/roots")
    public String findRoots() throws JsonProcessingException {
        List<FruitItem> fruits = fruitRepository.findRoots("root");
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);

        return mapper.writeValueAsString(fruits);
    }

    @GetMapping("/vegetables")
    public String findVegetables() throws JsonProcessingException {
        List<FruitItem> fruits = fruitRepository.findVegetables("vegetable");
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);

        return mapper.writeValueAsString(fruits);
    }

    @GetMapping("/{id}")
    public java.util.Optional<FruitItem> getFruit(@PathVariable int id) {
        System.out.println(id);
        return fruitRepository.findById(id);
    }




}
