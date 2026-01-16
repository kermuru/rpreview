import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../Services/review/review';
import { ReviewContext } from '../../Models/review/review-context.model';
import { ReviewSubmit } from '../../Models/review/review-submit.model';

@Component({
  selector: 'app-upload-review',
  standalone: true,
  templateUrl: './upload-review.html'
})
export class UploadReview implements OnInit {
  occupant!: string;
  interments: ReviewContext[] = [];
  reviewForm: ReviewSubmit = new ReviewSubmit();

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    // Get occupant from URL
    this.occupant = this.route.snapshot.paramMap.get('occupant')!;

    // Fetch interments from backend
    this.reviewService.fetchContextByOccupant(this.occupant)
      .subscribe({
        next: data => {
          this.interments = data;

          if (data.length > 0) {
            // Pre-fill review form with first interment by default
            this.reviewForm.documentNo = data[0].documentno;
            this.reviewForm.reviewerName = data[0].occupant;
          }
        },
        error: err => console.error('Failed to fetch interments', err)
      });
  }

  selectInterment(interment: ReviewContext) {
    // Change current documentNo if user selects another interment
    this.reviewForm.documentNo = interment.documentno;
    this.reviewForm.reviewerName = interment.occupant;
  }

  submitReview() {
    this.reviewService.submitReview(this.reviewForm)
      .subscribe({
        next: res => alert('Review submitted successfully!'),
        error: err => console.error('Failed to submit review', err)
      });
  }
}
