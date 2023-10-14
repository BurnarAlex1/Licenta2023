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
@Table(name="specialword")
public class SpecialWord {
    @Id
    @GeneratedValue
    private Long id;
    private String body;
    private int value;

    public SpecialWord(String body,int value){
        this.body=body;
        this.value=value;
    }
}
