import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment';
import { DSValuesModel } from 'src/app/models/DSValues/DSValuesModel';

@Injectable({
  providedIn: 'root'
})
export class DSValuesService {

  constructor( private http : HttpClient,
  ) { }

    get_all_DSValues() : Observable<DSValuesModel []>{
      return this.http.get<DSValuesModel []>(`${Environment.path_API}/api/DSValues`);
    }


}

