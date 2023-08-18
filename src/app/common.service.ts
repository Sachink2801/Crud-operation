import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userData: BehaviorSubject<any> = new BehaviorSubject('');
  private dataUrl ="assets/db.json" ;
  AddUpdateUser: any;

  public Data(): Observable<any> {
    return this.userData.asObservable();
  }

  constructor(private http:HttpClient) { }

  // AddUpdateUser(User:any):Observable<any>{
  //   return this.http.post<any>(this.dataUrl+"");
  // }
  
  getAllUsers():Observable<any>{
    return this.http.get<any>(this.dataUrl);
  }

}
