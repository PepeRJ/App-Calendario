import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterModule, AsyncPipe, MatProgressSpinnerModule],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  

  public authSvc = inject(AuthService)
  public userSvc = inject(UserService)
  private router = inject(Router)

  isLoading = true; 

  ngOnInit() {
    this.checkAuthState();
  }

  private checkAuthState() {
    this.authSvc.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/calendario']);
      } else {
        this.isLoading = false;
      }
    });
  }
}


