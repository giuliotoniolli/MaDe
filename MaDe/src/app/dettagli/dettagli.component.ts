import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { School } from '../common/schooltype';

@Component({
  selector: 'app-dettagli',
  standalone: true,
  imports: [],
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.scss'
})
export class DettagliComponent implements OnInit{
  @Input() scuola!:School;

  baseurl!:String;

  constructor(private dataServ:DataService) {}
  ngOnInit(): void {
    this.baseurl = this.dataServ.baseUrl;
  }

  
}
