package com.example.todoList.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWVtbyIsImV4cCI6MTU2MDg3MjM1MCwiaWF0IjoxNTYwMjY3NTUwfQ.vP_-qV3BfUke4jKDvd0KXuHYEJUTF2bgRJ-l730P_AGJFPYI33Jmzidwy41VKO40p3ISaUs7Qk1NE-PjpfrbNw"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
