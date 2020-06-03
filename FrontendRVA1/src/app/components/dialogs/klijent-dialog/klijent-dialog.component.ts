import { Component, OnInit, Inject } from '@angular/core';
import { KlijentService } from 'src/app/services/klijent.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kredit } from 'src/app/models/kredit';
import { Klijent } from 'src/app/models/klijent';
import { KreditService } from 'src/app/services/kredit.service';

@Component({
  selector: 'app-klijent-dialog',
  templateUrl: './klijent-dialog.component.html',
  styleUrls: ['./klijent-dialog.component.css']
})
export class KlijentDialogComponent implements OnInit {
  krediti: Kredit[];
  public flag: number;

  constructor(public klijentService:KlijentService,
              public snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<KlijentDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Klijent,
              public kreditService: KreditService

              ) { }

  ngOnInit(): void {
    this.kreditService.getAllKredit().subscribe(krediti =>
      this.krediti=krediti
    );
  }


  public add() : void {
    this.data.id = 0;
    this.klijentService.addKlijent(this.data);
    this.snackBar.open('Uspješno dodat klijent:'+this.data.ime,'Ok',{
      duration:2000
    })
  }

  public update() : void {
    this.klijentService.updateKlijent(this.data);
    this.snackBar.open('Uspješno modifikovan klijent'+ this.data.ime,'Ok',{
      duration:2000
    })
  }

  public delete() : void {
    this.klijentService.deleteKlijent(this.data.id)
    this.snackBar.open('Uspješno obrisan klijent'+ this.data.ime,'Ok',{
      duration:2000
    })
  }

  public cancel() : void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!'+ this.data.id,'Ok',{
      duration:500
    })

  }


}
