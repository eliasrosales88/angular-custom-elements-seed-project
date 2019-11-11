import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ue-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() item: any ={};
  constructor() { }

  ngOnInit() {
    console.log("Slide", this.item);
    
  }

}
