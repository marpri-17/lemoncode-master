import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicGalleryService } from './gallery.service';
import { LogginService } from '../../../core/services/loggin.service';
import { IMusicGalleryItem } from './gallery.model';

@Component({
  selector: 'user-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryView implements OnInit, OnDestroy {
  public albums: IMusicGalleryItem[];
  public loading: boolean = true;

  constructor(
    private logginService: LogginService,
    private musicService: MusicGalleryService
  ) {}

  public ngOnInit() {
    this.musicService
      .getUserFavoritesAlbums(this.logginService.getUsername())
      .subscribe({
        next: (albums) => {
          this.albums = albums;
        },
        error: () => {},
        complete: () => (this.loading = false),
      });
  }

  public ngOnDestroy(): void {
    this.albums = null;
    this.loading = true;
  }
}
