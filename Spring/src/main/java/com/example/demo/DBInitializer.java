package com.example.demo;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.modelo.Evento;
import com.example.demo.modelo.Objeto;
import com.example.demo.repositorio.EventoRepository;
import com.example.demo.repositorio.ObjetoRepository;


@Component
public class DBInitializer implements CommandLineRunner {

    @Autowired
    private ObjetoRepository obj;
    @Autowired
    private EventoRepository eve;
    @Override
    public void run(String... args) throws Exception {

        eve.save(new Evento("Autofest es una feria enfocada a los amantes de autos y motos, donde encontrarán una muestra comercial de vehículos, accesorios y productos relacionados con el sector automotriz",LocalDate.now()));
        eve.save(new Evento("La feria es el espacio de reencuentro para el sector automotor de Colombia, donde los interesados en la adquisición de autos, motos, SUV vehículos utilitarios y de carga ligera, entre otros",LocalDate.now()));


        obj.save(new Objeto("Teléfono celular marca Apple", "Área de degustación 01",eve.findById(1).orElseThrow()));
        obj.save(new Objeto("Teléfono celular marca Samsung", "Baños sector 03",eve.findById(1).orElseThrow()));
        
    }

}
