import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriperModel } from 'src/app/models/Subscriber/SubscriperModel';
import { SubscriberService } from 'src/services/subscriber-.service';
import { Observable, Subscription, take } from 'rxjs';
import { FormsModule,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-subscriber',
  templateUrl: './add-new-subscriber.component.html',
  styleUrls: ['./add-new-subscriber.component.css']
})
export class AddNewSubscriberComponent implements OnInit,OnDestroy {

  //RegisterForm!:FormGroup
  title = 'formValidation';
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


  get_supscription? :Subscription;
  add_supscription? :Subscription;


  submited = false;


  
  subscriper_new : SubscriperModel;
  id :string;
  constructor(private formBuilder : FormBuilder,
    private subscriberService:SubscriberService,
    private FormsModule : FormsModule,
    private router : Router
    ) {
   this.subscriper_new = {
    id:"",
    name: "",
    city:"",
    area:"",
    mobile:"",
   };
   this.id =""
  }
  
  
  ngOnInit(): void {
    // this.RegisterForm = this.formBuilder.group({
    //   formName:['',Validators.required]
    // });
    console.log(this.subscriper_new);
  }

  onSubmit() : void {
    //this.submited = true;
    if(this.registerForm.invalid){
      return;
    }
    this.add();
    console.warn(this.registerForm.value);

    alert("successflly added");
    

  }

  onChangeID() :void{
    //this.form.get('Id').disable();
    console.log(this.id);
    this.get();
    //this.id = this.subscriper_new.Id;


  }
  add() : void{
    this.subscriper_new.id = this.id;
    this.add_supscription =this.subscriberService.Add_new_subscriper(this.subscriper_new).subscribe({
      next : (response)=>{
        console.log(this.subscriper_new);
      }
    })
  }

  get() :void{
    if(this.id !=""){
      this.get_supscription = this.subscriberService.GetSingle_subscriper(this.id)
      .subscribe({
        next :(response) =>{
        this.subscriper_new = response;
        console.log(this.subscriper_new);
        console.log(typeof(this.subscriper_new.name));      
        if(this.subscriper_new.name != undefined && this.subscriper_new.name != '' ){
          this.router.navigateByUrl(`WaterFatoura/subscriper/${this.id}`);
        }
        }
      }); 


    }
  }


  ngOnDestroy(): void {
    this.get_supscription?.unsubscribe();
    this.add_supscription?.unsubscribe();
    }
}
