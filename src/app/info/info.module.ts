import { NgModule } from "@angular/core";
import { PersonFavorite32Module } from "@carbon/icons-angular/lib/person--favorite/32";
import { Globe32Module } from "@carbon/icons-angular/lib/globe/32";
import { Application32Module } from "@carbon/icons-angular/lib/application/32";

import { GridModule } from "carbon-components-angular";
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoSectionComponent } from './info-section/info-section.component';

@NgModule({
  declarations: [InfoSectionComponent, InfoCardComponent],
  imports: [
    PersonFavorite32Module,
    Globe32Module,
    Application32Module,
  ],
  exports: [InfoSectionComponent, InfoCardComponent],
})
export class InfoModule {}