import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  TabPplays:any=[
    {id:1,name:"messi",position:"ATK",nbr:"7",img:"assets/images/img_3.jpg"},
    {id:2,name:"CR7",position:"GK",nbr:"10",img:"assets/images/img_2.jpg"},
    {id:3,name:"Xavi",position:"MID",nbr:"6",img:"assets/images/img_1.jpg"},
    {id:4,name:"Modrish",position:"MID",nbr:"10",img:"assets/images/person_3.jpg"},
  ]
}
