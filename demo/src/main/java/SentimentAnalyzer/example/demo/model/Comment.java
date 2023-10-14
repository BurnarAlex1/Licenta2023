package SentimentAnalyzer.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name="comment")
public class Comment {

    @Id
    @GeneratedValue
    private Long id;
    private String description;
    private Integer review;
    private String author;

    public Comment(String description,String author){
        this.description=description;
        this.author=author;
    }
}
