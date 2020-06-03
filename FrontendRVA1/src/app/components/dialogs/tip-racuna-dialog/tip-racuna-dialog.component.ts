import { TipRacuna } from './../../../models/tipRacuna';
import { Component, OnInit, Inject } from '@angular/core';
import { TipRacunaService } from 'src/app/services/tip-racuna.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KreditDialogComponent } from '../kredit-dialog/kredit-dialog.component';
import { Kredit } from 'src/app/models/kredit';

@Component({
  selector: 'app-tip-racuna-dialog',
  templateUrl: './tip-racuna-dialog.component.html',
  styleUrls: ['./tip-racuna-dialog.component.css']
})
export class TipRacunaDialogComponent implements OnInit {

  public flag: number;

  constructor(public tipRacunaService:TipRacunaService,
    public snackBar:MatSnackBar,
    public dialogRef:MatDialogRef<TipRacunaDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: TipRacuna) { }

  ngOnInit(): void {
  }


  public add() : void {
    this.tipRacunaService.addTipRacuna(this.data);
    this.snackBar.open('Uspješno dodat tip računa:'+this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public update() : void {
    this.tipRacunaService.updateTipRacuna(this.data);
    this.snackBar.open('Uspješno modifikovan tip računa'+ this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public delete() : void {
    this.tipRacunaService.deleteTipRacuna(this.data.id)
    this.snackBar.open('Uspješno obrisan tip računa'+ this.data.oznaka,'Ok',{
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
