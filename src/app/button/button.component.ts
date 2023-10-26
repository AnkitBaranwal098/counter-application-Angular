import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()symbol!:string;
  @Output()task = new EventEmitter<string>();


  constructor(){
    console.log("Constructor Called!!!")
  }

  ngOnInit(){
    console.log("ngOnInit called!!!")
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called!!!")
    console.log(changes)
  }

  // Called whenever Angular checks for any changes
  ngDoCheck(){
    console.log("ngDoCheck called!!!")
  }

  action(){
   
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
