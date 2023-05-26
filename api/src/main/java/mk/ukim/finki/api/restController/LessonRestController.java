package mk.ukim.finki.api.restController;

import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.LessonResult;
import mk.ukim.finki.api.model.Level;
import mk.ukim.finki.api.model.User;
import mk.ukim.finki.api.restController.requests.LessonRequest;
import mk.ukim.finki.api.service.LessonService;
import mk.ukim.finki.api.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/lessons")
public class LessonRestController {
    private final LessonService lessonService;
    private final UserService userService;
    public LessonRestController(LessonService lessonService, UserService userService) {
        this.lessonService = lessonService;
        this.userService = userService;
    }
    @GetMapping
    public ResponseEntity<List<Lesson>> getAllLessons() {
        List<Lesson> lessons = lessonService.getAllLessons();
        return new ResponseEntity<>(lessons, HttpStatus.OK);
    }

    @GetMapping("/{lesson_id}")
    public ResponseEntity<Lesson> getLesson(@PathVariable("lesson_id") Long lessonId) {
        Lesson lesson = lessonService.getLessonById(lessonId);
        return new ResponseEntity<>(lesson, HttpStatus.OK);
    }

    @PostMapping("/add")
    @PreAuthorize(value = "hasRole('ADMIN')")
    public ResponseEntity<Lesson> addLesson(@RequestBody LessonRequest lesson) {
        Lesson createdLesson = lessonService.createLesson(lesson);
        return new ResponseEntity<>(createdLesson, HttpStatus.CREATED);
    }

    @PutMapping("/{lesson_id}")
    @PreAuthorize(value = "hasRole('ADMIN')")
    public ResponseEntity<Lesson> updateLesson(@PathVariable("lesson_id") Long lessonId,
                                               @RequestBody Lesson lesson) {
        Lesson updatedLesson = lessonService.updateLesson(lessonId, lesson);
        return new ResponseEntity<>(updatedLesson, HttpStatus.OK);
    }

    @DeleteMapping("/{lesson_id}")
    @PreAuthorize(value = "hasRole('ADMIN')")
    public ResponseEntity<Void> deleteLesson(@PathVariable("lesson_id") Long lessonId) {
        lessonService.deleteLesson(lessonId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
//    @GetMapping("/category/{categoryName}")
//    public ResponseEntity<List<Lesson>> getLessonsByCategoryName(@PathVariable String categoryName) {
//        List<Lesson> lessons = lessonService.getLessonsByCategoryName(categoryName);
//        return new ResponseEntity<>(lessons, HttpStatus.OK);
//    }

    @GetMapping("/level/{level}")
    public ResponseEntity<List<Lesson>> getLessonsByLevel(@PathVariable Level level) {
        List<Lesson> lessons = lessonService.getLessonsByLevel(level);
        return new ResponseEntity<>(lessons, HttpStatus.OK);
    }

    @PostMapping("{lessonId}/finish")
    public void finishLesson(@PathVariable Long lessonId) {
        User user = userService.getAuthenticatedUser();

        Lesson lesson = lessonService.getLessonById(lessonId);

        lessonService.finishLesson(user, lesson);
    }


}
