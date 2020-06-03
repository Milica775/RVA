import { Klijent } from './../../models/klijent';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { KlijentService } from 'src/app/services/klijent.service';
import { MatDialog } from '@angular/material/dialog';
import { KlijentDialogComponent } from '../dialogs/klijent-dialog/klijent-dialog.component';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  displayedColumns=['id','ime','prezime','broj_lk','kredit','actions'];
  dataSource: MatTableDataSource<Klijent>;

  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  @ViewChild(MatSort,{static:false}) sort:MatSort;

  constructor(private klijentService: KlijentService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.klijentService.getAllKlijent().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);

        // pretraga po nazivu ugnježdenog objekta
        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'kredit' ? currentTerm + data.kredit.oznaka : currentTerm + data[key];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        // sortiranje po nazivu ugnježdenog objekta
        this.dataSource.sortingDataAccessor = (data, property) => {
          switch (property) {
            case 'kredit': return data.kredit.oznaka.toLocaleLowerCase();
            default: return data[property];
          }
        };

      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  public openDialog(flag:number, id?: number, ime?:string,prezime?:string,broj_lk?:number,kredit?:number) {
    const dialogRef=this.dialog.open(KlijentDialogComponent,
    {data: {id,ime,prezime,broj_lk,kredit}}
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
