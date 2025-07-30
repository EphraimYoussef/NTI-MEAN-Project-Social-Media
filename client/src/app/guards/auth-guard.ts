import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
