import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  jurusan: string[];
  keterangan: string[];


  constructor(private router:Router){
    
  }


  LOGIN(){
    this.router.navigate(['/login']);
  }

  addData(){
    //AddComponent:
    
  }

}
