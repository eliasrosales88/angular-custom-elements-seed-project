import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ue-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Input() gallery: any;
  @Input() isGalleryStarted: boolean;
  @Output() startGallery = new EventEmitter();

  constructor() { }


  onStartGallery(){
    this.startGallery.emit();
  }

  ngOnInit() {
  }

}
