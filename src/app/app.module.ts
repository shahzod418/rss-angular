import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RssInputSectionComponent } from './components/rss-input-section/rss-input-section.component';
import { RssFeedSectionComponent } from './components/rss-feed-section/rss-feed-section.component';

@NgModule({
  declarations: [AppComponent, RssInputSectionComponent, RssFeedSectionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
