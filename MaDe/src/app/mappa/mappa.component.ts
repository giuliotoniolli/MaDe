import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mappa',
  standalone: true,
  imports: [],
  templateUrl: './mappa.component.html',
  styleUrl: './mappa.component.scss'
})
export class MappaComponent implements AfterViewInit {
  innerWidth: any;
  innerHeight: any;

  @ViewChild('mappa') mappa!: ElementRef<HTMLElement>;
  
  @HostListener('window:resize', ['$event'])
  
  onResize(event: any) {

    console.log(this.mappa.nativeElement.offsetWidth, this.mappa.nativeElement.offsetHeight)
  }

  ngAfterViewInit(): void {

    console.log(this.mappa.nativeElement.offsetWidth, this.mappa.nativeElement.offsetHeight)  
  }

 
}
