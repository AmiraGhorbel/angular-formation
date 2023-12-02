import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  match:any = {};
  // Form ID
  addMatchForm!:FormGroup;
  addMatch(){
    console.log("Here is my data: ",this.match);
    // alert(this.match.scoreOne+""+this.match.scoreTwo);
  }
}
