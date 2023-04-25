package mk.ukim.finki.api.service.Impl;

import mk.ukim.finki.api.model.Category;
import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.Level;
import mk.ukim.finki.api.model.Quiz;
import mk.ukim.finki.api.model.exceptions.CategoryIdNotFoundException;
import mk.ukim.finki.api.model.exceptions.LessonNotFoundException;
import mk.ukim.finki.api.repository.CategoryRepository;
import mk.ukim.finki.api.repository.LessonRepository;
import mk.ukim.finki.api.service.LessonService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonServiceImpl implements LessonService {
    private final LessonRepository lessonRepository;
    private final CategoryRepository categoryRepository;

    public LessonServiceImpl(LessonRepository lessonRepository, CategoryRepository categoryRepository) {
        this.lessonRepository = lessonRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Lesson> findAll() {
        return this.lessonRepository.findAll();
    }

    @Override
    public Lesson findById(Long id) {
        return this.lessonRepository.findById(id)
                .orElseThrow(() -> new LessonNotFoundException(id));
    }

    @Override
    public void deleteById(Long id) {
        this.lessonRepository.deleteById(id);
    }

    @Override
    public Lesson create(String title, String description, Category category, Level level,
                         String urlPhoto, String urlVideo, Quiz quiz) {
        return this.lessonRepository.save(new Lesson(title, description, category, level, urlPhoto, urlVideo, quiz));
    }

    @Override
    public Lesson update(Long id, String title, String description, Long category, Level level,
                         String urlPhoto, String urlVideo, Quiz quiz) {
        Lesson lesson = this.findById(id);
        lesson.setTitle(title);
        lesson.setDescription(description);

        Category cat = this.categoryRepository.findById(category)
                .orElseThrow(()->new CategoryIdNotFoundException(category));
        lesson.setCategory(cat);

        lesson.setLevel(level);
        lesson.setUrlPhoto(urlPhoto);
        lesson.setUrlVideo(urlVideo);
        lesson.setQuiz(quiz);

        return this.lessonRepository.save(lesson);
    }

    @Override
    public List<Lesson> filterLevel(Level level) {
        if(level != null){
            return this.lessonRepository.findAllByLevel(level);
        } else {
            return this.findAll();
        }
    }

    @Override
    public List<Lesson> filterCategory(Long categoryId) {
        Category cat = categoryId != null ? this.categoryRepository.findById(categoryId).orElse((Category)null):null;

        if(categoryId!= null){
            return this.lessonRepository.findAllByCategory(cat);
        } else {
            return this.findAll();
        }
    }
}
