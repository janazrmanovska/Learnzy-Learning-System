package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Category;
import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.Level;
import mk.ukim.finki.api.model.Quiz;

import java.util.List;

public interface LessonService {
    List<Lesson> findAll();
    Lesson findById(Long id);
    void deleteById(Long id);
    Lesson create(String title, String description, Category category, Level level,
                  String urlPhoto, String urlVideo, Quiz quiz);
    Lesson update(Long id, String title, String description, Long category, Level level,
                  String urlPhoto, String urlVideo, Quiz quiz);
    List<Lesson> filterLevel(Level level);
    List<Lesson> filterCategory(Long categoryId);
}