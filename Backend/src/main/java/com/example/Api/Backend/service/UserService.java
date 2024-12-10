
package com.example.Api.Backend.service;

import com.example.Api.Backend.model.Usuario;
import com.example.Api.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
        @Autowired
    private UserRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Usuario save(Usuario usuario) {
        usuario.setContrasena(bCryptPasswordEncoder.encode(usuario.getContrasena())); // Encriptar la contraseña
        return usuarioRepository.save(usuario);
    }

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email);

        if (usuario == null) {
            throw new UsernameNotFoundException("Usuario no encontrado");
        }

        return User.builder()
                .username(usuario.getEmail())
                .password(usuario.getContrasena())
                .roles("USER") // Puedes añadir roles aquí según sea necesario
                .build();
    }
}
