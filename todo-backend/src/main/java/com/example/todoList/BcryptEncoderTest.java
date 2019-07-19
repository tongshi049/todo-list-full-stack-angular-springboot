package com.example.todoList;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        for (int i = 1; i <= 10; i++) {
            String encodedString = encoder.encode("qwer");
            System.out.println(encodedString);
        }


    }
}
