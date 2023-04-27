package mk.ukim.finki.api.controller;

import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.service.LessonService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/lessons")
public class LessonController {
    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @GetMapping("/{lesson_id}")
    public ModelAndView getLesson(@PathVariable("lesson_id") Long lessonId) {
        Lesson lesson = lessonService.getLessonById(lessonId);
        ModelAndView modelAndView = new ModelAndView("lesson");
        modelAndView.addObject("lesson", lesson);
        return modelAndView;
    }

    @GetMapping("/new")
    public ModelAndView newLesson() {
        Lesson lesson = new Lesson();
        ModelAndView modelAndView = new ModelAndView("new_lesson");
        modelAndView.addObject("lesson", lesson);
        return modelAndView;
    }

    @PostMapping("/save")
    public String saveLesson(@ModelAttribute("lesson") Lesson lesson) {
        lessonService.createLesson(lesson);
        return "redirect:/lessons";
    }

    @GetMapping("/{lesson_id}/edit")
    public ModelAndView editLesson(@PathVariable("lesson_id") Long lessonId) {
        Lesson lesson = lessonService.getLessonById(lessonId);
        ModelAndView modelAndView = new ModelAndView("edit_lesson");
        modelAndView.addObject("lesson", lesson);
        return modelAndView;
    }

    @PostMapping("/{lesson_id}/update")
    public String updateLesson(@PathVariable("lesson_id") Long lessonId, @ModelAttribute("lesson") Lesson lesson) {
        lessonService.updateLesson(lessonId, lesson);
        return "redirect:/lessons/" + lessonId;
    }

    @PostMapping("/{lesson_id}/delete")
    public String deleteLesson(@PathVariable("lesson_id") Long lessonId) {
        lessonService.deleteLesson(lessonId);
        return "redirect:/lessons";
    }

    @GetMapping
    public ModelAndView listLessons() {
        List<Lesson> lessons = lessonService.getAllLessons();
        ModelAndView modelAndView = new ModelAndView("lessons");
        modelAndView.addObject("lessons", lessons);
        return modelAndView;
    }
}
