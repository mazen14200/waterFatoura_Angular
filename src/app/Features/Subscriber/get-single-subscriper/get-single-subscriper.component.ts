import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriperModel } from 'src/app/models/Subscriber/SubscriperModel';
import { SubscriperModelDto_request } from 'src/app/models/Subscriber/SubscriperModelDto_request';
import { SubscriberService } from 'src/services/subscriber-.service';

@Component({
  selector: 'app-get-single-subscriper',
  templateUrl: './get-single-subscriper.component.html',
  styleUrls: ['./get-single-subscriper.component.css']
})
export class GetSingleSubscriperComponent implements OnDestroy,OnInit{

  registerForm = new FormGroup({
    id_form : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('(.*[0-9])')]),
    //id_form : new FormControl('',[Validators.required,Validators.maxLength(1)]),
    name_form : new FormControl('',[Validators.required]),
    city_form : new FormControl('',[Validators.required]),
    area_form : new FormControl('',[Validators.required]),
    //mobile_form : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    mobile_form : new FormControl('',[Validators.required,Validators.pattern('(.*[0-9])')]),
    reasons_form : new FormControl('')
  })

  
  get id_form(){
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
    
  get reasons_form(){
    return this.registerForm.get('reasons_form')
  }



  subscriper_new? : SubscriperModel;
  subscriper_request? : SubscriperModelDto_request;
  id :string|null =null;
  get_supscription? :Subscription;
  update_supscription? :Subscription;
  get_id_supscription? :Subscription;
  
  constructor(private subscriberService:SubscriberService,
    private router : Router,
    private act_router : ActivatedRoute
    ) {
  //  this.subscriper_new = {
  //   Id:'',
  //   name:'444',
  //   City:'',
  //   Area:'',
  //   Mobile:''
  //  };
  }

  

  ngOnInit(): void {
    this.get_id_supscription = this.act_router.paramMap.subscribe({
      next:(param)=>{
        this.id = param.get('id');
        if(this.id !=null){
          this.get_supscription = this.subscriberService.GetSingle_subscriper(this.id).subscribe({
            next :(response) =>{
            this.subscriper_new = response;
            console.log(this.subscriper_new);
        }
      
    });
  }
}
});
  }

  onSubmit() : void {
    if(this.registerForm.invalid){
      return;
    }
    console.warn(this.registerForm.value);

    alert("successflly updated");
    console.log(this.subscriper_new);

    if(this.subscriper_new && this.id){

    
    this.subscriper_request={
      name : this.subscriper_new.name,
      city : this.subscriper_new.city,
      mobile : this.subscriper_new.mobile,
      area : this.subscriper_new.area,
      reasons : this.subscriper_new.reasons,

    }
    this.update_supscription = this.subscriberService.update_subscriper(this.subscriper_request,this.id).subscribe({
        next : (response)=>{
          console.log(response);
        }
    });
    
  }
  }
  onChangeID() :void{
    // //this.form.get('Id').disable();
    // console.log(this.id);
    // //this.id = this.subscriper_new.Id;
    // this.subscriberService.GetSingle_subscriper(this.id).subscribe({
    //   next :(response) =>{
    //   this.subscriper_new = response;
    //   },
    // }); 
    // this.router.navigateByUrl(`WaterFatoura/add_subscriper/${this.id}`);
  
  }
  ngOnDestroy(): void {
    this.get_supscription?.unsubscribe();
    this.get_id_supscription?.unsubscribe();
    this.update_supscription?.unsubscribe();
    }

}
