
package com.quizwizard.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String email;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<StudentResponse> responses;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<ExamResult> results;
}
