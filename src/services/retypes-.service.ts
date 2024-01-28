import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment';
import { RETypesModel } from 'src/app/models/RETypes/RETypesModel';

@Injectable({
  providedIn: 'root'
})
export class RETypesService {

  constructor(
    private http : HttpClient,
    private router : Router,
    private act_route : ActivatedRoute,
    
  ) 
  { 

  }

  get_all_RETypes() : Observable<RETypesModel []>{
    return this.http.get<RETypesModel []>(`${Environment.path_API}/api/RETypes`);
  }
}
