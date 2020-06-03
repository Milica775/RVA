import { TipRacuna } from './../models/tipRacuna';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipRacunaService {

  private readonly API_URL='http://localhost:8083/tipRacuna/'

  dataChange:BehaviorSubject<TipRacuna[]>= new BehaviorSubject<TipRacuna[]>([]);


  constructor(private httpClient:HttpClient) { }

  public getAllTipRacuna(): Observable<TipRacuna[]> {
    this.httpClient.get<TipRacuna[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    return this.dataChange.asObservable();
}

public addTipRacuna(tipRacuna: TipRacuna): void {
    tipRacuna.id=0;
    this.httpClient.post(this.API_URL, tipRacuna).subscribe();
}

public updateTipRacuna(tipRacuna: TipRacuna): void {
    this.httpClient.put(this.API_URL, tipRacuna).subscribe();
}

public deleteTipRacuna(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
}
}
