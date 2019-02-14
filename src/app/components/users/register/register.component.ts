import { Component, OnInit } from '@angular/core';
import { RestaService } from '../../../services/client-services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any
  status: boolean = false;
  status2: boolean = false;
  message: String;
  constructor(private CLientAPI: RestaService) {
    this.user = {
      nombre: "",
      apellido: "",
      identificacion: 0,
      telefono: 0,
      email: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.user);
    if (this.user.nombre == "" || this.user.email == "") {
      this.message = "Diligencie todos los campos"
      this.status = true;
    } else {
      //console.log(this.user);
      this.CLientAPI.createclient(this.user).subscribe((res: any) => {
        //console.log(res);
        if (res.status) {
          this.message = res.message;
          this.status2 = true;
          this.status = false;
        }

      });
    }

  }

}
