import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { School } from '../common/schooltype';
import { DataService } from '../common/data.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mappa',
  standalone: true,
  imports: [CardComponent, NgStyle],
  templateUrl: './mappa.component.html',
  styleUrl: './mappa.component.scss'
})
export class MappaComponent implements AfterViewInit {
  innerWidth: any;
  innerHeight: any;
  mostraPin:Boolean = false;
  ortop:string = '20vw';
  orleft:string = '60%';
  orwidth:string = '30%';
  position:string = 'absolute';
  flex:string = 'row';


  constructor(public inst:DataService, private rend:Renderer2){}
  
  @Input() scuole!:School[];

  @ViewChild('mappa') mappa!: ElementRef<HTMLElement>;
  @ViewChild('pngImage') pngElement!: ElementRef;
  
  @HostListener('window:resize', ['$event'])

  onResize(event: any) {

    console.log(this.mappa.nativeElement.clientHeight, this.mappa.nativeElement.clientWidth)
    console.log(this.mappa.nativeElement.offsetWidth, this.mappa.nativeElement.offsetHeight)
  }

      
  top(top:number):number {
    return (this.mappa.nativeElement.clientHeight/2955*top)-(this.mappa.nativeElement.clientWidth*0.05);
  }

  left(left:number):number {
    return (this.mappa.nativeElement.clientWidth/1919*left)-((this.mappa.nativeElement.clientWidth*0.05)/2);
  }

  ngAfterViewInit(): void {
    this.mostraPin = true;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.scrollY;
    if (windowScroll >= 200) {
      this.ortop = '1vw';
      this.orleft = '1vw';
      this.position = 'fixed';
      this.orwidth = '20%';
      this.flex = 'column';
    } else {
      this.ortop = '20vw';
      this.orleft = '60%';
      this.position = 'absolute';
      this.orwidth = '30%';
      this.flex = 'row';
    }
  };
}
