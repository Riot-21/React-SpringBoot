
package com.example.Api.Backend.repository;

import com.example.Api.Backend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Usuario, Long>{
    Usuario findByEmail(String email);
}
