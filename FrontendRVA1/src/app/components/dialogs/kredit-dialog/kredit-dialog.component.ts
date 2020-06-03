import { KreditService } from './../../../services/kredit.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kredit } from 'src/app/models/kredit';

@Component({
  selector: 'app-kredit-dialog',
  templateUrl: './kredit-dialog.component.html',
  styleUrls: ['./kredit-dialog.component.css']
})
export class KreditDialogComponent implements OnInit {
  public flag: number;

  constructor(public kreditService:KreditService,
              public snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<KreditDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Kredit
              ) { }

  ngOnInit(): void {
  }

  public add() : void {
    this.kreditService.addKredit(this.data);
    this.snackBar.open('Uspješno dodat kredit:'+this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public update() : void {
    this.kreditService.updateKredit(this.data);
    this.snackBar.open('Uspješno modifikovan kredit'+ this.data.oznaka,'Ok',{
      duration:2000
    })
  }

  public delete() : void {
    this.kreditService.deleteKredit(this.data.id)
    this.snackBar.open('Uspješno obrisan kredit'+ this.data.oznaka,'Ok',{
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
