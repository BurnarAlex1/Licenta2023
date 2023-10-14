package SentimentAnalyzer.example.demo.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class SpecialWordDto {
    String body;
    int value;
}
