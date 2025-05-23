package com.mstra.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class HomeController {

    @GetMapping
    public String home() {
        return "Welcome to trading platform";
    }

    @GetMapping("api")
    public String securedHome() {
        return "Welcome to secured trading platform";
    }
}
