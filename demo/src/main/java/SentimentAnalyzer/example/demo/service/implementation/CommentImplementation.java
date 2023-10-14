package SentimentAnalyzer.example.demo.service.implementation;

import SentimentAnalyzer.example.demo.dto.CommentDto;
import SentimentAnalyzer.example.demo.model.Comment;
import SentimentAnalyzer.example.demo.model.Product;
import SentimentAnalyzer.example.demo.model.SpecialWord;
import SentimentAnalyzer.example.demo.model.User;
import SentimentAnalyzer.example.demo.repository.CommentRepository;
import SentimentAnalyzer.example.demo.repository.ProductRepository;
import SentimentAnalyzer.example.demo.repository.SpecialWordRepository;
import SentimentAnalyzer.example.demo.repository.UserRepository;
import SentimentAnalyzer.example.demo.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CommentImplementation implements CommentService {
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final SpecialWordRepository specialWordRepository;

    @Autowired
    public CommentImplementation(CommentRepository commentRepository, UserRepository userRepository,ProductRepository productRepository,SpecialWordRepository specialWordRepository) {
        this.commentRepository = commentRepository;
        this.userRepository= userRepository;
        this.specialWordRepository=specialWordRepository;
        this.productRepository=productRepository;
    }

    public void addComment(CommentDto commentDto){
        Comment comment = new Comment(commentDto.getDesc(),commentDto.getAuthor());
        int review=0;
        commentRepository.save(comment);

        //saving new comment to user's comments
        User user;
        user = userRepository.findByName(comment.getAuthor());
        List<Comment> userComments =user.getComments();
        userComments.add(comment);
        userRepository.save(user);

        //saving new comment to product's comments
        Product product;
        product = productRepository.findFirstByName(commentDto.getProductName());
        List<Comment> productComments = product.getComments();
        productComments.add(comment);
        productRepository.save(product);

        //Generating review
        String aux = comment.getDescription();
        List<SpecialWord> specialWords=(List<SpecialWord>)specialWordRepository.findAll();
        for(int i=0;i<specialWords.size();i++){
            if(aux.contains(specialWords.get(i).getBody()))
            review=review+specialWords.get(i).getValue();
        }
        comment.setReview(review);
        commentRepository.save(comment);
        //saving comment to user's comment list
    }

    public List<Comment> findAll(){
        List<Comment> comments=(List<Comment>) commentRepository.findAll();
        return comments;
    }



    public Comment deleteComment(Long id){
        Comment comment = commentRepository.findById(id).get();
        commentRepository.delete(comment);
        return comment;
    }
}
