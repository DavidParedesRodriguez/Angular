import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrl: './no-comunes.component.css',
  animations: [
    trigger('fieldsetContent', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(300)]),
      transition('* => void', [animate(300, style({ opacity: 0 }))]),
    ]),
    trigger('bubbleAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate(
          '0.3s ease-in-out',
          style({ transform: 'scale(1)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '0.3s ease-in-out',
          style({ transform: 'scale(0)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class NoComunesComponent {
  nombre: string = 'Fernando'; // Cambiar el nombre según el género deseado
  gender: string = 'male'; // Cambiar el género según corresponda
  inviteMap: any = {
    male: 'invitarlo',
    female: 'invitarla',
    other: 'invitarlo',
  }; // Mapa de invitaciones

  //i18nPlural
  clientes: string[] = ['Carmen', 'Emilio', 'Pablo', 'Alex', 'Guille', 'Pau'];
  mensageMapping: { [k: string]: string } = {
    '=0': 'sin clientes',
    '=1': 'un cliente',
    '=2': 'dos clientes',
    other: '# clientes',
  };

  cambiarCliente() {
    const nombresMasculinos = ['Juan', 'Pedro', 'Luis', 'Carlos'];
    const nombresFemeninos = ['María', 'Ana', 'Luisa', 'Laura'];

    const nuevoNombre =
      this.gender === 'male'
        ? nombresMasculinos[
            Math.floor(Math.random() * nombresMasculinos.length)
          ]
        : nombresFemeninos[Math.floor(Math.random() * nombresFemeninos.length)];

    this.nombre = nuevoNombre;
  }

  borrarCliente() {
    if (this.clientes.length === 0) {
      alert('Actualmente no tenemos ningún cliente esperando');
    } else {
      this.clientes = [];
    }
  }

  borrarUnCliente() {
    if (this.clientes.length === 0) {
      alert('Actualmente no tenemos ningún cliente esperando');
    } else {
      this.clientes.splice(0, 1);
    }
  }


  //KeyValuePipe
  persona = {
    nombre: 'David',
    edad: 21,
    direccion: 'Lliria',
  };

  //JsonPipe
  heroes = [
    {
      nombre:"Superman",
      value: true
    },
    {
      nombre: "Robin",
      value: false
    },
    {
      nombre: "Aquaman",
      value: false
    }
  ]

  //Async Pipe
  //Usarlo mediante onservable

  //creamos un onservable
  miObservable = interval(1000); //milésimas de segundo. Observale de valores númericos 0,1,2,3...

  //con promesa
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() =>{
      resolve("Tenemos data de promesa");
    }, 3500);
  })
}
