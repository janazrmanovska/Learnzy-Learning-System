package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> listAll();
    Optional<Category> findById(Long id);
    Optional<Category> create(String name, String description);
    Category update(Long id, String name, String description);
    void delete(String name);
    void deleteById(Long id);
}
