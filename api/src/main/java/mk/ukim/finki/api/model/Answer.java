package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    private String answerContent;

    private boolean isCorrect;
}