import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {
  private cities = [
    {
      cityName: 'Nikolaev',
      country: 'Ukraine',
      population: '486267'
    },
    {
      cityName: 'Stockholm',
      country: 'Sweden',
      population: '975551'
    },
    {
      cityName: 'Melbourne',
      country: 'Australia',
      population: '486267'
    }
  ]

  private sights = [
    {name: 'sight 1', cityName: 'Nikolaev'},
    {name: 'sight 2', cityName: 'Stockholm'},
    {name: 'sight 3', cityName: 'Stockholm'},
    {name: 'sight 4', cityName: 'Melbourne'},
    {name: 'sight 5', cityName: 'Melbourne'},
    {name: 'sight 6', cityName: 'Melbourne'}
  ]
  constructor() { }

  getCities(): Observable<any[]>{
    return of(this.cities);
  }

  addCity(city){
    this.cities.push(city);
  }

  deleteCity(index){
    this.cities.splice(index, 1);
  }

  getSights(cityName: string): Observable<any[]>{
    return of(this.sights.filter(el => {
      return el.cityName === cityName;
    }));
  }
  
}
