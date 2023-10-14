package SentimentAnalyzer.example.demo.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class RegisterDto {
    String name;
    String password;
    String role;
}
