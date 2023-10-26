import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()symbol!:string;
  @Output()task = new EventEmitter<string>();

  action(){
    console.log(this.symbol)
    if(this.symbol=="+1")
    {
      // console.log("Increement Action trigerred!!!");
      this.task.emit("+");
    }
    else{
      // console.log("Decreement Action trigerred!!!");
      this.task.emit("-");
    }
  }
}
