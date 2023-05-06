package mk.ukim.finki.api.repository;

import mk.ukim.finki.api.model.QuizScore;
import mk.ukim.finki.api.model.QuizScoreKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizScoreRepository extends JpaRepository<QuizScore, QuizScoreKey> {
}
