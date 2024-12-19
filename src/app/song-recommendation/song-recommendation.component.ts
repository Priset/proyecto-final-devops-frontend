import { Component } from '@angular/core';
import {SongRecommendationService} from './song-recommendation.service';
import {FormsModule, NgForm} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-song-recommendation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './song-recommendation.component.html',
  styleUrl: './song-recommendation.component.css'
})
export class SongRecommendationComponent {
  artist: string = '';
  song: string = '';
  artistError: string = '';
  songError: string = '';

  constructor(private songRecommendationService: SongRecommendationService) { }

  closePopup(): void {
    this.artist = ''; // Limpiar el campo de texto de artista
    this.song = ''; // Limpiar el campo de texto de canción
    this.artistError = ''; // Limpiar mensajes de error
    this.songError = ''; // Limpiar mensajes de error
    document.getElementById('songPopup')?.classList.remove('visible');
    document.getElementById('backdrop')?.classList.remove('visible');
  }

  openPopup(): void {
    document.getElementById('songPopup')?.classList.add('visible');
    document.getElementById('backdrop')?.classList.add('visible');
  }

  shareSong(form: NgForm): void {
    this.artistError = '';
    this.songError = '';

    if (!this.artist.trim()) {
      this.artistError = 'Este campo es obligatorio.';
    } else if (this.artist.length > 30) {
      this.artistError = 'El nombre del artista no puede superar los 30 caracteres.';
    }

    if (!this.song.trim()) {
      this.songError = 'Este campo es obligatorio.';
    } else if (this.song.length > 30) {
      this.songError = 'El nombre de la canción no puede superar los 30 caracteres.';
    }

    if (this.artistError || this.songError) {
      return; // Stop if there are errors
    }

    if (form.valid) {
      this.songRecommendationService
        .sendSongRecommendation(this.artist, this.song)
        .subscribe(
          (response) => {
            console.log('Song recommendation sent successfully', response);
            this.closePopup();
          },
          (error) => {
            console.error('Error sending song recommendation', error);
          }
        );
    }
  }
}
