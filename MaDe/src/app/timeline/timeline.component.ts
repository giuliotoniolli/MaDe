import { Component, Input, OnInit} from '@angular/core';
import { OpenDays } from '../common/schooltype';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  @Input() openDays!:OpenDays;
  @Input() color!:string;
  ce:Boolean = true;
  
  dataInv(data:string):string {
    return data.substring(8) + '.' + data.substring(5,7) + '.' + data.substring(0,4);
  }
  
  ngOnInit(): void {
    if(this.openDays.data.length < 1){
      this.ce = false;
    }
  }
  
}
