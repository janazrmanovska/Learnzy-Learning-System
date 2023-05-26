package mk.ukim.finki.api.service.Impl;


import jakarta.transaction.Transactional;
import mk.ukim.finki.api.model.*;
import mk.ukim.finki.api.repository.CategoryRepository;
import mk.ukim.finki.api.repository.LessonRepository;
import mk.ukim.finki.api.restController.requests.LessonRequest;
import mk.ukim.finki.api.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

@Transactional
public class LessonServiceImpl implements LessonService {
    @Autowired
    private LessonRepository lessonRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    @Override
    public Lesson getLessonById(Long id) {
        return lessonRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public Lesson createLesson(LessonRequest lessonRequest) {

        Category category = categoryRepository.findById(lessonRequest.getCategoryId()).orElseThrow(RuntimeException::new);

        Lesson lesson = new Lesson();
        lesson.setTitle(lessonRequest.getTitle());
        lesson.setDescription(lessonRequest.getDescription());
        lesson.setCategory(category);
        lesson.setLevel(Level.valueOf(lessonRequest.getLevel()));
        lesson.setUrlPhoto(lessonRequest.getUrlPhoto());
        lesson.setUrlVideo(lessonRequest.getUrlVideo());


        Lesson savedLesson = lessonRepository.save(lesson);

        return savedLesson;
    }

    @Override
    public Lesson updateLesson(Long id, Lesson lesson) {
        Lesson existingLesson=lessonRepository.findById(id).orElseThrow(RuntimeException::new);
        existingLesson.setTitle(lesson.getTitle());
        existingLesson.setDescription(lesson.getDescription());
        existingLesson.setCategory(lesson.getCategory());
        existingLesson.setLevel(lesson.getLevel());
        existingLesson.setUrlPhoto(lesson.getUrlPhoto());
        existingLesson.setUrlVideo(lesson.getUrlVideo());
        return lessonRepository.save(existingLesson);
    }

    @Override
    public void deleteLesson(Long id) {
        Lesson existingLesson = lessonRepository.findById(id)
                .orElseThrow(RuntimeException::new);
        lessonRepository.delete(existingLesson);
    }

//    @Override
//    public List<Lesson> getLessonsByCategoryName(String categoryName) {
//        return lessonRepository.findByCategoryName(categoryName);
//    }



    @Override
    public List<Lesson> getLessonsByLevel(Level level) {
        return lessonRepository.findByLevel(level);

    }

    @Override
    public void finishLesson(User user, Lesson lesson) {
        int score = calculateLessonScore(lesson);

        user.setScore(user.getScore() + score);

    }

    private int calculateLessonScore(Lesson lesson) {
        int score = 0;

        Level level = lesson.getLevel();
        if (level == Level.LEVEL_BASIC) {
            score = 50;
        } else if (level == Level.LEVEL_ADVANCED) {
            score = 75;
        }
        return score;

    }

}
