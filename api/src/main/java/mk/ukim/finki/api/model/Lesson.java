package mk.ukim.finki.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_lesson")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    private CategoryLesson category;

    @Enumerated(EnumType.STRING)
    private LevelLesson level;

    private String urlPhoto;

    private String urlVideo;

    @OneToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

}
