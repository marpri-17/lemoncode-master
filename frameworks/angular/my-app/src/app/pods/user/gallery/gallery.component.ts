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

  public thumbnailPagination = {
    start: 0,
    end: 3,
    total: 0,
  };

  public selected: IMusicGalleryItemViewModel;

  public isPlaying = false;

  public initialFeaturedRotation: number = 0;
  public rotationSteps: number = 10;

  private spinnerTimeOut = 1000; // 3000;

  private thumbnailItemsPerPage = 3;

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
          this.selected = albums[0];
          albums[0].selected = true;
          this.thumbnailPagination.total = albums.length;
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
    const selectedIndex = this.albums.findIndex(
      (album) => album.id === +albumId
    );
    if (selectedIndex !== -1) {
      const selectedAlbum = this.albums[selectedIndex];
      this.selected = selectedAlbum;
      selectedAlbum.selected = true;
    }
  }

  private handlePaginationOnChangeSelected(index: number) {
    if (index === 0) {
      this.thumbnailPagination.start = 0;
      this.thumbnailPagination.end = this.thumbnailItemsPerPage;
    } else if (index > this.thumbnailPagination.end - 1) {
      this.thumbnailPageDown();
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
  // TODO - slicer pagination can be component
  public thumbnailPageUp() {
    let newEnd = this.thumbnailPagination.end - this.thumbnailItemsPerPage;
    if (newEnd < 3) {
      newEnd = 3;
    }
    let newStart = this.thumbnailPagination.start - this.thumbnailItemsPerPage;
    if (newStart < 0) {
      newStart = 0;
    }
    this.thumbnailPagination.start = newStart;
    this.thumbnailPagination.end = newEnd;
  }

  public thumbnailPageDown() {
    let newStart = this.thumbnailPagination.start + this.thumbnailItemsPerPage;
    if (newStart > this.thumbnailPagination.total - 3) {
      newStart = this.thumbnailPagination.total - 3;
    }
    let newEnd = this.thumbnailPagination.end + this.thumbnailItemsPerPage;
    if (newEnd > this.thumbnailPagination.total) {
      newEnd = this.thumbnailPagination.total;
    }
    this.thumbnailPagination.start = newStart;
    this.thumbnailPagination.end = newEnd;
  }

  private setPlayerInterval() {
    this.intervalPlayerId = window.setInterval(() => {
      let nextItemIndex =
        this.albums.findIndex((album) => album.id == this.selected.id) + 1;
      if (nextItemIndex > this.albums.length - 1) {
        nextItemIndex = 0;
      }
      const nextItem = this.albums[nextItemIndex];
      this.handlePaginationOnChangeSelected(nextItemIndex);
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
