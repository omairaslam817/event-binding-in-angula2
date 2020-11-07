import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  msg:string="";
device: string;
  onAddCart(){
this.msg="products added in cart";
  }
  onInputClick(event:any){
console.log(event.target.value)
  }
  getshop(event:any){
this.device= event.target.value +' added in cart';
  }
}
