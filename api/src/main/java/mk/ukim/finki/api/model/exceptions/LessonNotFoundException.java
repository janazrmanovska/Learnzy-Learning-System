package mk.ukim.finki.api.model.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class LessonNotFoundException extends RuntimeException{
    public LessonNotFoundException(Long id) {
        super(String.format("Lesson with id: %d is not found", id));
    }
}
