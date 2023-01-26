import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/config/Interfaces/apod.interface';
import { ApodServicesService } from 'src/app/config/services/apod-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public apod: Apod[]=[];

  constructor(private apod_service:ApodServicesService) { }

  ngOnInit() {
    this.getApod();
  }

  public getApod():void{
    this.apod_service.getApod().subscribe(res=>{
      console.log(res);
    });
  }

}
