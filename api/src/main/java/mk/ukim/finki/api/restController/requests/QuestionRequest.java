package mk.ukim.finki.api.restController.requests;

import lombok.Getter;

import java.util.Map;

@Getter
public class QuestionRequest {

    private Long quizId;

    private String questionContent;

    private Map<String, Boolean> possibleAnswers;

}
