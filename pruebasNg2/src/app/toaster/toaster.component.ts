import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
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
