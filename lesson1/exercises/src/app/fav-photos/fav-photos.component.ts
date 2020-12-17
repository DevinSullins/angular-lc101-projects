import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Internet Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://miro.medium.com/max/5000/1*jFyawcsqoYctkTuZg6wQ1A.jpeg';
  image3 = 'https://www.hackingwithswift.com/uploads/matrix.jpg';

  constructor() { }

  ngOnInit() {
  }

}