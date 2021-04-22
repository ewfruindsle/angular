import { CityDataService } from './../services/city-data.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.scss']
})
export class NewCityComponent implements OnInit {
  @Output() city = new EventEmitter();
  showForm = false;

  constructor(private cityService: CityDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm){
    const FIELDS = myForm.form.controls;
    this.showForm = false;
    this.cityService.addCity({
      cityName: FIELDS.cityName.value,
      country: FIELDS.country.value,
      population: FIELDS.population.value
    });
  }
}
