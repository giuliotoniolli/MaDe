import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DataService } from '../common/data.service';
import { MappaComponent } from '../mappa/mappa.component';
import { DettagliComponent } from '../dettagli/dettagli.component';
import { Attributes, Schools } from '../common/schooltype';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MappaComponent, DettagliComponent, TimelineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  scuole!:Schools;
  scuola!:Attributes;
  
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getSchools().subscribe(data => {
      this.scuole = data;
      this.scuola = this.scuole['data'][0]['attributes'];
      console.log(this.scuole);
    })
  }
}
