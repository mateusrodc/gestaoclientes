import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../authService/auth.service';


export const GuardService: CanActivateFn  = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    return true;
  } 
  else {
    localStorage.removeItem('access_token');
    router.navigate(['']);
    return false;
  }
};
