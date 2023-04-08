import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MOCK_ACTIVATED } from '../../../core/constants';
import { getUserFavoritesAlbumsMock } from './user-gallery.mock';
import { IMusicGalleryItem } from './gallery.model';

@Injectable({ providedIn: 'root' })
export class MusicGalleryService {
  constructor() {}

  public getUserFavoritesAlbums(
    username: string
  ): Observable<IMusicGalleryItem[]> {
    if (MOCK_ACTIVATED) {
      return of(getUserFavoritesAlbumsMock());
    }
    console.log(`TODO: implements service to get favourites by ${username}`);
    return throwError(() => new Error('Service not found'));
  }
}
