import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MusicGalleryService } from './gallery.service';
import { LogginService } from '../../../core/services/loggin.service';
import { IMusicGalleryItemViewModel } from './gallery.model';
import { delay } from 'rxjs';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'user-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.scss'],
})
export class GalleryView implements OnInit, OnDestroy {
  @ViewChild('selectedPic')
  public selectedPic: ElementRef<HTMLImageElement>;

  public albums: IMusicGalleryItemViewModel[];
  public loading: boolean = true;

  public selected: IMusicGalleryItemViewModel;

  public isPlaying = false;

  private spinnerTimeOut = 1000; // 3000;

  private playerTimer = 2000;
  private intervalPlayerId;

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

  public toggleIsPlaying(action: 'play' | 'stop') {
    this.isPlaying = !this.isPlaying;
    action === 'play' ? this.setPlayerInterval() : this.clearPlayerInterval();
  }

  public onZoomIn() {
    // Apply increment of 2% over img original width
    const widthRatioIncrease = 0.2;
    const calculatedIncreadesSizePx =
      this.selectedPic.nativeElement.width * widthRatioIncrease +
      this.selectedPic.nativeElement.width;
    this.selectedPic.nativeElement.width = calculatedIncreadesSizePx;
  }

  public onZoomOut() {
    console.log(this.selectedPic);
    // Apply decrement of 2% over img original width
    const widthRatioDecrease = 0.2;
    const calculatedDrecreaseSizePx =
      this.selectedPic.nativeElement.width -
      this.selectedPic.nativeElement.width * widthRatioDecrease;
    this.selectedPic.nativeElement.width = calculatedDrecreaseSizePx;
  }

  private setPlayerInterval() {
    if (!this.selected) {
      this.onSelectedImage(this.albums[0].id);
    }
    this.intervalPlayerId = window.setInterval(() => {
      let nextItemIndex =
        this.albums.findIndex((album) => album.id == this.selected.id) + 1;
      if (nextItemIndex > this.albums.length - 1) {
        nextItemIndex = 0;
      }
      const nextItem = this.albums[nextItemIndex];
      this.onSelectedImage(nextItem.id);
    }, this.playerTimer);
  }

  private clearPlayerInterval() {
    window.clearInterval(this.intervalPlayerId);
  }

  private clearSelected() {
    if (this.albums) {
      this.albums.forEach((album) => (album.selected = false));
    }
    this.selected = null;
  }
}
