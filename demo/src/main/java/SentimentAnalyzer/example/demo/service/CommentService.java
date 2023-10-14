package SentimentAnalyzer.example.demo.service;

import SentimentAnalyzer.example.demo.dto.CommentDto;
import SentimentAnalyzer.example.demo.model.Comment;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CommentService {
    void addComment(CommentDto commentDto);
    List<Comment> findAll();
    Comment deleteComment(Long id);
}
