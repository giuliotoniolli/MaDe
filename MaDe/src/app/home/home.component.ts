import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DataService } from '../common/data.service';
import { MappaComponent } from '../mappa/mappa.component';
import { DettagliComponent } from '../dettagli/dettagli.component';
import { School } from '../common/schooltype';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MappaComponent, DettagliComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  scuole!:any;
  scuola!:School;
  
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getInstitutes().subscribe(data => {
      console.log(data);
    })
    this.dataService.getSchools().subscribe(data => {
      this.scuole = data;
    })
    this.scuola = this.scuole['data'][0]['attributes']['schools']['data'][0]['attributes'];
    console.log(this.scuola);
  }

}
