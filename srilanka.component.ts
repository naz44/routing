import { Component} from '@angular/core';

@Component({
  selector: 'app-srilanka',
  templateUrl: './srilanka.component.html',
  styleUrls: ['./srilanka.component.css']
})
export class SrilankaComponent {
  players:any[];
  constructor()
  {
    this.players=[
      {name:"Kasun Rajitha",age:"25 yrs 321 days",role:"bowler",batting:"right hand bat",bowling:"right arm medium  fast ",impath:"/assets/s1.jpeg"},
      {name:"Dhananjaya de Silva",age:"27 yrs 224 days",role:"Allrounder",batting:"right hand bat",bowling:"right arm offbreak",impath:"/assets/s2.jpeg"},
      {name:"Suranga Lakmal",age:"32 yrs 39 days",role:"bowler",batting:"right hand bat",bowling:"right arm fast medium",impath:"/assets/s3.jpeg"},
      {name:"Lasith malinga",age:"35 yrs 233 days",role:"bowler",batting:"right hand bat",bowling:"right arm fast",impath:"/assets/s4.jpeg"},
      {name:"Avishka Fernando",age:"21 yrs 13 days",role:"opening batsman",batting:"right hand bat",bowling:"right arm medium fast",impath:"/assets/s5.jpeg"}
     ];
  }

}
