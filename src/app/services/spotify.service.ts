import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDP2jL_t-gWKaaqRZm8DVUhYxRVvKbsWFx7DGecnLu3o1O7OgBfPxepVhyho_zuiUjDJWdNFgirOg36_6Q',
    });
    return this.http.get(url, { headers });
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data['artists'].items)
    );
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data: any) => data['artists'].items));
  }
}
