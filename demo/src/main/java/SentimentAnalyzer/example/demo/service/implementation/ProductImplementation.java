package SentimentAnalyzer.example.demo.service.implementation;

import SentimentAnalyzer.example.demo.dto.ProductDto;
import SentimentAnalyzer.example.demo.model.Comment;
import SentimentAnalyzer.example.demo.model.Product;
import SentimentAnalyzer.example.demo.repository.ProductRepository;
import SentimentAnalyzer.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProductImplementation implements ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductImplementation(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void addProduct(ProductDto dto){
        Product product = new Product(dto.getName(),dto.getDescription());
        productRepository.save(product);
    }

    public List<Product> findAllProducts(){
        List<Product> products=(List<Product>) productRepository.findAll();
        return products;
    }

    public List<Comment> findAllProductComments(String productName){
        Product product = productRepository.findFirstByName(productName);
        List<Comment> comments=product.getComments();
        return comments;
    }

    public Product deleteProduct(Long id){
        Product product = productRepository.findById(id).get();
        productRepository.delete(product);
        return product;
    }

}
