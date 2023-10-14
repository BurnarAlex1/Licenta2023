package SentimentAnalyzer.example.demo.repository;

import SentimentAnalyzer.example.demo.model.SpecialWord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialWordRepository extends CrudRepository<SpecialWord,Long> {
}
