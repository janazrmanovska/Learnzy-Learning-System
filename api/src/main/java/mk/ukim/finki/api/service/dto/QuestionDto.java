package mk.ukim.finki.api.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionDto {

    private Long questionId;

    private Long quizId;

    private String questionContent;

    private List<String> answers;

    private String chosenAnswer;
}
