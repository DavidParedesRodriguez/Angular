import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

@Input() personaje:any[] = [];//le decimos que estos personajes van a venir del padre

}
