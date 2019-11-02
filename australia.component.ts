import { Component } from '@angular/core';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css']
})
export class AustraliaComponent {

  players:any[];
  constructor()
  {
    this.players=[
      {name:"Aaron finch",age:"32 yrs 149 days",role:"Top order batsman",batting:"right hand bat",bowling:"Slow left arm orthodox ",impath:"/assets/a1.jpeg"},
      {name:"Alex carey",age:"27 yrs 231 days",role:"Wicket keeper batsman",batting:"left hand bat",bowling:"--",impath:"/assets/a2.jpeg"},
      {name:"Pat cummins",age:"25 yrs 342 days",role:"bowler",batting:"right hand bat",bowling:"right arm fast",impath:"/assets/a3.jpeg"},
      {name:"Jason Behrendorff",age:"28 yrs 360 days",role:"bowler",batting:"right hand bat",bowling:"left arm fast medium",impath:"/assets/a4.jpeg"},
      {name:"Nathan Coulter-Nile",age:"31 yrs 186 days",role:"bowler",batting:"right hand bat",bowling:"right arm fast",impath:"/assets/a5.jpeg"}
     ];
  }


}
