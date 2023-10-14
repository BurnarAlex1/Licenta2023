package SentimentAnalyzer.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    @OneToMany(fetch=FetchType.EAGER,orphanRemoval = true)
    private List<Comment> comments;

    public Product(String name,String description){
        this.name=name;
        this.description=description;
    }
}
