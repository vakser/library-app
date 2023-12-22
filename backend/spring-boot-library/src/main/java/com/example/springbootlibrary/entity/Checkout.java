package com.example.springbootlibrary.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table
@Data
public class Checkout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userEmail;
    private String checkoutDate;
    private String returnDate;
    private Long bookId;

    public Checkout() {}

    public Checkout(String userEmail, String checkoutDate, String returnDate, Long bookId) {
        this.userEmail = userEmail;
        this.checkoutDate = checkoutDate;
        this.returnDate = returnDate;
        this.bookId = bookId;
    }
}
