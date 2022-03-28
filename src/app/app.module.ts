import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EdadPipe } from './shared/pipes/edad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ToolbarComponent,
    FooterComponent,

    /* Pipes */
    EdadPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
