package mk.ukim.finki.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Embeddable
@AllArgsConstructor
@EqualsAndHashCode
public class QuizScoreKey implements Serializable {
    @Column(name = "user_id")
    Integer userId;

    @Column(name = "quiz_id")
    Long quizId;

}
