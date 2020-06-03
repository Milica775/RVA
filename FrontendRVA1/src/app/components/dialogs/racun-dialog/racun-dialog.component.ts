import { KlijentService } from 'src/app/services/klijent.service';
import { Klijent } from './../../../models/klijent';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Racun } from 'src/app/models/racun';
import { RacunService } from 'src/app/services/racun.service';

@Component({
  selector: 'app-racun-dialog',
  templateUrl: './racun-dialog.component.html',
  styleUrls: ['./racun-dialog.component.css']
})
export class RacunDialogComponent implements OnInit {

  klijenti: Klijent[];
  public flag: number;


  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RacunDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Racun,
    public racunService: RacunService,
    public klijentService: KlijentService) { }

  ngOnInit() {
    this.klijentService.getAllKlijent().subscribe(klijenti =>
       this.klijenti=klijenti
      );
  }





  public add() : void {
    this.data.id = 0;
    this.racunService.addRacun(this.data);
    this.snackBar.open('Uspješno dodat račun:'+this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public update() : void {
    this.racunService.updateRacun(this.data);
    this.snackBar.open('Uspješno modifikovan račun'+ this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public delete() : void {
    this.racunService.deleteRacun(this.data.id)
    this.snackBar.open('Uspješno obrisan račun'+ this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public cancel() : void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!'+ this.data.oznaka,'Ok',{
      duration:500
    })


  }


}
