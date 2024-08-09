import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,MatMenuModule,MatButtonModule,MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

// isLoggedIn=false;

accountService = inject(AccountService);
router=inject(Router);
toastr=inject(ToastrService);
checkLogged=localStorage.getItem('user');



  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.toastr.success('succesfully Logged out');

    
  }

}
 