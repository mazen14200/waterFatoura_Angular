import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DSValuesModel } from 'src/app/models/DSValues/DSValuesModel';
import { InvoiceModel } from 'src/app/models/Invoices/InoviceModel';
import { Invoice_DTORequest } from 'src/app/models/Invoices/Invoice_DTORequest';
import { RETypesModel } from 'src/app/models/RETypes/RETypesModel';
import { SubscriperModel } from 'src/app/models/Subscriber/SubscriperModel';
import { SubscriptionModel } from 'src/app/models/Subscription/SubscriptionModel';
import { SubscriptionDTORequest } from 'src/app/models/Subscription/subscriptionDTO_request';
import { DSValuesService } from 'src/services/dsvalues-.service';
import { InvoicesService } from 'src/services/invoices-.service';
import { RETypesService } from 'src/services/retypes-.service';
import { SubscriberService } from 'src/services/subscriber-.service';
import { SubscriptionService } from 'src/services/subscription-.service';

@Component({
  selector: 'app-add-new-invoice',
  templateUrl: './add-new-invoice.component.html',
  styleUrls: ['./add-new-invoice.component.css']
})
export class AddNewInvoiceComponent implements OnInit,OnDestroy{
  
  registerForm = new FormGroup({
    //fk_Subscriber_No : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('(.*[0-9])')]),
    //id_form : new FormControl('',[Validators.required,Validators.maxLength(1)]),
    //mobile_form : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    //fk_Real_Estate_Types_id : new FormControl('',[Validators.required,Validators.pattern('([0-9])')]),

    NO_invoice_id : new FormControl('',[Validators.required]),
    from : new FormControl('',[Validators.required]),
    no_Subscription : new FormControl('',[Validators.required]),
    //mobile_form : new FormControl('',[Validators.required,Validators.pattern('(.*[0-9])')]),
    NO_er_id_2 : new FormControl('',[Validators.required]),
    previous_Consumption_Amount : new FormControl('',[Validators.required]),    
    amount_Consumption_Amount : new FormControl('',[Validators.required]),    
    unit_No : new FormControl('',[Validators.required]),    
    is_There_Sanitation : new FormControl('',[Validators.required]),    
    service_Free : new FormControl('',[Validators.required]),    
    consumption_Value : new FormControl('',[Validators.required]),    
    total_Invoice : new FormControl('',[Validators.required]),    
    date : new FormControl('',[Validators.required]),    
    to : new FormControl('',[Validators.required]),    
    name : new FormControl('',[Validators.required]),    
    current_Consumption_Amount : new FormControl('',[Validators.required]),    
    tax_Rate : new FormControl('',[Validators.required]),    
    wastewater_Consumption_Value : new FormControl('',[Validators.required]),    
    total_Bill : new FormControl('',[Validators.required]),    

  });

  
  get NO_invoice_id(){
    return this.registerForm.get('NO_invoice_id')
  }


  get from(){
    return this.registerForm.get('from')
  }
  
  get no_Subscription(){
    return this.registerForm.get('no_Subscription')
  }
  
  get NO_er_id_2(){
    return this.registerForm.get('NO_er_id_2')
  }
  
  get previous_Consumption_Amount(){
    return this.registerForm.get('previous_Consumption_Amount')
  }

