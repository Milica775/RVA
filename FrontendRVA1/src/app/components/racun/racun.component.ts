import { Klijent } from './../../models/klijent';
import { TipRacuna } from './../../models/tipRacuna';
import { Racun } from './../../models/racun';
import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { RacunService } from 'src/app/services/racun.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RacunDialogComponent } from '../dialogs/racun-dialog/racun-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit,OnChanges {

  displayedColumns=['id','naziv','oznaka','opis','tip_racuna','klijent','actions'];
  dataSource: MatTableDataSource<Racun>;

  @Input() selektovanTipRacuna:TipRacuna;

  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  @ViewChild(MatSort,{static:false}) sort:MatSort;

  constructor(private racunService: RacunService,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selektovanTipRacuna.id) {
      debugger;
      this.loadData();
    }
  }

  public loadData(){
    this.racunService.getRacuni(this.selektovanTipRacuna.id).subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);


        // pretraga po nazivu ugnježdenog objekta
        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'klijent' ? currentTerm + data.klijent.id : currentTerm + data[key];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        // sortiranje po nazivu ugnježdenog objekta
        this.dataSource.sortingDataAccessor = (data, property) => {
          switch (property) {
            case 'klijent': return data.klijent.id;
            default: return data[property];
          }
        };

      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string, opis?: string,
    tipRacuna?: TipRacuna, klijent?: Klijent) {
const dialogRef = this.dialog.open(RacunDialogComponent, {
data: {
i:id,id, naziv, oznaka, opis,tipRacuna, klijent
}
});
dialogRef.componentInstance.flag = flag;
console.log(flag)
if (flag === 1) {
  console.log(flag)
dialogRef.componentInstance.data.tip_racuna = this.selektovanTipRacuna;
console.log(flag)
}

dialogRef.afterClosed().subscribe(result => {
if (result === 1) {
  console.log(flag)
this.loadData();
console.log(flag)
}
});
}

  applyFilter(filterValue:string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLocaleLowerCase();
    this.dataSource.filter=filterValue;
  }

}
