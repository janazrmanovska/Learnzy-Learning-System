package mk.ukim.finki.api.repository;

import mk.ukim.finki.api.model.Question;
import mk.ukim.finki.api.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Optional<Question> findByQuestionIdAndQuiz(Long questionId, Quiz quiz);
}