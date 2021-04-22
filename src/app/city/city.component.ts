import { CityDataService } from './../services/city-data.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() city;
  @Input() cityIndex;
  showInfo = false;

  constructor(private cityService: CityDataService) { }

  ngOnInit(): void {
    
  }

  deleteCity(){
    this.cityService.deleteCity(this.cityIndex);
  }
}