  get amount_Consumption_Amount(){
    return this.registerForm.get('amount_Consumption_Amount')
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
  get service_Free(){
    return this.registerForm.get('service_Free')
  }

  get consumption_Value(){
    return this.registerForm.get('consumption_Value')
  }
  get total_Invoice(){
    return this.registerForm.get('total_Invoice')
  }
  get date(){
    return this.registerForm.get('date')
  }
  get to(){
    return this.registerForm.get('to')
  }
  get name(){
    return this.registerForm.get('name')
  }
  get current_Consumption_Amount(){
    return this.registerForm.get('current_Consumption_Amount')
  }
  get tax_Rate(){
    return this.registerForm.get('tax_Rate')
  }
  get wastewater_Consumption_Value(){
    return this.registerForm.get('wastewater_Consumption_Value')
  }
  get total_Bill(){
    return this.registerForm.get('total_Bill')
  }


  NO_sh_id_1? :string;
  NO_er_id_1? :string;
  NO_invoice_id_1 :string;
  RETypes_list? : string;
  REType2? : RETypesModel;
  REType1? : string ;
  li_Dsvalues: DSValuesModel[] = [];
  liDsv_quantity: number[] = [];
  liDsv_water: number[] = [];
  liDsv_waist: number[] = [];
  Dsv_water: number = 0;
  Dsv_waist: number = 0;
  liDsv_two: number[] =[] ;

  invoiceModel_new : InvoiceModel;
  invoice_DTORequest? : Invoice_DTORequest;
  subscription_new : SubscriptionModel;
  subscription_DTORequest? : SubscriptionDTORequest;
  subscriper_new : SubscriperModel;
  constructor(
    private invoicesService : InvoicesService,
    private dsValuesService : DSValuesService,
    private subscriptionService : SubscriptionService,
    private subscriberService : SubscriberService,
    private RetypeService : RETypesService,
    private router :Router,
    private act_router : ActivatedRoute, 
  )
  {
    this.NO_invoice_id_1 ='';
    this.NO_er_id_1 ='33';

    this.invoiceModel_new = {
      nO_Invoice : '',
      year : '',
      fk_Real_Estate_Types_id : '',
      fk_Subscription_No_sp_id : 0,
      fK_Subscription_No_sp_Date : '',
      fK_Subscriber_No : '',
      date : new Date(),
      from : new Date(),
      to : '',
      previous_Consumption_Amount : 0,
      current_Consumption_Amount : 0,
      amount_Consumption_Amount : 0,
      service_Free : 0,
      tax_Rate : 0,
      consumption_Value : 0,
      wastewater_Consumption_Value : 0,
      total_Invoice : 0,
      tax_Value : 0,
      total_Bill : 0,
      is_There_Sanitation : true,
      reasons : ''
    };
    //this.REType1 ='3';
    this.subscription_new = {
      nO_Subscription : '',
      fK_Subscriber_No : '',
      fK_Real_Estate_Types_id : '',
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
    this.invoicesService.get_ID_invoice().subscribe({
      next : (response) =>{
        console.log(response);
        this.NO_invoice_id_1 = response;
        console.log( this.NO_invoice_id_1);
      }
    });
    
  }
  on_current_water_change(){
    if(this.subscription_new.last_Reading_Meter >0 ){
      this.invoiceModel_new.amount_Consumption_Amount = this.invoiceModel_new.current_Consumption_Amount - this.subscription_new.last_Reading_Meter;
      this.calculate_water(this.invoiceModel_new.amount_Consumption_Amount);
      //console.log(this.calculate_water(300));
      // console.log(this.Dsv_waist);
      }
  }
  calculate_water(consumption : number) {
    this.dsValuesService.get_all_DSValues().subscribe({
      next : (response)=>{
        this.li_Dsvalues =response;
        console.log(this.li_Dsvalues);
        if(this.li_Dsvalues){
          for(let one of this.li_Dsvalues){
            this.liDsv_quantity.push(one.condition) ;
            this.liDsv_waist.push(one.sanitation_price) ;
            this.liDsv_water.push(one.water_Price) ;
            
          }
          console.log(this.liDsv_quantity);
          console.log(this.liDsv_waist);
          console.log(this.liDsv_water);
          //this.calc2(consumption);
          console.log(this.calc2(consumption));
          this.liDsv_two = this.calc2(consumption);
          this.invoiceModel_new.consumption_Value = this.liDsv_two[0];
          this.invoiceModel_new.wastewater_Consumption_Value = this.liDsv_two[1];
          if(this.invoiceModel_new.is_There_Sanitation == false){
           this.invoiceModel_new.total_Invoice = this.liDsv_two[0] + this.invoiceModel_new.service_Free
          }
          else{
            this.invoiceModel_new.total_Invoice = this.liDsv_two[0] + this.liDsv_two[1] + this.invoiceModel_new.service_Free
          }
          if(this.invoiceModel_new.tax_Rate == 0){
            this.invoiceModel_new.total_Bill = this.invoiceModel_new.total_Invoice;
          }
          else{
            this.invoiceModel_new.total_Bill = this.invoiceModel_new.total_Invoice + this.invoiceModel_new.tax_Rate * (this.invoiceModel_new.total_Invoice - this.invoiceModel_new.service_Free) + this.invoiceModel_new.service_Free;
          }

          }

        }

        
    });

  }

  calc2(consumption : number): number[] {
    this.Dsv_water =0;
    this.Dsv_waist =0;
    if(consumption > this.liDsv_quantity[0]){
      this.Dsv_water += (this.liDsv_quantity[0])*this.liDsv_water[0];
      this.Dsv_waist += (this.liDsv_quantity[0])*this.liDsv_waist[0];
      consumption =consumption - this.liDsv_quantity[0];
    }else{
      this.Dsv_water += (consumption)*this.liDsv_water[0];
      this.Dsv_waist += (consumption)*this.liDsv_waist[0];
      consumption =0;
      return [this.Dsv_water,this.Dsv_waist];
    }
    if(consumption > this.liDsv_quantity[1]){
      this.Dsv_water += (this.liDsv_quantity[1])*this.liDsv_water[1];
      this.Dsv_waist += (this.liDsv_quantity[1])*this.liDsv_waist[1];
      consumption =consumption - this.liDsv_quantity[1];
    }else{
      this.Dsv_water += (consumption)*this.liDsv_water[1];
      this.Dsv_waist += (consumption)*this.liDsv_waist[1];
      consumption =0;
      return [this.Dsv_water,this.Dsv_waist];

    }
    if(consumption > this.liDsv_quantity[2]){
      this.Dsv_water += (this.liDsv_quantity[2])*this.liDsv_water[2];
      this.Dsv_waist += (this.liDsv_quantity[2])*this.liDsv_waist[2];
      consumption =consumption - this.liDsv_quantity[2];
    }else{
      this.Dsv_water += (consumption)*this.liDsv_water[2];
      this.Dsv_waist += (consumption)*this.liDsv_waist[2];
      consumption =0;
      return [this.Dsv_water,this.Dsv_waist];

    }
    if(consumption > this.liDsv_quantity[3]){
      this.Dsv_water += (this.liDsv_quantity[3])*this.liDsv_water[3];
      this.Dsv_waist += (this.liDsv_quantity[3])*this.liDsv_waist[3];
      consumption =consumption - this.liDsv_quantity[3];
    }else{
      this.Dsv_water += (consumption)*this.liDsv_water[3];
      this.Dsv_waist += (consumption)*this.liDsv_waist[3];
      consumption =0;
      return [this.Dsv_water,this.Dsv_waist];

    }
      
    if(consumption > this.liDsv_quantity[4]){
      this.Dsv_water += (consumption )*this.liDsv_water[4];
      this.Dsv_waist += (consumption )*this.liDsv_waist[4];
      consumption =0;
      return [this.Dsv_water,this.Dsv_waist];
    }
    else{
      this.Dsv_water += (consumption )*this.liDsv_water[4];
      this.Dsv_waist += (consumption )*this.liDsv_waist[4];
      consumption =0;
      return [this.Dsv_water,this.Dsv_waist];

    }
  }

  OnChanged_ServiceFree(){
    if(this.invoiceModel_new.is_There_Sanitation == false){
      this.invoiceModel_new.total_Invoice = this.invoiceModel_new.consumption_Value + this.invoiceModel_new.service_Free
     }
     else{
       this.invoiceModel_new.total_Invoice = this.invoiceModel_new.consumption_Value + this.invoiceModel_new.wastewater_Consumption_Value + this.invoiceModel_new.service_Free
     }
     this.invoiceModel_new.total_Bill = this.invoiceModel_new.total_Invoice + this.invoiceModel_new.tax_Value ;

  }

  OnChanged_TaxRate(){
    if(this.invoiceModel_new.tax_Rate == 0){
      this.invoiceModel_new.total_Bill = this.invoiceModel_new.total_Invoice;
    }
    else{
      this.invoiceModel_new.tax_Value =this.invoiceModel_new.tax_Rate * (this.invoiceModel_new.total_Invoice - this.invoiceModel_new.service_Free);
      this.invoiceModel_new.total_Bill = this.invoiceModel_new.total_Invoice + this.invoiceModel_new.tax_Value ;
    }
  }
  OnChanged_Total_Invoicewithout(){
    this.invoiceModel_new.tax_Value =this.invoiceModel_new.tax_Rate * (this.invoiceModel_new.total_Invoice - this.invoiceModel_new.service_Free);
    this.invoiceModel_new.total_Bill = this.invoiceModel_new.total_Invoice + this.invoiceModel_new.tax_Value ; 
  }

  Onsubmit(){
      if(this.NO_sh_id_1){

      
      this.invoice_DTORequest = {
        year : "24",
        fk_Real_Estate_Types_id : this.invoiceModel_new.fk_Real_Estate_Types_id,
        fk_Subscription_No_sp_id : this.invoiceModel_new.fk_Subscription_No_sp_id,
        fK_Subscription_No_sp_Date : this.NO_sh_id_1,
        fK_Subscriber_No : this.subscription_new.fK_Subscriber_No,
        date : this.invoiceModel_new.date,
        from : this.invoiceModel_new.from,
        to : this.invoiceModel_new.to,
        previous_Consumption_Amount : this.subscription_new.last_Reading_Meter,
        current_Consumption_Amount : this.invoiceModel_new.current_Consumption_Amount ,
        amount_Consumption_Amount : this.invoiceModel_new.amount_Consumption_Amount ,
        service_Free : this.invoiceModel_new.service_Free ,
        tax_Rate : this.invoiceModel_new.tax_Rate ,
        consumption_Value : this.invoiceModel_new.consumption_Value ,
        wastewater_Consumption_Value : this.invoiceModel_new.wastewater_Consumption_Value ,
        total_Invoice : this.invoiceModel_new.total_Invoice ,
        tax_Value : this.invoiceModel_new.tax_Value ,
        total_Bill : this.invoiceModel_new.total_Bill ,
        is_There_Sanitation : this.subscription_new.is_There_Sanitation,
        reasons : this.invoiceModel_new.reasons ,
    };
    console.log(this.subscription_new);
    this.invoicesService.add_single_invoice(this.invoice_DTORequest).subscribe({
      next : (response)=>{
        console.log(response);
      }
    });}

  }
  onID_sh_Change(){
    if(this.NO_sh_id_1){
      this.subscriptionService.get_single_subscription(this.NO_sh_id_1).subscribe({
        next : (response)=>{
          this.subscription_new = response;
          console.log(this.subscription_new);
          this.onID_er_Change();
          //this.NO_er_id_1 = this.subscription_new.fk_Subscriber_No;
          //console.log(this.subscription_new.fk_Subscriber_No);
          // if(this.subscription_new.fk_Subscriber_No !=undefined && this.subscription_new.fk_Subscriber_No !=''){
          //   this.NO_er_id_1 = this.subscription_new.fk_Subscriber_No;

          // }
        }
      });
    }
  }
  on_change_Date(){
    console.log(this.invoiceModel_new.from);
    this.invoicesService.get_Date_invoice(this.invoiceModel_new.from).subscribe({
      next : (response)=>{
       this.invoiceModel_new.to = response;
       
       console.log(response);

      }
    });
  }

 
  onID_er_Change(){
    if(this.subscription_new.fK_Subscriber_No){
      this.subscriberService.GetSingle_subscriper(this.subscription_new.fK_Subscriber_No).subscribe({
        next : (response)=>{
          this.subscriper_new = response;
          console.log(this.subscriper_new);
  
        }
      });
    }

  }


  End(){

  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }




}
