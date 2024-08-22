import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LogoutComponent } from '../../modals/logout/logout.component';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public authSvc = inject(AuthService)
  dialog = inject(MatDialog)

isAuthenticated = false;
showButtons = false;
ngOnInit(): void {
this.authSvc.isAuthenticated$.subscribe
  (value => this.isAuthenticated = value)  
}

logout(): void {
  const dialogRef = this.dialog.open(LogoutComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.authSvc.logout();
    }
  });
}
}



