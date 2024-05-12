import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { School } from '../common/schooltype';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-mappa',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './mappa.component.html',
  styleUrl: './mappa.component.scss'
})
export class MappaComponent implements AfterViewInit {
  innerWidth: any;
  innerHeight: any;

  constructor(public inst:DataService){}
  
  @Input() scuole!:School[];

  @ViewChild('mappa') mappa!: ElementRef<HTMLElement>;
  
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

    // console.log(this.mappa.nativeElement.offsetWidth, this.mappa.nativeElement.offsetHeight)
    this.inst.mostraPin = true;
  }

}
