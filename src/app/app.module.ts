import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    ButtonComponent,
    GalleryComponent
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
