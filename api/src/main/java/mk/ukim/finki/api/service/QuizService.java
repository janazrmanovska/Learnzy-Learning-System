package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Quiz;
import mk.ukim.finki.api.restController.requests.QuizRequest;
import mk.ukim.finki.api.service.dto.QuizResult;

import java.util.List;

public interface QuizService {

    List<Quiz> getAllQuizzes();

    Quiz createQuiz(QuizRequest quizRequest);

    QuizResult finishQuiz(Long quizId);

}
