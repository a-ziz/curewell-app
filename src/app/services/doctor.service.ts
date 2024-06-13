import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'https://666a199e2e964a6dfed79deb.mockapi.io/doctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  addDoctor(doctor: { name: string; }): Observable<Doctor[]> {
    return this.http.post<Doctor[]>(this.apiUrl, doctor);
  }
}
