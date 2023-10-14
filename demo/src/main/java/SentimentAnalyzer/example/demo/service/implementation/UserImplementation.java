package SentimentAnalyzer.example.demo.service.implementation;

import SentimentAnalyzer.example.demo.dto.AuthDto;
import SentimentAnalyzer.example.demo.dto.RegisterDto;
import SentimentAnalyzer.example.demo.model.Comment;
import SentimentAnalyzer.example.demo.model.User;
import SentimentAnalyzer.example.demo.repository.UserRepository;
import SentimentAnalyzer.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserImplementation implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addUser(RegisterDto dto){
        User user = new User(dto.getName(),dto.getPassword(), dto.getRole());
        userRepository.save(user);
    }

    public List<User> findAll(){
        List<User> client=(List<User>) userRepository.findAll();
        return client;
    }

    public List<Comment> findAllComments(String userName){
        User user = userRepository.findByName(userName);
        List<Comment> comments = user.getComments();
        return comments;
    }

    public void upgradeUser(String userName){
        User user = userRepository.findByName(userName);
        if(user.getRole().equals("admin")) {

        }else if(user.getRole().equals("Product Manager")){
            user.setRole("client");
            userRepository.save(user);
        }else{
            user.setRole("Product Manager");
            userRepository.save(user);
        }
    }



    @Override
    public User findByNameAndPassword(AuthDto dto) {
        User user = userRepository.findByNameAndPassword(dto.getName(),dto.getPassword());
        userRepository.save(user);


        return userRepository.findByNameAndPassword(dto.getName(),dto.getPassword());
    }

    public User deleteUser(Long id){
        User user = userRepository.findById(id).get();
        if(user.getRole().equals("admin")) {

        }else{
            userRepository.delete(user);
        }

        return user;
    }

    public User findByName(String name) {
        User user = userRepository.findByName(name);
        userRepository.save(user);


        return userRepository.findByName(name);
    }
}
