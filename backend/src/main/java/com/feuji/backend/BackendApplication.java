package com.feuji.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.TimeZone;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class BackendApplication {

    @PostConstruct
    public void init() {
        // Force the JVM to use Asia/Kolkata
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Kolkata"));
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}