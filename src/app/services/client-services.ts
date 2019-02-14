import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestaService{

    url = 'http://localhost:3002';

    constructor(private http: HttpClient){ }

    createclient(cre:any){
        const httpoptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
         return this.http.post(this.url + '/create-client', cre, httpoptions); 

    }

    findbycliient(id: any, token: any){
        const httpoptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ token
            })
        };
        return this.http.get(this.url + '/findby-client/?id=' + id, httpoptions)
    }

    findclient(){
        const httpoptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.url + '/find-client', httpoptions)
    }

    updateclient(user: any){
        const httpoptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.url + '/update-client/?id=' + user._id, user, httpoptions)
    }

    deleteclient(id:any,token:any){
        const httpoptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ token
            })
        };
        return this.http.post(this.url + '/delete-client/?id=' + id, httpoptions)
    }
}