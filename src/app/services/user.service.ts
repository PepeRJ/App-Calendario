import { Injectable, inject} from '@angular/core';
import { AuthService} from '@auth0/auth0-angular';
import { UserInf } from '../model/user-inf';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public authSvc = inject(AuthService)
  user!: UserInf | undefined | null
  loaded = false

  constructor() {  
    
  this.authSvc.user$.subscribe(user => {
    console.log(user)
    this.user = user as UserInf;
    this.loaded = user ? true : false;
  });
}
}
