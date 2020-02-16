import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, BootstrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
