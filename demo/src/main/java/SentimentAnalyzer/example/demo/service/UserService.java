package SentimentAnalyzer.example.demo.service;

import SentimentAnalyzer.example.demo.dto.AuthDto;
import SentimentAnalyzer.example.demo.dto.RegisterDto;
import SentimentAnalyzer.example.demo.model.Comment;
import SentimentAnalyzer.example.demo.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {
    void addUser(RegisterDto dto);
    User findByNameAndPassword(AuthDto dto);
    List<User> findAll();
    User deleteUser(Long id);
    List<Comment>findAllComments(String userName);
    void upgradeUser(String userName);
}

