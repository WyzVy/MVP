package com.example.demo.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Objeto;
import com.example.demo.servicio.EventoService;
import com.example.demo.servicio.ObjetoService;

@RestController
@RequestMapping("/api_objeto")
public class ObjetoRestController {
    @Autowired
    private ObjetoService objserv;
    @Autowired
    private EventoService evserv;
    @GetMapping("/listarObjetos")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Objeto> listar(){
        List<Objeto> vehiculos=objserv.listar();
        return vehiculos;
    }
    
    @PostMapping("/guardarObjeto")
    @CrossOrigin(origins="http://localhost:4200")
    public void guardar(@Validated @RequestBody Objeto p){
        p.setId(0);
        p.setEvento(evserv.buscardesc(p.getDescripcion()));
        objserv.guardar(p);
    }
}
