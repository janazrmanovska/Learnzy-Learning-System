package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Entity
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    private String questionContent;


    @ElementCollection
    @CollectionTable(name = "question_answer", joinColumns = @JoinColumn(name = "question_id"))
    @MapKeyColumn(name = "answer_content")
    @Column(name = "is_correct")
    private Map<String, Boolean> possibleAnswers;

    private String chosenAnswer;
    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    private Boolean isCorrectlyAnswered;
}