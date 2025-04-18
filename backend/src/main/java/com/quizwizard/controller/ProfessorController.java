
package com.quizwizard.controller;

import com.quizwizard.dto.LoginRequest;
import com.quizwizard.dto.ProfessorDto;
import com.quizwizard.model.Professor;
import com.quizwizard.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/professors")
@CrossOrigin(origins = "*")
public class ProfessorController {

    @Autowired
    private ProfessorRepository professorRepository;
    
    // Simple map to store tokens (in a real app, use a proper JWT implementation)
    private Map<String, Long> tokenToProfessorId = new HashMap<>();

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<Professor> professorOpt = professorRepository.findByEmail(loginRequest.getEmail());
        
        if (professorOpt.isPresent() && professorOpt.get().getPassword().equals(loginRequest.getPassword())) {
            Professor professor = professorOpt.get();
            ProfessorDto dto = new ProfessorDto();
            dto.setId(professor.getId());
            dto.setName(professor.getName());
            dto.setEmail(professor.getEmail());
            
            // Generate a simple token (in a real app, use JWT)
            String token = UUID.randomUUID().toString();
            tokenToProfessorId.put(token, professor.getId());
            
            Map<String, Object> response = new HashMap<>();
            response.put("user", dto);
            response.put("token", token);
            
            return ResponseEntity.ok(response);
        }
        
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Professor professor) {
        if (professorRepository.findByEmail(professor.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already in use");
        }
        
        // Validate request
        if (professor.getName() == null || professor.getName().trim().isEmpty() ||
            professor.getEmail() == null || professor.getEmail().trim().isEmpty() ||
            professor.getPassword() == null || professor.getPassword().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Name, email and password are required");
        }
        
        Professor savedProfessor = professorRepository.save(professor);
        ProfessorDto dto = new ProfessorDto();
        dto.setId(savedProfessor.getId());
        dto.setName(savedProfessor.getName());
        dto.setEmail(savedProfessor.getEmail());
        
        // Generate a simple token (in a real app, use JWT)
        String token = UUID.randomUUID().toString();
        tokenToProfessorId.put(token, savedProfessor.getId());
        
        Map<String, Object> response = new HashMap<>();
        response.put("user", dto);
        response.put("token", token);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/validate-token")
    public ResponseEntity<?> validateToken(@RequestParam String token) {
        if (tokenToProfessorId.containsKey(token)) {
            Long professorId = tokenToProfessorId.get(token);
            Optional<Professor> professorOpt = professorRepository.findById(professorId);
            
            if (professorOpt.isPresent()) {
                Professor professor = professorOpt.get();
                ProfessorDto dto = new ProfessorDto();
                dto.setId(professor.getId());
                dto.setName(professor.getName());
                dto.setEmail(professor.getEmail());
                
                return ResponseEntity.ok(dto);
            }
        }
        
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
    }
}
