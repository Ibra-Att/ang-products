import { Component, EventEmitter, Inject, inject, Input, Output } from '@angular/core';
import {
  MatDialog,

  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,

} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MainService } from '../_services/main.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent,MatDialogClose,MatDialogTitle,MatButtonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent   {
  constructor(public dialog: MatDialog , public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }) {
    
  }
  route=inject(Router);
  mainService=inject(MainService);
  @Output() productDeleted = new EventEmitter<void>();


  onNoClick(): void {
    this.dialogRef.close();
  }


  deleteProduct(id:number){
    
    this.mainService.deleteProduct(id).subscribe({ 
      next: res=>{console.log('deleted successfully');
        this.productDeleted.emit(); 

      },
      error: error=>{console.log(error);
      }
      
      
    });

  
     
  }

  
}
