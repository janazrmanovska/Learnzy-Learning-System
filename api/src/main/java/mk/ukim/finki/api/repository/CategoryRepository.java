package mk.ukim.finki.api.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository {
    void deleteByName(String name);
}
