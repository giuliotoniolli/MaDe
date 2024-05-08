import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { Attributes } from '../common/schooltype';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dettagli',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.scss'
})
export class DettagliComponent implements OnInit{
  scuola!:Attributes;


  baseurl!:String;

  constructor(private dataServ:DataService, private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.baseurl = this.dataServ.baseUrl;
    this.route.params.subscribe(params => {
      this.dataServ.getSchoolById(parseInt(params['id'])).subscribe(data => {
        this.scuola = data.data.attributes;
        console.log(data);
      })
    })
  }
 
}