package mk.ukim.finki.api.restController;

import mk.ukim.finki.api.model.Category;
import mk.ukim.finki.api.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoriesRestController {
    private final CategoryService categoryService;

    public CategoriesRestController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Category> findAll(){
        return this.categoryService.listAll();
    }

    @GetMapping("/{category_id}")
    public ResponseEntity<Category> findById(@PathVariable("category_id") Long id){
        return this.categoryService.findById(id)
                .map(category -> ResponseEntity.ok().body(category))
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize(value = "hasRole('ADMIN')")
    public ResponseEntity<Category> addCategory(@RequestParam String name, @RequestParam String description){
        return this.categoryService.create(name,description)
                .map(category -> ResponseEntity.ok().body(category))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/{category_id}")
    @PreAuthorize(value = "hasRole('ADMIN')")
    public ResponseEntity<Category> updateCategory(@PathVariable("category_id") Long id, @RequestParam String name, @RequestParam String description) {
        Category cat = categoryService.update(id, name, description);
        return new ResponseEntity<>(cat, HttpStatus.OK);
    }

    @DeleteMapping("/{category_id}")
    @PreAuthorize(value = "hasRole('ADMIN')")
    public ResponseEntity<Void> deleteById(@PathVariable("category_id") Long id){
        categoryService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}