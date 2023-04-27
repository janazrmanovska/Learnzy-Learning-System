package mk.ukim.finki.api.repository;

import mk.ukim.finki.api.model.Answer;
import mk.ukim.finki.api.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findAllByQuestion(Question question);
}