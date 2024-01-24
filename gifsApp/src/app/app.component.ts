// app.component.ts
import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gifsApp';

  // Puedes agregar propiedades o métodos aquí para interactuar con SidebarComponent si es necesario
}

