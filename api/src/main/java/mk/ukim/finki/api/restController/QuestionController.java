package mk.ukim.finki.api.restController;

import mk.ukim.finki.api.restController.requests.QuestionRequest;
import mk.ukim.finki.api.service.QuestionService;
import mk.ukim.finki.api.service.dto.QuestionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public ResponseEntity<QuestionDto> createQuestion (@RequestBody QuestionRequest question) {
        QuestionDto questionDto = this.questionService.createQuestion(question);
        return new ResponseEntity<>(questionDto, HttpStatus.OK);
    }
}
