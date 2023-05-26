package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Quiz;
import mk.ukim.finki.api.model.User;
import mk.ukim.finki.api.restController.requests.QuizRequest;
import mk.ukim.finki.api.service.dto.QuizResult;

import java.util.List;
import java.util.Map;

public interface QuizService {

    List<Quiz> getAllQuizzes();

    Quiz createQuiz(QuizRequest quizRequest);

    QuizResult finishQuiz(Long quizId);

    void finishQuiz(User user, Quiz quiz, Map<Long, String> userAnswers);

    Quiz getQuizById(Long quizId);
}
