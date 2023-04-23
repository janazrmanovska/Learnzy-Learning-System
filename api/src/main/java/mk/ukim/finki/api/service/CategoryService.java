package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> listAll();
    Category findById(Long id);
    Category create(String name, String description);
    Category update(Long id, String name, String description);
    void delete(String name);
}
