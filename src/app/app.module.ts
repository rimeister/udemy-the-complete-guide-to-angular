import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // Webpack will bundle it, add extension

@NgModule({
  declarations: [
    AppComponent, // Angular doesn't recoignize all components by default, so we have to register them here
  	ServerComponent, ServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Which component to be aware of when the app is launched (i.e., which ones go in the index.html)
})
export class AppModule { }
