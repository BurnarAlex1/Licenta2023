package SentimentAnalyzer.example.demo.service.implementation;

import SentimentAnalyzer.example.demo.dto.SpecialWordDto;
import SentimentAnalyzer.example.demo.model.SpecialWord;
import SentimentAnalyzer.example.demo.repository.SpecialWordRepository;
import SentimentAnalyzer.example.demo.service.SpecialWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class SpecialWordImplementation implements SpecialWordService {
    private final SpecialWordRepository specialWordRepository;

    @Autowired
    public SpecialWordImplementation(SpecialWordRepository specialWordRepository) {
        this.specialWordRepository = specialWordRepository;
    }

    public void addSpecialWord(SpecialWordDto dto){
        SpecialWord specialWord = new SpecialWord(dto.getBody(),dto.getValue());
        specialWordRepository.save(specialWord);
    }

    public List<SpecialWord> findAll(){
        List<SpecialWord> specialWords=(List<SpecialWord>) specialWordRepository.findAll();
        return specialWords;
    }

    public SpecialWord deleteSpecialWord(Long id){
        SpecialWord specialWord = specialWordRepository.findById(id).get();
        specialWordRepository.delete(specialWord);
        return specialWord;
    }
}
