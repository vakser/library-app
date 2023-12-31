package com.example.springbootlibrary.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@Data
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userEmail;
    @CreationTimestamp
    private Date date;
    private double rating;
    private Long bookId;
    private String reviewDescription;
}
