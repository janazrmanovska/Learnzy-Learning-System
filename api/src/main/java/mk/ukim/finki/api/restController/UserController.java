package mk.ukim.finki.api.restController;

import mk.ukim.finki.api.model.User;
import mk.ukim.finki.api.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String getLoggedInUser() {
        // Retrieve the logged-in user details here
        String user = userService.getLoggedInUser();
        return user;
    }


}