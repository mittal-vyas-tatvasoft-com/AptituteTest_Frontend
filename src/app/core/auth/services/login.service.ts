import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../interfaces/login.interface';
import { Observable, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForgotPasswordModel } from '../interfaces/forgot-password.interface';
import { ResponseModel } from 'src/app/shared/common/interfaces/response.interface';
import { ResetPasswordModel } from '../interfaces/reset-password.interface';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private storageToken = 'token';
  private storageRefreshToken = 'refreshToken';
  private storageTokenExpiry = 'tokenExpiry';
  private sidebarStateKey = 'sidebarState';
  private userData: any;
  private sessionTimeoutInMinutes = 20; // Adjust as needed
  constructor(private http: HttpClient, private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem(this.storageToken, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.storageToken);
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.storageRefreshToken, refreshToken);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.storageRefreshToken);
  }

  setTokenExpiry(expiryTime: Date): void {
    localStorage.setItem(this.storageTokenExpiry, expiryTime.toISOString());
  }

  getTokenExpiry(): Date | null {
    const expiry = localStorage.getItem(this.storageTokenExpiry);
    return expiry ? new Date(expiry) : null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }


  logout(): void {
    localStorage.removeItem(this.storageToken);
    localStorage.removeItem(this.storageRefreshToken);
    localStorage.removeItem(this.storageTokenExpiry);
    this.router.navigate(['/']);
  }

  login(payload: LoginModel): Observable<ResponseModel<string>> {
    return this.http
      .post<ResponseModel<string>>(`${environment.baseURL}UserAuthentication/Login`, payload)
      .pipe(
        map((res: any) => {
          if (res.result) {
            this.setToken(res.data.accessToken);
            this.setRefreshToken(res.data.refreshToken);
            this.setTokenExpiry(new Date(res.data.refreshTokenExpiryTime));
          }
          return res;
        }),
      );
  }


  forgotPassword(
    userName: ForgotPasswordModel,
  ): Observable<ResponseModel<string>> {
    const url = `${environment.baseURL}UserAuthentication/ForgetPassword?email=${userName.Email}`;
    return this.http.post<ResponseModel<string>>(url, null);
  }

  resetPassword(
    payload: ResetPasswordModel,
  ): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${environment.baseURL}UserAuthentication/ResetPassword`,
      payload,
    );
  }

  saveStateToLocalStorage(state: boolean) {
    localStorage.setItem(this.sidebarStateKey, JSON.stringify(state));
  }

  getStateFromLocalStorage(): boolean {
    const storedState = localStorage.getItem(this.sidebarStateKey);
    return storedState ? JSON.parse(storedState) : true;
  }

  refreshToken(): Observable<ResponseModel<string>> {
    const refreshToken = this.getRefreshToken();
    const token = this.getToken();
    const tokenExpiry = this.getTokenExpiry();

    if (!refreshToken || !token || !tokenExpiry) {
      return throwError(new Error('Missing refresh token, token, or token expiry.'));
    }

    const payload = {
      refreshToken: refreshToken,
      accessToken: token,
      refreshTokenExpiryTime: tokenExpiry.toISOString()
    };

    return this.http
      .post<ResponseModel<string>>(
        `${environment.baseURL}UserAuthentication/RefreshToken`,
        payload
      )
      .pipe(
        map((res: any) => {
          if (res.result) {
            this.setToken(res.data.accessToken);
            this.setRefreshToken(res.data.refreshToken);
            this.setTokenExpiry(new Date(res.data.refreshTokenExpiryTime));
          }
          return res;
        })
      );
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        return null;
      }
    }
    return null;
  }


}
