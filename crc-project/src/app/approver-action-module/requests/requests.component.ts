import { Component, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';
import { RequestModel } from './request.model';
import { RequestMethod } from '@angular/http/src/enums';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  usersRequestes: Array<RequestModel> = [];
  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestsService.getRequests().subscribe((requestes) => {
      this.usersRequestes = requestes
    })
  }

  accept(request: RequestModel) {
    this.requestsService.approve(request).subscribe((requestes) => {
      this.getRequests();
    })
  }

  reject(request: RequestModel) {
    this.requestsService.reject(request).subscribe((requestes) => {
      this.getRequests();
    })
  }

}
