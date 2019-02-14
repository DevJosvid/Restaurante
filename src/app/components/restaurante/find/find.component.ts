import { Component, OnInit } from '@angular/core';
import { RestaService } from '../../../services/restaurant_services'; 
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  restaurants: any;
  restaurant: any;

  constructor(private restAPI: RestaService) { 
    this.restaurant = {
      nombre: "",
      direccion: "",
      telefono: "",
      descripcion: ""
    }
  }

  ngOnInit() {
    this.restAPI.restaurantlist().subscribe((res: any) =>{
      this.restaurants = res.data
    });
  }

  onSet(restaurant){
    this.restaurant = restaurant;
  }

  onUpdate(){
    this.restAPI.updaterestaurant(this.restaurant).subscribe((res) =>{
      console.log(res);
      
    });
  }

  onDelete(id){
    this.restAPI.deleterestaurant(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

}
