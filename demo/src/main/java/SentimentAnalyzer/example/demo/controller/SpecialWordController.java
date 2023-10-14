package SentimentAnalyzer.example.demo.controller;


import SentimentAnalyzer.example.demo.dto.ProductDto;
import SentimentAnalyzer.example.demo.dto.SpecialWordDto;
import SentimentAnalyzer.example.demo.service.ProductService;
import SentimentAnalyzer.example.demo.service.SpecialWordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/specialword")
@CrossOrigin
public class SpecialWordController {
    private final SpecialWordService specialWordService;

    public SpecialWordController(SpecialWordService specialWordService) {
        this.specialWordService = specialWordService;
    }


    @PostMapping(path = "/create")
    public void addSpecialWord(@RequestBody SpecialWordDto dto) {
        specialWordService.addSpecialWord(dto);
    }

    @GetMapping("/all")
    public ResponseEntity findAllSpecialWords(){
        return ResponseEntity.status(HttpStatus.OK).body(specialWordService.findAll());
    }

    @PostMapping("/delete")
    public ResponseEntity deleteSpecialWordById(@RequestBody Long id){
        return ResponseEntity.status(HttpStatus.OK).body(specialWordService.deleteSpecialWord(id));
    }
}
