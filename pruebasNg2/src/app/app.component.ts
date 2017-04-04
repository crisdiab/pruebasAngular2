import { Component } from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // paquete para ordenar array de objetos
 //  npm i ng2bln-sort-by-attribute-pipe
  items:any = [
  {
    label: 'Spoiler',
    category: 'cars',
    priceCategory: 2
  },
  {
    label: 'Bumber',
    category: 'cars',
    priceCategory: 15
  },
  {
    label: 'Steeling wheel',
    category: 'cars',
    priceCategory: 4
  },
  {
    label: 'Sail',
    category: 'wessels',
    priceCategory: 81
  },
]

  constructor(private toasterService: ToasterService) {
    this.toasterService = toasterService;
  }
  title = 'app works!';

ordenar(){

}
   sorting: any = {
     sortByCol: 'priceCategory', // object attribute's name to sort by
     sortDir: 'desc',     // 'asc' or 'desc'
     sortType: 'Number'  // 'String', 'Number', or 'Date'
   }




  popToast() {
    var toast: any = {
      type: 'info',
      title: 'Here is a Toast Title',
      body: 'Here is a Toast Body'
    };

    this.toasterService.pop(toast);
  }
}
