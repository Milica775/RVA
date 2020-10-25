import { TipRacuna } from './../../models/tipRacuna';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TipRacunaService } from 'src/app/services/tip-racuna.service';
import { MatDialog } from '@angular/material/dialog';
import { TipRacunaDialogComponent } from '../dialogs/tip-racuna-dialog/tip-racuna-dialog.component';


@Component({
  selector: 'app-tip-racuna',
  templateUrl: './tip-racuna.component.html',
  styleUrls: ['./tip-racuna.component.css']
})
export class TipRacunaComponent implements OnInit {

  displayedColumns=['id','naziv','opis','oznaka','actions'];
  dataSource: MatTableDataSource<TipRacuna>;
  selektovanTipRacuna:TipRacuna;

  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  @ViewChild(MatSort,{static:false}) sort:MatSort;

  constructor(private tipRacunaService: TipRacunaService,
              private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData(){
    this.tipRacunaService.getAllTipRacuna().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);

      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }


  public openDialog(flag:number, id?: number,naziv?:string,opis?:string,oznaka?:string) {
    const dialogRef=this.dialog.open(TipRacunaDialogComponent,
    {data: {id,naziv,opis,oznaka}}
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

  selectRow(row: any) {
    this.selektovanTipRacuna = row;
  }

}
