package mk.ukim.finki.api.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class CategoryIdNotFoundException extends RuntimeException{
    public CategoryIdNotFoundException(Long id) {
        super(String.format("Category with id: %d is not found", id));
    }
}
