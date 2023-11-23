package com.example.demo.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Evento;
import com.example.demo.servicio.EventoService;

@RestController
@RequestMapping("/api_evento")
public class EventoRestController {
    @Autowired
    private EventoService evserv;
    @GetMapping("/listarEventos")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Evento> listar(){
        List<Evento> eventos=evserv.listar();
        return eventos;
    }
    
    @PostMapping("/guardarEvento")
    @CrossOrigin(origins="http://localhost:4200")
    public void guardar(Evento p){
        evserv.guardar(p);
    }
}
