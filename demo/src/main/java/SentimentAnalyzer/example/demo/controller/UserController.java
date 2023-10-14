package SentimentAnalyzer.example.demo.controller;

import SentimentAnalyzer.example.demo.dto.AuthDto;
import SentimentAnalyzer.example.demo.dto.RegisterDto;
import SentimentAnalyzer.example.demo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping(path = "/create")
    public void addUser(@RequestBody RegisterDto dto) {
        userService.addUser(dto);
    }

    @RequestMapping("/login")
    @PostMapping
    public ResponseEntity login(@RequestBody AuthDto auth){

        return ResponseEntity.status(HttpStatus.OK).body(userService.findByNameAndPassword(auth));
    }

    @GetMapping("/all")
    public ResponseEntity findAllUsers(){
        return ResponseEntity.status(HttpStatus.OK).body(userService.findAll());
    }

    @PostMapping("/comments")
    public ResponseEntity findAllComments(@RequestBody String userName){
        return ResponseEntity.status(HttpStatus.OK).body(userService.findAllComments(userName));
    }

    @PostMapping("/delete")
    public ResponseEntity deleteUserById(@RequestBody Long id){
        return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(id));
    }

    @PostMapping("/upgrade")
    public void upgradeUser(@RequestBody String userName){
        userService.upgradeUser(userName);
    }


}
