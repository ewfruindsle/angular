import { CityListComponent } from './../city-list/city-list.component';
import { Component, OnInit } from '@angular/core';
import { CityDataService } from '../services/city-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {
  sights: any[] = [];

  constructor(private cityService: CityDataService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => this.getSights(params.city)
    )
  }

  getSights(cityName: string){
    
    this.cityService.getSights(cityName).subscribe(
      (sights) => {
        this.sights = sights;
      }
    );
  }

}
