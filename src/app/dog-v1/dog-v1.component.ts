import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'ova-dog-v1',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './dog-v1.component.html',
  styleUrl: './dog-v1.component.scss',
  providers: [],
})
export class DogV1Component {
  content = signal<V1_DogData>(V1_DogMock);
  contentType = signal<string>('photo');
  dogService = inject(DogsService);

  constructor() {
    this.getDog();
  }

  getDog() {
    this.dogService.getV1Dog().subscribe((data) => {
      this.content.set(data);
      this.contentType.update(() => this.getContentType(data.url));
    });
  }

  getContentType(url: string): string {
    let contentArr: string[] = url.toLowerCase().split('.');
    if (contentArr.includes('mp4') || contentArr.includes('webm')) {
      return 'video';
    }
    return 'photo';
  }
}

export type V1_DogData = {
  fileSizeBytes: number;
  url: string;
};

export const V1_DogMock: V1_DogData = {
  fileSizeBytes: 1021794,
  url: 'https://random.dog/b0c4a962-ac5f-46d9-b05f-ed13f586bc38.webm',
};
