import { Component } from '@angular/core';
import { DogV1Component } from './dog-v1/dog-v1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DogV1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ssr-test';
}
