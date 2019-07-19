package com.example.todoList.jwt;

import com.example.todoList.todo.User;
import com.example.todoList.todo.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

//    static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
//    static {
//        inMemoryUserList.add(new JwtUserDetails(1L, "teemo",
//                "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
//        inMemoryUserList.add(new JwtUserDetails(2L, "garen",
//                "$2a$10$XLAxdZ5mJv1G.Hz8W4jsYe1p/xWhCxv0Wq257QZ1dH7CNpayj1Ooy", "ROLE_USER_2"));
//    }

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        /*Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
                .filter(user -> user.getUsername().equals(username)).findFirst();

        if (!findFirst.isPresent()) {
            throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
        }

        return findFirst.get();*/

        List<User> users = userJpaRepository.findUserByUsername(username);

        if (users.size() == 0)
            throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));

        User user = users.get(0);

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedString = "";

        for (int i = 1; i <= 10; i++) {
            encodedString = encoder.encode(user.getPassword());
        }

        user.setPassword(encodedString);

        UserDetails userDetails = new JwtUserDetails(user.getUserId(), username,
                user.getPassword(), "ROLE_USER_2");

        return userDetails;

    }

}
