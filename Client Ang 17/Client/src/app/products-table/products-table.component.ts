import {MatTabsModule} from '@angular/material/tabs';
import {AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductCardDto } from '../_dtos/productCardDto';
import { MainService } from '../_services/main.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [MatTabsModule,MatTableModule,MatPaginator,MatPaginatorModule
    ,MatSort,MatSortModule,MatTableModule,MatInputModule,MatFormFieldModule,
    MatDialogModule,MatButtonModule,CurrencyPipe
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  displayedColumns: string[] = ['id', 'name', 'price','actions'];

  dataSource: MatTableDataSource<ProductCardDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

constructor(){
  this.dataSource = new MatTableDataSource();

}
mainService=inject(MainService)
dialog=inject(MatDialog)

ngOnInit(){
 
  this.fetchProducts()
}

fetchProducts(){ this.mainService.getProductsList().subscribe({
  next: res=> this.dataSource.data=res,
  error: error=> console.log(error)      
})}




ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(id: number,enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{id}
    });
    
  
  }



}



