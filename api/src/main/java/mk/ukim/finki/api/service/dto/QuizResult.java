package mk.ukim.finki.api.service.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
public class QuizResult {

    private Long quizId;

    private Double score;

    private Map<String, Boolean> questions;
}
