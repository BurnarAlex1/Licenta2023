package SentimentAnalyzer.example.demo.repository;

import SentimentAnalyzer.example.demo.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<Comment,Long> {
}
