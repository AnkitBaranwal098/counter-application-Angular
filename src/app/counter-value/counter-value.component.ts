import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent {

  @Input("cValue") counterValue!:number;

}
