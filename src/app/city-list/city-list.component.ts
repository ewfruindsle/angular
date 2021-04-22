import { Component, OnInit } from '@angular/core';
import { CityDataService } from '../services/city-data.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cities: any[] = [];

  constructor(private cityService: CityDataService){
    cityService.getCities().subscribe(
      (cities) => this.cities = cities
    );
  }

  ngOnInit(): void {
  }

}
