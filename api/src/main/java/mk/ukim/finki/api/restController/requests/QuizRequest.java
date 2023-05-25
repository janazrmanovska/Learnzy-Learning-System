package mk.ukim.finki.api.restController.requests;

import lombok.Getter;

import java.util.List;

@Getter
public class QuizRequest {

    private String name;

    private String description;

    private Integer totalQuestions;

    private List<Long> questionIds;

}
