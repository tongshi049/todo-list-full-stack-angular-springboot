package com.example.todoList.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserJPAResource {

    @Autowired
    private UserJpaRepository userJpaRepository;

    @PostMapping("/users")
    public ResponseEntity<Void> createUser (@RequestBody User user) {
        User createdUser = userJpaRepository.save(user);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdUser.getUserId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
