package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    private String name;

    private String description;

    private Integer totalQuestions;

    @OneToMany
    private List<Question> questions;


    @OneToMany(mappedBy = "quiz")
    private Set<QuizScore> scores;

}