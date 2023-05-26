package mk.ukim.finki.api.service;

import mk.ukim.finki.api.model.Lesson;
import mk.ukim.finki.api.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService {

    UserDetails loadUserByUsername(String s) throws UsernameNotFoundException;

    String getLoggedInUser();

    User getAuthenticatedUser();
}
