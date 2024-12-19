import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongRecommendationService {
  private apiUrl = 'https://invitacion-web-goit-backend.vercel.app/api/song-recommendations/';

  constructor(private http: HttpClient) { }

  sendSongRecommendation(artist: string, song: string): Observable<any> {
    const body = { artist, song };
    return this.http.post(this.apiUrl, body);
  }
}
