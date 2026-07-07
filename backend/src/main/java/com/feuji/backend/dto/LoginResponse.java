package com.feuji.backend.dto;

public class LoginResponse {
    private String email;
    private String role;
    private String message;

    public LoginResponse(String email, String role, String message) {
        this.email = email;
        this.role = role;
        this.message = message;
    }

    // Getters and Setters
    public String getEmail() { return email; }
    public String getRole() { return role; }
    public String getMessage() { return message; }
}