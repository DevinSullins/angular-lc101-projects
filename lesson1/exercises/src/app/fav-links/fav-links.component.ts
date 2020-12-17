import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle: string = "Links I use a lot"
  favLinks: string[] = [
    "google.com",
    "instagram.com",
    "NASA.gov"
  ]

  constructor() { }

  ngOnInit() {
  }

}
