import { Component, Input} from '@angular/core';
import { OpenDays } from '../common/schooltype';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent{
  @Input() openDays!:OpenDays;
  
  dataInv(data:string):string {
    return data.substring(8) + '.' + data.substring(5,7) + '.' + data.substring(0,4);
  }
}
