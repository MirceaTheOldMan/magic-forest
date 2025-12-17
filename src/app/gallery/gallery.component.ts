import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumService } from '../shared/services/album.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, NgbCarouselModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [NgbCarouselConfig],
})
export class GalleryComponent implements OnInit{
  albumService = inject(AlbumService);
  pictures!: { id: number; url: string; }[];

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 30000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
	}

  ngOnInit(): void {
    this.pictures = this.albumService.getImages();
  }
}
