package mk.ukim.finki.api.service.Impl;

import mk.ukim.finki.api.model.Category;
import mk.ukim.finki.api.model.exceptions.CategoryIdNotFoundException;
import mk.ukim.finki.api.repository.CategoryRepository;
import mk.ukim.finki.api.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> listAll() {
        return this.categoryRepository.findAll();
    }

    @Override
    public Optional<Category> findById(Long id) {
        return this.categoryRepository.findById(id);
    }

    @Override
    public Optional<Category> create(String name, String description) {
        return Optional.of(this.categoryRepository.save(new Category(name, description)));
    }

    @Override
    public Category update(Long id, String name, String description) {
        Category cat = this.categoryRepository.findById(id).
                orElseThrow(()->new CategoryIdNotFoundException(id));
        cat.setName(name);
        cat.setDescription(description);
        return this.categoryRepository.save(cat);
    }

    @Override
    public void delete(String name) {
        this.categoryRepository.deleteByName(name);
    }

    @Override
    public void deleteById(Long id) {
      this.categoryRepository.deleteById(id);
    }
}
