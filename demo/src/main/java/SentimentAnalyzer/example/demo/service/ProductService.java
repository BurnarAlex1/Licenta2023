package SentimentAnalyzer.example.demo.service;

import SentimentAnalyzer.example.demo.dto.ProductDto;
import SentimentAnalyzer.example.demo.model.Comment;
import SentimentAnalyzer.example.demo.model.Product;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ProductService {
    void addProduct(ProductDto dto);
    List<Product> findAllProducts();
    Product deleteProduct(Long id);
    List<Comment> findAllProductComments(String productName);
}
