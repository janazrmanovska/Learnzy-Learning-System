package mk.ukim.finki.api.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService {

    UserDetails loadUserByUsername(String s) throws UsernameNotFoundException;

    String getLoggedInUser();
}
