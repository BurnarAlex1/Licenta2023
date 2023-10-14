package SentimentAnalyzer.example.demo.controller;

import SentimentAnalyzer.example.demo.dto.ProductDto;
import SentimentAnalyzer.example.demo.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping(path = "/create")
    public void addProduct(@RequestBody ProductDto dto) {
        productService.addProduct(dto);
    }

    @GetMapping("/all")
    public ResponseEntity findAllProducts(){
        return ResponseEntity.status(HttpStatus.OK).body(productService.findAllProducts());
    }

    @PostMapping("/comments")
    public ResponseEntity findAllProductComments(@RequestBody String productName){
        return ResponseEntity.status(HttpStatus.OK).body(productService.findAllProductComments(productName));
    }

    @PostMapping("/delete")
    public ResponseEntity deleteProductById(@RequestBody Integer id){
        return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProduct(id.longValue()));
    }
}
