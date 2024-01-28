import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment';
import { SubscriperModel } from 'src/app/models/Subscriber/SubscriperModel';
import { SubscriperModelDto_request } from 'src/app/models/Subscriber/SubscriperModelDto_request';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {


  constructor(private http:HttpClient) {

  }

   GetSingle_subscriper(id:string) : Observable<SubscriperModel>{
    return this.http.get<SubscriperModel>(`${Environment.path_API}/api/Subscriber/${id}`);

   }
   
   Add_new_subscriper(subscriper: SubscriperModel) : Observable<SubscriperModel>{
    return this.http.post<SubscriperModel>(`${Environment.path_API}/api/Subscriber`,subscriper);

 }

 update_subscriper(subscriper_request: SubscriperModelDto_request,id:string) : Observable<SubscriperModel>{
  return this.http.put<SubscriperModel>(`${Environment.path_API}/api/Subscriber/${id}`,subscriper_request);
 }
}
