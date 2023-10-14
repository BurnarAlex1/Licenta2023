package SentimentAnalyzer.example.demo.service;

import SentimentAnalyzer.example.demo.dto.SpecialWordDto;
import SentimentAnalyzer.example.demo.model.SpecialWord;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface SpecialWordService {
    void addSpecialWord(SpecialWordDto dto);
    List<SpecialWord> findAll();
    SpecialWord deleteSpecialWord(Long id);
}
