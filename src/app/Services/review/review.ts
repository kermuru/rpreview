import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewContext } from '../../Models/review/review-context.model';
import { ReviewSubmit } from '../../Models/review/review-submit.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private API = 'http://localhost:8000/api/review';

  constructor(private http: HttpClient) {}

  // Fetch interments by occupant name
fetchContextByOccupant(occupant: string): Observable<ReviewContext[]> {
  return this.http.get<ReviewContext[]>(`${this.API}/context/${encodeURIComponent(occupant)}`);
}


  submitReview(payload: ReviewSubmit): Observable<any> {
    return this.http.post(`${this.API}/submit`, payload);
  }
}
