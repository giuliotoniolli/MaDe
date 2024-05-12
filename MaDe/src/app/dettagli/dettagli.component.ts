import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { Attributes, Description } from '../common/schooltype';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { MappaComponent } from '../mappa/mappa.component';

@Component({
  selector: 'app-dettagli',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.scss'
})
export class DettagliComponent implements OnInit{
  scuola!:Attributes;
  descrizione:string = '';
  baseurl!:string;
  UrlImg!:string;

  constructor(private dataServ:DataService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.baseurl = this.dataServ.baseUrl;
    this.route.params.subscribe(params => {
      this.dataServ.getSchoolById(parseInt(params['id'])).subscribe(data => {
        this.scuola = data.data.attributes;
        this.UrlImg = 'url(' + this.baseurl + this.scuola.Sfondo.data.attributes.url + ')';
        // console.log(this.UrlImg);
        // console.log(data);
      })
    })
    this.scuola.Description.forEach(el => this.descrizione += el.children[0].text + ' ')
  }

  dettagli(descrizione:Description[]) {
    this.descrizione = '';
    descrizione.forEach(el => this.descrizione += el.children[0].text+ ' ')
  }
 
}