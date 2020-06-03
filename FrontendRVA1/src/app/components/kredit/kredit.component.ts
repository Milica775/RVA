import { KreditService } from './../../services/kredit.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Kredit} from './../../models/kredit';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { KreditDialogComponent } from '../dialogs/kredit-dialog/kredit-dialog.component';

@Component({
  selector: 'app-kredit',
  templateUrl: './kredit.component.html',
  styleUrls: ['./kredit.component.css']
})
export class KreditComponent implements OnInit {

  displayedColumns=['id','naziv','oznaka','opis','actions'];
  dataSource: MatTableDataSource<Kredit>;

  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  @ViewChild(MatSort,{static:false}) sort:MatSort;


  constructor(private kreditService: KreditService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.kreditService.getAllKredit().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);

      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  public openDialog(flag:number, id?: number,naziv?:string,oznaka?:string,opis?:string) {
    const dialogRef=this.dialog.open(KreditDialogComponent,
    {data: {id,naziv,oznaka,opis}}
    );

    dialogRef.componentInstance.flag=flag;

    dialogRef.afterClosed().subscribe(result =>{
        if(result===1){
          this.loadData();
        }
    })
  }

  applyFilter(filterValue:string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLocaleLowerCase();
    this.dataSource.filter=filterValue;
  }

}
