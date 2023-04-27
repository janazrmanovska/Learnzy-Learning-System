package mk.ukim.finki.api.repository;

import mk.ukim.finki.api.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    void deleteByName(String name);
}
