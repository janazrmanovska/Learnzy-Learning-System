package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class QuizScore {

    @EmbeddedId
    QuizScoreKey id;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @MapsId("quizId")
    @JoinColumn(name = "quiz_id")
    Quiz quiz;

    Double score;
}
