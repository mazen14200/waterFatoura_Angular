import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment';
import { SubscriptionModel } from 'src/app/models/Subscription/SubscriptionModel';
import { IDLI } from 'src/app/models/Subscription/li';
import { SubscriptionDTORequest } from 'src/app/models/Subscription/subscriptionDTO_request';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscription_new? : SubscriptionModel;
  constructor(
    private http : HttpClient,
    private router : Router,
    private act_rout : ActivatedRoute ) 
    { 

    }

    get_single_subscription(id : string) : Observable<SubscriptionModel>{
      return this.http.get<SubscriptionModel>(`${Environment.path_API}/api/Subscription/${id}`);
    }

    update_single_subscription(id : string,subscriptionDTOReq : SubscriptionDTORequest) : Observable<SubscriptionModel>{
      return this.http.put<SubscriptionModel>(`${Environment.path_API}/api/Subscription/${id}`,subscriptionDTOReq);
    }
    getAll_subscriptions() : Observable<SubscriptionModel []>{
      return this.http.get<SubscriptionModel []>(`${Environment.path_API}/api/Subscription`);
    }

    get_ID_subscriptions() : Observable<string>{
      return this.http.get<string>(`${Environment.path_API}/api/Subscription/GenerateID`);
    }

    add_single_subscription(subscriptionDTOReq : SubscriptionDTORequest) : Observable<SubscriptionModel>{
      return this.http.post<SubscriptionModel>(`${Environment.path_API}/api/Subscription`,subscriptionDTOReq);
    }
  }
