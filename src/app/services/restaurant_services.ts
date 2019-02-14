import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class RestaService{
    url = 'http://localhost:3002';

    constructor(private http: HttpClient){ }

        createrestaurant(cre : any, token: any){
            const httpoptions ={
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer'+ token
                })
            };
            return this.http.post(this.url + '/create-restaurant', cre, httpoptions); 
        }
        restaurantbyid(id: any,token: any){
            const httpoptions={
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer'+ token
                })
            };
            return this.http.get(this.url + '/findby-restaurant/?id='+ id, httpoptions); 
        }
        restaurantlist(){
            const httpoptions={
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            return this.http.get(this.url + '/find-rest', httpoptions); 
        }
        
        updaterestaurant(rest: any){
            const httpoptions={
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            return this.http.post(this.url + '/update-rest/?id=' + rest._id, rest, httpoptions)
        }

        deleterestaurant(id:any){
            const httpoptions={
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            return this.http.post(this.url + '/delte-rest/?id=' + id, httpoptions)
        }

    }
        

