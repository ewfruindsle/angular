import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { MyComponent } from './my/my.component';
import { NewCityComponent } from './new-city/new-city.component';
import { CityListComponent } from './city-list/city-list.component';
import { SightsListComponent } from './sights-list/sights-list.component';

const routes: Routes = [
  {path:'cities', component: CityListComponent},
  {path:'sights/:city', component: SightsListComponent},
  {path: '', redirectTo:'cities', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent, MyComponent, CityComponent, NewCityComponent, 
    CityListComponent, SightsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
