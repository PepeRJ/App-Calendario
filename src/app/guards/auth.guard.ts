import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, switchMap, of,} from 'rxjs';

export const authGuard: CanActivateFn = () => {

  const authSvc = inject(AuthService);
  const router = inject(Router)

  return authSvc.isAuthenticated$.pipe(
    switchMap(isAuthenticated =>
      isAuthenticated ? of(true) : (router.navigate(['']), of(false))
    ),
    catchError(() => of(false))
  );
};
