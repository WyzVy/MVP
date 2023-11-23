package com.example.demo.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Evento;
import com.example.demo.repositorio.EventoRepository;

@Service
public class EventoService{
    @Autowired
    private EventoRepository data;

    public List<Evento> listar() {
        return (List<Evento>) data.findAll();
    }

    public Evento buscar(int id) {
        return data.findById(id).orElseThrow();
    }

    public void guardar(Evento p) {
        data.save(p);
    }

    public void borrar(int id) {
        data.deleteById(id);
    }
    public Evento buscardesc(String descripcion) {
        return data.findByDescripcion(descripcion);
    }
    
}
