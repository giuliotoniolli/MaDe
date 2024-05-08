import { NgStyle } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Attributes } from '../common/schooltype';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges, OnInit{
  constructor(private serv:DataService){}
  UrlLogo!:string;
  @Input() scuola!:Attributes;
  @Input() top!:number;
  @Input() left!:number;
  @Input() id!:number;
  ngOnInit(): void {
    this.UrlLogo = 'url(' + this.serv.baseUrl + this.scuola.Logo.data.attributes.url + ')';
    console.log(this.top, this.left);
  }
  ngOnChanges(changes:SimpleChanges): void {
    
  }
}
