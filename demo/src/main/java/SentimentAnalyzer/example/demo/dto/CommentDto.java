package SentimentAnalyzer.example.demo.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class CommentDto {
    String desc;
    String author;
    String productName;
}
