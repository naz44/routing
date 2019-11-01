import { Component} from '@angular/core';

@Component({
  selector: 'app-bangladesh',
  templateUrl: './bangladesh.component.html',
  styleUrls: ['./bangladesh.component.css']
})
export class BangladeshComponent {
  players:any[];
  constructor()
  {
    this.players=[
      {name:"Mashrafe Mortaza",age:"35 yrs 193 days",role:"bowler",batting:"right hand bat",bowling:"right arm fast medium",impath:"/assets/b1.jpeg"},
      {name:"Linton Das",age:"24 yrs 185 days",role:"Wicketkeeper batsman",batting:"right hand bat",bowling:"--",impath:"/assets/b2.jpeg"},
      {name:"Mehidy Hasan",age:"21 yrs 173 days",role:"Allrounder",batting:"right hand bat",bowling:"right arm offbreak",impath:"/assets/b3.jpeg"},
      {name:"Abu Jayed",age:"25 yrs 257 days",role:"bowler",batting:"right hand bat",bowling:"right arm fast medium",impath:"/assets/b4.jpeg"},
      {name:"Mahmudullah",age:"33 yrs 71 days",role:"Allrounder",batting:"right hand bat",bowling:"right arm offbreak",impath:"/assets/b5.jpeg"}
     ];
  }
}
