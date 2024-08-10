import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  accountService = inject(AccountService);
  router=inject(Router)
  toastr=inject(ToastrService)
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        this.router.navigateByUrl('/');
        this.toastr.success('successfully logged in');
      },
      error: error => this.toastr.error(error.error)
    });



  }




}
