import { Component } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  players = [
    {
      name: 'Marcelo Taranto',
      src: './assets/img/Taranto.png',
      position: 'Arquero',
      goals: 0,
      yellowCards: 1,
      redCards: 0
    },
    {
      name: 'Xande',
      src: './assets/img/Xande.png',
      position: 'Arquero',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Tomas Luna',
      src: './assets/img/Luna.png',
      position: 'Defensor',
      goals: 0,
      yellowCards: 2,
      redCards: 0
    },
    {
      name: 'Eloy Casares',
      src: './assets/img/Casares.png',
      position: 'Defensor',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Ezequiel Cecchini',
      src: './assets/img/Cecchini.png',
      position: 'Defensor',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Matias Acosta',
      src: './assets/img/Acosta.png',
      position: 'Defensor',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Federico Pineda',
      src: './assets/img/Pineda.png',
      position: 'Mediocampista',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Juan Carrizo',
      src: './assets/img/Carrizo.png',
      position: 'Mediocampista',
      goals: 2,
      yellowCards: 1,
      redCards: 0
    },
    {
      name: 'Mateo Vena',
      src: './assets/img/Vena.png',
      position: 'Mediocampista',
      goals: 0,
      yellowCards: 1,
      redCards: 0
    },
    {
      name: 'Alan Albelo',
      src: './assets/img/Albelo.png',
      position: 'Mediocampista',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Franco Violando',
      src: './assets/img/Violando.png',
      position: 'Mediocampista',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Enzo Reynoso',
      src: './assets/img/Reynoso.png',
      position: 'Delantero',
      goals: 3,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Matias Marroubi',
      src: './assets/img/Marroub1i.png',
      position: 'Delantero',
      goals: 1,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Federico Cordeiro',
      src: './assets/img/Cordeiro.png',
      position: 'Delantero',
      goals: 1,
      yellowCards: 0,
      redCards: 0
    },
    {
      name: 'Ema Chatelain',
      src: './assets/img/Chate.png',
      position: 'Delantero',
      goals: 0,
      yellowCards: 0,
      redCards: 0
    },
  ]
}
