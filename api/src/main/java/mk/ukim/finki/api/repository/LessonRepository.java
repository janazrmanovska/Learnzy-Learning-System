package mk.ukim.finki.api.repository;

import mk.ukim.finki.api.model.Category;
import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.Level;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson,Long> {
    List<Lesson> findAllByCategory(Category category);
    List<Lesson> findAllByLevel(Level level);
}
