import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Racun } from '../models/racun';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacunService {

  private readonly API_URL='http://localhost:8083/racuniPoTipuRacunaId/'
  private readonly API_URL1='http://localhost:8083/racun/'

  dataChange:BehaviorSubject<Racun[]>= new BehaviorSubject<Racun[]>([]);


  constructor(private httpClient:HttpClient) { }

  public getRacuni(idTipRac:number): Observable<Racun[]> {
    this.httpClient.get<Racun[]>(this.API_URL+ idTipRac).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    return this.dataChange.asObservable();
}

public addRacun(racun: Racun): void {
     racun.id=0;
    this.httpClient.post(this.API_URL1, racun).subscribe();
}

public updateRacun(racun:Racun ): void {
    this.httpClient.put(this.API_URL1, racun).subscribe();
}

public deleteRacun(id: number): void {
    this.httpClient.delete(this.API_URL1 + id).subscribe();
}
}
