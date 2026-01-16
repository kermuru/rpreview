import { Routes } from '@angular/router';
import { UploadReview } from './Views/upload-review/upload-review';

export const routes: Routes = [
  { path: 'upload-review/:occupant', component: UploadReview },
  { path: '', redirectTo: 'upload-review/DEFAULT_OCCUPANT', pathMatch: 'full' },
  { path: '**', redirectTo: 'upload-review/DEFAULT_OCCUPANT' }
];
