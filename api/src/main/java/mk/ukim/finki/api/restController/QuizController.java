package mk.ukim.finki.api.restController;

import mk.ukim.finki.api.model.Quiz;
import mk.ukim.finki.api.model.User;
import mk.ukim.finki.api.restController.requests.QuizRequest;
import mk.ukim.finki.api.service.QuestionService;
import mk.ukim.finki.api.service.QuizService;
import mk.ukim.finki.api.service.UserService;
import mk.ukim.finki.api.service.dto.QuestionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;

    private final QuestionService questionService;
    private final UserService userService;
    public QuizController(QuizService quizService, QuestionService questionService, UserService userService) {
        this.quizService = quizService;
        this.questionService = questionService;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<Quiz>> getAllQuizzes() {
        List<Quiz> quizzes = this.quizService.getAllQuizzes();
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    @PostMapping
    @PreAuthorize(value = "hasRole('ADMIN')")
    ResponseEntity<Quiz> createQuiz (@RequestBody QuizRequest quiz) {
        Quiz createdQuiz = this.quizService.createQuiz(quiz);
        return new ResponseEntity<>(createdQuiz, HttpStatus.CREATED);
    }

    @GetMapping("{quiz_id}/questions/{question_id}")
    ResponseEntity<QuestionDto> getQuizQuestion (@PathVariable("quiz_id") Long quizId,
                                                 @PathVariable("question_id") Long questionId) {

        QuestionDto questionDto = this.questionService.getQuizQuestion(quizId, questionId);
        return new ResponseEntity<>(questionDto, HttpStatus.OK);
    }

    @PostMapping("{quiz_id}/questions/{question_id}")
    ResponseEntity<QuestionDto> answerQuizQuestion (@PathVariable("quiz_id") Long quizId,
                                                    @PathVariable("question_id") Long questionId,
                                                    @RequestBody String chosenAnswer) {

        QuestionDto questionDto = this.questionService.answerQuizQuestion(quizId, questionId, chosenAnswer);
        return new ResponseEntity<>(questionDto, HttpStatus.OK);
    }

//    @GetMapping("{quiz_id}/finish")
//    ResponseEntity<QuizResult> finishQuiz (@PathVariable("quiz_id") Long quizId) {
//        QuizResult result = this.quizService.finishQuiz(quizId);
//        return new ResponseEntity<>(result, HttpStatus.OK);
//    }

    @PostMapping("{quizId}/finish")
    public void finishQuiz(@PathVariable Long quizId, @RequestBody Map<Long, String> userAnswers) {
        User user = userService.getAuthenticatedUser();

        Quiz quiz = quizService.getQuizById(quizId);

        quizService.finishQuiz(user, quiz, userAnswers);
    }
}
