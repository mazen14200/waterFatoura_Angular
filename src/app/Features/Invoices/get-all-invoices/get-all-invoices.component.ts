import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceModel } from 'src/app/models/Invoices/InoviceModel';
import { Invoice_newDTORRequest } from 'src/app/models/Invoices/InvoicesDTORRRequest';
import { InvoicesService } from 'src/services/invoices-.service';

@Component({
  selector: 'app-get-all-invoices',
  templateUrl: './get-all-invoices.component.html',
  styleUrls: ['./get-all-invoices.component.css']
})
export class GetAllInvoicesComponent implements OnInit{

  invoices$? : Observable<InvoiceModel []>;
  invoices? : InvoiceModel [];
  invoices2! : Invoice_newDTORRequest [];
  constructor(private invoicesService : InvoicesService) {
       
  }
  ngOnInit(): void {
    //this.invoices$ = this.invoicesService.get_All_invoices();
  this.invoicesService.get_All_invoices().subscribe({
    next:(response)=>{
      this.invoices = response;
      console.log(response);
      // this.invoices2 = response.map((invoices)=>({
      //   no_Invoice : invoices.nO_Invoice,
      //   fk_Subscriber_No : invoices.fK_Subscriber_No,
      //   fk_Subscription_No_sp_Date : invoices.fK_Subscription_No_sp_Date,
      // }));
    }
  });
  }


}
