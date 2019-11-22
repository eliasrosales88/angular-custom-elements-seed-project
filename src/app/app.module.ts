import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import { GalleryComponent } from './gallery/gallery.component';
import { SlideComponent } from './gallery/slide/slide.component';
import { LandingComponent } from './gallery/landing/landing.component';

@NgModule({
  declarations: [
    ButtonComponent,
    GalleryComponent,
    SlideComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent, GalleryComponent]
})
export class AppModule { 
  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const elements: any[] = [
      [ButtonComponent, "ue-button"],
      [GalleryComponent, "ue-gallery"],
    ];


    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }

  }
}
