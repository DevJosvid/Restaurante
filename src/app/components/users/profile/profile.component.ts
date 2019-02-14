import { Component, OnInit } from '@angular/core';
import { RestaService } from '../../../services/client-services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any;
  user: any;
  constructor(private clientAPI: RestaService) { }

  ngOnInit() {
    this.clientAPI.findclient().subscribe((res: any) =>{
      console.log(res);
      this.users = res.data;
    })
  }

  onSet(user){
    this.user = user;
  }

}
