import { Component, OnInit } from '@angular/core';
import { AddPermissionService } from './permission-request.service';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
export class AddPermissionComponent implements OnInit {

  servers:Array<string> = [];

  constructor(private addPermissionService:AddPermissionService) { }

  ngOnInit() {
    this.addPermissionService.getServers().subscribe(()=>{
      
    })
  }

}
