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
@Table(name="user")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(unique=true)
    private String name;
    private String role;
    private String password;

    @OneToMany(fetch=FetchType.EAGER,orphanRemoval = true)
    private List<Comment> comments;


    public User(String name, String password,String role){
        this.name=name;
        this.password=password;
        this.role=role;
    }
}
