import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  images = [
    //'/assets/almuerzo-fin-2023-1.jpg',
    //'/assets/almuerzo-fin-2023-2.jpg',
    //'/assets/cena-fin-2022-1.jpg',
    '/assets/6-CENA-FIN-DE-AÑO-CBBA.png',
    //'/assets/cena-fin-2022-3.jpg',
    '/assets/4-DÍA-DE-COMPADRES-CBBA.png',
    //'/assets/cumple-eli-2023.jpg',
    '/assets/1-Dia-del-Trabajador-CBBA.png',
    '/assets/2-Dia-del-trabajador-LA-PAZ.png',
    '/assets/3-Dia-del-Trabajador-SCZ.png',
    //'/assets/evento-2023.jpg',
    '/assets/5-Celebracion-fin-de-año-CBBA.png',
    //'/assets/navidad-2023-2.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.goNext();
    }, 5000); // Cambia cada 3 segundos
  }

  goNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  setIndex(index: number): void {
    this.currentIndex = index;
    clearInterval(this.intervalId); // Detiene el cambio automático al seleccionar manualmente
    this.startAutoSlide(); // Reinicia el cambio automático
  }
}
