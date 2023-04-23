package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    private String name;

    private String description;

    private Integer totalQuestions;

    @OneToMany(mappedBy = "quiz")
    private List<Question> questions;

    //TODO: add property for the lesson
}