import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {


  // npm install moment --save
  constructor() { }
   fecha:Date=new Date()

  ngOnInit() {
  }

  verFecha(){
    // console.log(this.fecha)
    moment.locale('es')
    let now = moment().format('L');
    let hora = moment().format('LT');
    console.log(now)
    console.log(hora)

  }
}
