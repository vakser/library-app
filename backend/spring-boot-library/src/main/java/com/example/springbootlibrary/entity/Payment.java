package com.example.springbootlibrary.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userEmail;
    private double amount;
}
