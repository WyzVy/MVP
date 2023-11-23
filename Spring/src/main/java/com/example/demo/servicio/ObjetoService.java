package com.example.demo.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Objeto;
import com.example.demo.repositorio.ObjetoRepository;

@Service
public class ObjetoService{
    @Autowired
    private ObjetoRepository data;

    public List<Objeto> listar() {
        return (List<Objeto>) data.findAll();
    }

    public Objeto buscar(int id) {
        return data.findById(id).orElseThrow();
    }

    public void guardar(Objeto p) {
        data.save(p);
    }

    public void borrar(int id) {
        data.deleteById(id);
    }
    
}