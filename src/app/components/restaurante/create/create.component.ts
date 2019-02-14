import { Component, OnInit } from '@angular/core';
import { RestaService } from '../../../services/restaurant_services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  restaurant: any;
  token: any = localStorage.getItem('token');
  message: any = "";
  status: boolean = false;
  status2: boolean = false;


  constructor(private restAPI: RestaService) {
    this.restaurant = {
      nombre: "",
      direccion: "",
      telefono: "",
      descripcion: ""
    }
  }

  ngOnInit() { }

  onSubmit() {
    if (this.restaurant.nombre == "" || this.restaurant.telefono == "") {
      this.message = "Diligencia todos los campos"
      this.status = true;
    } else {
      this.status = false;
      this.status2 = true
      this.restAPI.createrestaurant(this.restaurant, this.token).subscribe((res: any) => {
        console.log(res);
        this.message = res.message;
      });
    }
  }

}
