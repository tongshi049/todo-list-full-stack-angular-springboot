package com.example.todoList.helloworld;

import org.springframework.web.bind.annotation.*;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    // GET
    // URI - /hello-world
    // method - "Hello World"
    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }


    //hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        throw new RuntimeException("Some Error has happened.");
        //return new HelloWorldBean("Hello World");
    }

    //hello-world-bean/path-variable/teemo
    @GetMapping(path = "/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
