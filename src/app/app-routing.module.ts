import { RouterModule, Routes } from '@angular/router';
import { AddNewSubscriberComponent } from './Features/Subscriber/add-new-subscriber/add-new-subscriber.component';
import { GetSingleSubscriperComponent } from './Features/Subscriber/get-single-subscriper/get-single-subscriper.component';
import { NgModule } from '@angular/core';
import { AddSubscriptionComponent } from './Features/Subscription/add-subscription/add-subscription1.component';
import { AddNewInvoiceComponent } from './Features/Invoices/add-new-invoice/add-new-invoice.component';
import { GetAllInvoicesComponent } from './Features/Invoices/get-all-invoices/get-all-invoices.component';

// <ul>
// <li><a [routerLink]="['/WaterFatoura/insert_invoice']">تسجيل فاتورة</a></li>
// <li><a [routerLink]="['/WaterFatoura/add_subscriper']">تحديث بيانات مشترك</a></li>
// <li><a [routerLink]="['/WaterFatoura/add_subscription']">تحديث بيانات إشتراك</a></li>
// <li><a [routerLink]="['/WaterFatoura/add_REType']">تحديث بيانات نوع عقار</a></li>
// <li>////////////////////</li>
// <li><a [routerLink]="['/WaterFatoura/invoice']">استفسار عن فاتورة</a></li>
// <li><a [routerLink]="['/WaterFatoura/subscripers']">تقرير عن المشتركين</a></li>
// <li><a [routerLink]="['/WaterFatoura/subscriptions']">تقرير عن الإشتراكات</a></li>
// <li><a [routerLink]="['/WaterFatoura/all_invoices']">تقرير عن الفواتير</a></li>
// <li>////////////////////</li>
// <li><a [routerLink]="['/WaterFatoura/log_in']" >خروج</a></li>
// </ul>
const routes: Routes = [
  {
    path : "WaterFatoura/add_subscriper",
    component : AddNewSubscriberComponent
  },
  {
    path : "WaterFatoura/subscriper/:id",
    component : GetSingleSubscriperComponent
  },
  {
  path : "WaterFatoura/invoice",
  component : GetSingleSubscriperComponent
  },
  {
  path : "WaterFatoura/add_subscription",
  component : AddSubscriptionComponent
  },
  {
    path : "WaterFatoura/insert_invoice",
    component : AddNewInvoiceComponent
  },
  {
    path : "WaterFatoura/all_invoices",
    component : GetAllInvoicesComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
