import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; // Importa ContactComponent

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, ContactComponent], // Asegúrate de importar ContactComponent
})
export class AppComponent {
  title = 'Bruno Odella';
}
