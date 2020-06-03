import { Klijent } from './../models/klijent';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KlijentService {

  private readonly API_URL='http://localhost:8083/klijent/'

  dataChange:BehaviorSubject<Klijent[]>= new BehaviorSubject<Klijent[]>([]);


  constructor(private httpClient:HttpClient) { }

  public getAllKlijent(): Observable<Klijent[]> {
    this.httpClient.get<Klijent[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    return this.dataChange.asObservable();
}

public addKlijent(klijent:Klijent ): void {
    this.httpClient.post(this.API_URL, klijent).subscribe();
}

public updateKlijent(klijent:Klijent ): void {
    this.httpClient.put(this.API_URL, klijent).subscribe();
}

public deleteKlijent(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
}
}
