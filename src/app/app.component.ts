import { Component } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angu-mate';
  public name= "abc";
  public password = "xyz";
  //constructor(private data:AngularFireDatabase){}
  
}
