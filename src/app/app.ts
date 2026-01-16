// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',          // MUST match <app-root> in index.html
  standalone: true,              // Standalone mode
  imports: [RouterOutlet],       // Add other standalone imports if needed
  template: `<router-outlet></router-outlet>` // template
})
export class App {}              // Class name can be App
