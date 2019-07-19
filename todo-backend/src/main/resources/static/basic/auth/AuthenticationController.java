package com.example.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthenticationController {

    // GET
    @GetMapping(path = "/basicauth")
    public AuthenticationBean authBean() {
        return new AuthenticationBean("You are authenticated.");
    }
}
