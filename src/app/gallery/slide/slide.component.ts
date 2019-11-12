import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ue-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() item: any ={};
  @Input() index: number;
  @Input() activeItem: number;
  @Output() startGallery = new EventEmitter();
  
  constructor() { }

  onStartGallery(){
    this.startGallery.emit();
  }
  ngOnInit() {}

}
