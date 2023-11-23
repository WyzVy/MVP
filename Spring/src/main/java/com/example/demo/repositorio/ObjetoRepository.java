package com.example.demo.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Objeto;

@Repository
public interface ObjetoRepository extends CrudRepository<Objeto, Integer> {
}