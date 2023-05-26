package mk.ukim.finki.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LessonResult {
    private String userName;
    private String lessonTitle;
    private int score;
}
