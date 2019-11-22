import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

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
  @Output() zoom = new EventEmitter();
  isZoom: boolean = false;
  
  constructor(private cd: ChangeDetectorRef) { }

  onStartGallery(){
    this.startGallery.emit();
  }

  onZoom() {
    console.log("ZOOM");
    
    let zoom = this.isZoom;
    
    console.log(zoom);
    console.log(!zoom);
    this.isZoom = !zoom;
    this.zoom.emit();
    this.cd.detectChanges();
  }

  closeZoom() {
    this.isZoom = false;
    this.cd.detectChanges();
    this.zoom.emit();
  }
  ngOnInit() {}

}
