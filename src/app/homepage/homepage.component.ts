import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {apiUrl} from './../utils/apiUrl';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  countryApi = apiUrl.api;
  stateApi = apiUrl.apiStateInfo;
  stateInfo;
  districtInfo;
  districtNames;
  districtDetails;
  indexValue;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getValues(this.countryApi).subscribe(response => {
      this.stateInfo = response.statewise;
      console.log(this.stateInfo);
    }, (error: Response) => {
      throw error;
    })
  }

  getDistricts(stateName, index) {
    this.indexValue = index;
    if(index != 0 ) {
      this.data.getValues(this.stateApi).subscribe(response => {
        this.districtInfo = response[stateName].districtData;
        this.districtNames = Object.keys(this.districtInfo);
        this.districtDetails = Object.values(this.districtInfo);
        console.log(this.districtDetails);
      }, (error: Response) => {
        throw error;
      })
    }
  }

}
