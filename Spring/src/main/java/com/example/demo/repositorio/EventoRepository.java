package com.example.demo.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Evento;

@Repository
public interface EventoRepository extends CrudRepository<Evento, Integer> {
    Evento findByDescripcion(String descripcion);
}