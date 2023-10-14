package SentimentAnalyzer.example.demo.repository;

import SentimentAnalyzer.example.demo.model.Product;
import SentimentAnalyzer.example.demo.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
    Product findFirstByName(String name);
}
