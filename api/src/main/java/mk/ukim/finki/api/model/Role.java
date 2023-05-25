package mk.ukim.finki.api.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.Collections;


@RequiredArgsConstructor
public enum Role {
  ADMIN("ROLE_ADMIN"),
  USER("ROLE_USER");

  private String authority;

  Role(String authority) {
    this.authority = authority;
  }

  public String getAuthority() {
    return authority;
  }

  public Collection<GrantedAuthority> getAuthorities() {
    return Collections.singletonList(new SimpleGrantedAuthority(authority));
  }

//  USER(Collections.emptySet()),
//  ADMIN(
//          Set.of(
//                  ADMIN_READ,
//                  ADMIN_UPDATE,
//                  ADMIN_DELETE,
//                  ADMIN_CREATE
//          )
//  )
//
//  ;
//
//  @Getter
//  private final Set<Permission> permissions;
//
//  public List<SimpleGrantedAuthority> getAuthorities() {
//    var authorities = getPermissions()
//            .stream()
//            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
//            .collect(Collectors.toList());
//    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
//    return authorities;
//  }

}
