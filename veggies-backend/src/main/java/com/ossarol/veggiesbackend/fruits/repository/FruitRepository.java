package com.ossarol.veggiesbackend.fruits.repository;

import com.ossarol.veggiesbackend.fruits.model.FruitItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface FruitRepository extends MongoRepository<FruitItem, Integer> {

    @Query(value="{'vegType':'fruit'}")
    List<FruitItem> findFruits(String vegType);

    @Query(value="{'vegType':'root'}")
    List<FruitItem> findRoots(String vegType);

    @Query(value="{'vegType':'vegetable'}")
    List<FruitItem> findVegetables(String vegType);

    List<FruitItem> findAll();


    long count();
}
