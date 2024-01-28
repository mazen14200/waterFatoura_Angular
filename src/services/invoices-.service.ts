import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment';
import { InvoiceModel } from 'src/app/models/Invoices/InoviceModel';
import { Invoice_DTORequest } from 'src/app/models/Invoices/Invoice_DTORequest';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(
    private http : HttpClient,
    private router :Router,
    private act_router : ActivatedRoute
  ) 
  {

  }

  get_single_invoice(id : string) : Observable<InvoiceModel>{
    return this.http.get<InvoiceModel>(`${Environment.path_API}/api/Invoices/${id}`)
  }

  get_All_invoices() : Observable<InvoiceModel []>{
    return this.http.get<InvoiceModel []>(`${Environment.path_API}/api/Invoices`)
  }

  add_single_invoice(invoice_DTORequest : Invoice_DTORequest) : Observable<InvoiceModel>{
    return this.http.post<InvoiceModel>(`${Environment.path_API}/api/Invoices`,invoice_DTORequest);
  }

  update_single_invoice(invoice_DTORequest : Invoice_DTORequest,id:string) : Observable<InvoiceModel>{
    return this.http.put<InvoiceModel>(`${Environment.path_API}/api/Invoices/${id}`,invoice_DTORequest);
  }

  delete_single_invoice(id:string) : Observable<InvoiceModel>{
    return this.http.delete<InvoiceModel>(`${Environment.path_API}/api/Invoices/${id}`);
  }

  get_ID_invoice() : Observable<string>{
    return this.http.get<string>(`${Environment.path_API}/api/Invoices/GenerateID`);
  }

  get_Date_invoice(date:Date) : Observable<string>{
    return this.http.get<string>(`${Environment.path_API}/api/Invoices/Date_Generated/${date}`);
  }
}
