import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicGalleryService } from './gallery.service';
import { LogginService } from '../../../core/services/loggin.service';
import { IMusicGalleryItemViewModel } from './gallery.model';
import { delay } from 'rxjs';

@Component({
  selector: 'user-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.scss'],
})
export class GalleryView implements OnInit, OnDestroy {
  public albums: IMusicGalleryItemViewModel[];
  public loading: boolean = true;

  public selected: IMusicGalleryItemViewModel;

  public isPlaying = false;

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

  public onSelectedImage(albumId: number) {
    this.clearSelected();
    const selectedAlbum = this.albums.find((album) => album.id === +albumId);
    if (selectedAlbum) {
      this.selected = selectedAlbum;
      selectedAlbum.selected = true;
    }
  }

  public onSelectedArrowControls(direction: 'prev' | 'next') {
    const indexModifier = direction === 'prev' ? -1 : +1;
    const selectedIndex = this.albums.findIndex(
      (album) => album.selected === true
    );
    const modifiedIndex =
      selectedIndex + indexModifier < 0
        ? this.albums.length - 1 // Go to last
        : selectedIndex + indexModifier > this.albums.length - 1
        ? 0 // Go to first
        : selectedIndex + indexModifier;
    this.onSelectedImage(this.albums[modifiedIndex].id);
  }

  public toggleIsPlaying() {
    this.isPlaying = !this.isPlaying;
  }

  private clearSelected() {
    if (this.albums) {
      this.albums.forEach((album) => (album.selected = false));
    }
    this.selected = null;
  }
}
