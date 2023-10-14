package SentimentAnalyzer.example.demo.controller;

import SentimentAnalyzer.example.demo.dto.CommentDto;
import SentimentAnalyzer.example.demo.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {

        this.commentService = commentService;
    }


    @PostMapping(path = "/create")
    public void addComment(@RequestBody CommentDto commentDto) {
        commentService.addComment(commentDto);
    }

    @GetMapping("/all")
    public ResponseEntity findAllComments(){
        return ResponseEntity.status(HttpStatus.OK).body(commentService.findAll());
    }

    @PostMapping("/delete")
    public ResponseEntity deleteCommentById(@RequestBody Long id){
        return ResponseEntity.status(HttpStatus.OK).body(commentService.deleteComment(id));
    }
}
