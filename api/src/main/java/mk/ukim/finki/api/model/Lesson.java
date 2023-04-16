package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String title;
    String description;

    @ManyToOne
    Category category;

    @Enumerated(value = EnumType.STRING)
    private Level level;

    @Column(length=1000000)
    String urlPhoto;

    @Column(length=1000000)
    String urlVideo;

    public Lesson(String title, String description, Category category, Level level, String urlPhoto, String urlVideo){
        this.title = title;
        this.description = description;
        this.category = category;
        this.level = level;
        this.urlPhoto = urlPhoto;
        this.urlVideo = urlVideo;
    }

}
