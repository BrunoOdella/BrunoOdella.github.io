import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
})
export class ProjectsComponent {
  projects = [
    {
      title: 'UML2, SOLID, Patrones, GRASP, Angular, métricas, API REST en .NET',
      description: 'Un proyecto orientado a patrones de diseño y buenas prácticas en desarrollo.',
      link: 'https://github.com/BrunoOdella/BuildingManagementAPI',
    },
    {
      title: 'Concurrencia, paralelismo y protocolos de red',
      description: 'Un proyecto que explora conceptos avanzados de concurrencia y protocolos.',
      link: 'https://github.com/BrunoOdella/SharedTravelApp',
    },
    {
      title: 'Redes informáticas',
      description: 'Modelo híbrido para redes informáticas.',
      link: 'https://github.com/BrunoOdella/redes-informaticas-modelo-hibrido',
    },
    {
      title: 'Estructuras de datos y Algoritmos avanzados',
      description: 'Implementación de estructuras y algoritmos avanzados.',
      link: 'https://github.com/BrunoOdella/estructuras-y-algoritmos-2',
    },
    {
      title: 'Trabajo de IA',
      description: 'Proyecto sobre inteligencia artificial aplicado a problemas complejos.',
      link: 'https://github.com/BrunoOdella/IA',
    },
    {
      title: 'Proyecto Freelance para Inmobiliaria Alsur',
      description: 'Interfaz Visual(Angular), API(.NET) y base de datos para inmobiliaria alsur.',
      link: 'https://alsur.uy/inicio',
    },
  ];
}
