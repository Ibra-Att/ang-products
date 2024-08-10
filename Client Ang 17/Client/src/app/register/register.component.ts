import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { registerUserDto } from '../_dtos/Auth/registerUserDto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {

accountService=inject(AccountService)
router=inject(Router);
toastr=inject(ToastrService)
userInfo:any={};




registerUser() {

  this.accountService.registerUser(this.userInfo).subscribe({
    next: res=>{
      this.toastr.success('successfully Registered');
      this.router.navigateByUrl('/login');

    }
    ,error: error => {
  console.error(error);
  this.toastr.error('wrong entry');
}
  });
}





  
}




