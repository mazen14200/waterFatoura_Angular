import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RETypesModel } from 'src/app/models/RETypes/RETypesModel';
import { SubscriperModel } from 'src/app/models/Subscriber/SubscriperModel';
import { SubscriptionModel } from 'src/app/models/Subscription/SubscriptionModel';
import { IDLI } from 'src/app/models/Subscription/li';
import { SubscriptionDTORequest } from 'src/app/models/Subscription/subscriptionDTO_request';
import { RETypesService } from 'src/services/retypes-.service';
import { SubscriberService } from 'src/services/subscriber-.service';
import { SubscriptionService } from 'src/services/subscription-.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent implements OnInit,OnDestroy {

  
  registerForm = new FormGroup({
    fk_Subscriber_No : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('(.*[0-9])')]),
    //id_form : new FormControl('',[Validators.required,Validators.maxLength(1)]),
    name_form : new FormControl('',[Validators.required]),
    city_form : new FormControl('',[Validators.required]),
    area_form : new FormControl('',[Validators.required]),
    //mobile_form : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    mobile_form : new FormControl('',[Validators.required,Validators.pattern('(.*[0-9])')]),
    reasons_form : new FormControl(''),
    
    //fk_Real_Estate_Types_id : new FormControl('',[Validators.required,Validators.pattern('([0-9])')]),

    no_Subscription : new FormControl('',[Validators.required]),
    unit_No : new FormControl('',[Validators.required]),
    is_There_Sanitation : new FormControl('',[Validators.required]),
    last_Reading_Meter : new FormControl('',[Validators.required]),
  })

  
  get fk_Subscriber_No(){
    return this.registerForm.get('id_form')
  }


  get name_form(){
    return this.registerForm.get('name_form')
  }
  
  get city_form(){
    return this.registerForm.get('city_form')
  }
  
  get area_form(){
    return this.registerForm.get('area_form')
  }
  
  get mobile_form(){
    return this.registerForm.get('mobile_form')
  }

  get no_Subscription(){
    return this.registerForm.get('no_Subscription')
  }
  //   get fk_Real_Estate_Types_id(){
  //   return this.registerForm.get('fk_Real_Estate_Types_id')
  // }
  get unit_No(){
    return this.registerForm.get('unit_No')
  }
  get is_There_Sanitation(){
    return this.registerForm.get('is_There_Sanitation')
  }
  get last_Reading_Meter(){
    return this.registerForm.get('last_Reading_Meter')
  }
  get reasons_form(){
    return this.registerForm.get('reasons_form')
  }

  NO_sh_id? :string;
  NO_er_id? :string;
  RETypes$? : Observable<RETypesModel []>
  RETypes_list? : string
  REType2? : RETypesModel
  REType1? : string ;
  subscription_new : SubscriptionModel;
  subscription_DTORequest? : SubscriptionDTORequest;
  subscriper_new : SubscriperModel;
  constructor(
    private subscriptionService : SubscriptionService,
    private subscriberService : SubscriberService,
    private RetypeService : RETypesService,
    private router :Router,
    private act_router : ActivatedRoute, 
  )
  {
    //this.REType1 ='3';
    this.subscription_new = {
      nO_Subscription : '',
      fK_Subscriber_No : '',
      fK_Real_Estate_Types_id : '1',
      unit_No : 0,
      is_There_Sanitation : true,
      last_Reading_Meter : 0,
      reasons : ''

    };
    this.subscriper_new = {
      id : '',
      name : '',
      area : '',
      city : '',
      mobile : '',
      reasons : ''

    };
  }
  ngOnInit(): void {
    this.subscriptionService.get_ID_subscriptions().subscribe({
      next : (response) =>{
        console.log(response);
        this.NO_sh_id = response;
        console.log( this.NO_sh_id);
      }
    });
    this.RETypes$ = this.RetypeService.get_all_RETypes();
    
  }


  Onsubmit(){
    
    console.log(this.RETypes_list);
    console.log(this.subscription_new);
    this.subscription_DTORequest = {
      fK_Subscriber_No : this.subscription_new.fK_Subscriber_No,
      fK_Real_Estate_Types_id :  this.subscription_new.fK_Real_Estate_Types_id,
      unit_No : this.subscription_new.unit_No,
      is_There_Sanitation: this.subscription_new.is_There_Sanitation,
      last_Reading_Meter : this.subscription_new.last_Reading_Meter,
      reasons : this.subscription_new.reasons,
    };
    console.log(this.subscription_DTORequest);
    this.subscriptionService.add_single_subscription(this.subscription_DTORequest).subscribe({
      next :(response)=>{
        console.log(response);
      }
    });
  }


  onIDChange(){
    this.subscriberService.GetSingle_subscriper(this.subscription_new.fK_Subscriber_No).subscribe({
      next :(response)=>{
        this.subscriper_new = response;
        if(this.subscriper_new.name != undefined && this.subscriper_new.name != ""){

        }
      }
    });
  }
  chanedSelect(){
    console.log(this.subscription_new.fK_Real_Estate_Types_id);
    console.log(this.RETypes_list);


  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
