package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.LevelLesson;

import java.util.List;

public interface LessonService {
    List<Lesson> getAllLessons();

    Lesson getLessonById(Long id);

    Lesson createLesson(Lesson lesson);

    Lesson updateLesson(Long id, Lesson lesson);

    void deleteLesson(Long id);

    List<Lesson> getLessonsByCategoryName(String categoryName);

    List<Lesson> getLessonsByLevel(LevelLesson level);
}
