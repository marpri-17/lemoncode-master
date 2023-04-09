import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicGalleryService } from './gallery.service';
import { LogginService } from '../../../core/services/loggin.service';
import { IMusicGalleryItem } from './gallery.model';
import { delay } from 'rxjs';

@Component({
  selector: 'user-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.scss'],
})
export class GalleryView implements OnInit, OnDestroy {
  public albums: IMusicGalleryItem[];
  public loading: boolean = true;

  private spinnerTimeOut = 1000; // 3000;

  constructor(
    private logginService: LogginService,
    private musicService: MusicGalleryService
  ) {}

  public ngOnInit() {
    this.musicService
      .getUserFavoritesAlbums(this.logginService.getUsername())
      .pipe(delay(this.spinnerTimeOut))
      .subscribe({
        next: (albums) => {
          this.albums = albums;
        },
        error: () => {},
        complete: () => (this.loading = false),
      });
  }

  public ngOnDestroy(): void {
    this.albums = [];
    this.loading = true;
  }

  public onSelectedImage(albumId: string) {
    if (isNaN(+albumId)) {
      console.error('album id is not valid');
    } else {
      // Destacar imagen
    }
  }
}
