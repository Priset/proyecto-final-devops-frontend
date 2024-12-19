import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  redirectToRegister(): void {
    window.open('https://forms.office.com/r/xiRiUvhS7R', '_blank');
  }
}
