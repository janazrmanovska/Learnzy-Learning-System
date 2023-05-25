package mk.ukim.finki.api.restController.requests;

import lombok.Getter;

import java.util.List;
@Getter
public class LessonRequest {

    private String title;

    private String description;

    private Long categoryId;
    private String level;
    private String urlPhoto;
    private String urlVideo;

}
