import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Name} from '../../name';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  private nameUrl = './assets/names.json';

  constructor(private httpClient: HttpClient) { }

  getNames(): Observable<Name[]> { return this.httpClient.get<Name[]>(this.nameUrl); }
}
