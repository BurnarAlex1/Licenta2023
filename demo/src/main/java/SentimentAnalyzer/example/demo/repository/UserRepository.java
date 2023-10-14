package SentimentAnalyzer.example.demo.repository;

import SentimentAnalyzer.example.demo.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByNameAndPassword(String name , String password);
    User findFirstById(Long id);
    User findByName(String name);
}
