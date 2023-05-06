package mk.ukim.finki.api.service;

import mk.ukim.finki.api.restController.requests.QuestionRequest;
import mk.ukim.finki.api.service.dto.QuestionDto;

public interface QuestionService {

    QuestionDto getQuizQuestion(Long quizId, Long questionId);

    QuestionDto answerQuizQuestion(Long quizId, Long questionId, String chosenAnswer);

    QuestionDto createQuestion(QuestionRequest questionRequest);

}
