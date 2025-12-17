import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  allImages!: { id: number; url: string; }[];

  getImages() {
    return (this.allImages = ImageList.slice(0));
  }

  getImage(id: number) {
    return ImageList.slice(0).find(Images => Images.id == id);
  }
}

const ImageList = [
  { id: 1, url: 'assets/album/img1.jpg', width: 355, height: 236 },
  { id: 2, url: 'assets/album/img2.jpg', width: 355, height: 236 },
  { id: 3, url: 'assets/album/img3.jpg', width: 355, height: 236 },
  { id: 4, url: 'assets/album/img4.jpg', width: 355, height: 236 },
  { id: 5, url: 'assets/album/img5.jpg', width: 355, height: 236 },
  { id: 6, url: 'assets/album/img6.jpg', width: 355, height: 236 },
  { id: 7, url: 'assets/album/img7.jpg', width: 355, height: 236 },
  { id: 8, url: 'assets/album/img8.jpg', width: 355, height: 236 },
  { id: 9, url: 'assets/album/img9.jpg', width: 355, height: 532 },
  { id: 10, url: 'assets/album/img10.jpg', width: 355, height: 236 },
  { id: 11, url: 'assets/album/img11.jpg', width: 355, height: 266 },
  { id: 12, url: 'assets/album/img12.jpg', width: 355, height: 236 },
  { id: 13, url: 'assets/album/img13.jpg', width: 355, height: 236 },
  { id: 14, url: 'assets/album/img14.jpg', width: 355, height: 236 },
  { id: 15, url: 'assets/album/img15.jpg', width: 355, height: 236 },
  { id: 16, url: 'assets/album/img16.jpg', width: 355, height: 236 },
  { id: 17, url: 'assets/album/img17.jpg', width: 355, height: 236 },
  { id: 18, url: 'assets/album/img18.jpg', width: 355, height: 266 },
  { id: 19, url: 'assets/album/img19.jpg', width: 355, height: 266 },
  { id: 20, url: 'assets/album/img20.jpg', width: 355, height: 236 }
];
