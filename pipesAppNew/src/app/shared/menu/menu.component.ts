import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
     {
      label: "Pipes de Angular",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Textos y Fechas",
          icon: "pi pi-align-left", //flecha
          routerLink: ""
        },
        {
          label: "Números",
          icon: "pi pi-dollar",
          routerLink: ""
        },
        {
          label: "No comunes",
          icon: "pi pi-globe",
          routerLink: ""
        }
      ]
     }
    ];
  }
}
