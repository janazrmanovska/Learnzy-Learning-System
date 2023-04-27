package mk.ukim.finki.api.repository;

import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.LevelLesson;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson,Long> {
    List<Lesson> findByCategoryName(String categoryName);

    List<Lesson> findByLevel(LevelLesson level);

}
