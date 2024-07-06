import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { V1_DogData } from './dog-v1/dog-v1.component';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DogsService {
  http = inject(HttpClient);
  private v1_url: string = 'https://random.dog/woof.json';

  getV1Dog(): Observable<V1_DogData> {
    return this.http.get<V1_DogData>(this.v1_url);
  }
}
