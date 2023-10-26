import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  counterValue:number = 0;
  increementBtn:string = "+1";
  decreementBtn:string = "-1";

  taskRecieved!:string;

  changeCounterValue(symbol:string){
    if(symbol=="+"){
      this.counterValue++;
    }
    else{
      if(this.counterValue!=0)
        this.counterValue--;
    }
  }

  recieveTask(task:string){
    this.taskRecieved = task;

    if(this.taskRecieved=="+"){
      this.changeCounterValue("+");
      // console.log("Increement Task Recieved at App component from btn")
    }
    if(this.taskRecieved=="-"){
      this.changeCounterValue("-");
      // console.log("Decreement Task Recieved at App component from btn")
    }
  }
}
