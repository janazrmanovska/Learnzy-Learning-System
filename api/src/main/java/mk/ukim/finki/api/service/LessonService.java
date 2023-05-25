package mk.ukim.finki.api.service;


import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.Level;
import mk.ukim.finki.api.restController.requests.LessonRequest;


import java.util.List;

public interface LessonService {

    List<Lesson> getAllLessons();

    Lesson getLessonById(Long id);

    Lesson createLesson(LessonRequest lessonRequest);

    Lesson updateLesson(Long id, Lesson lesson);

    void deleteLesson(Long id);

//    List<Lesson> getLessonsByCategoryName(String categoryName);

    List<Lesson> getLessonsByLevel(Level level);
}

