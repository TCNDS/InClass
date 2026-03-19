import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StarWarApiService } from './star-war-api.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-star-war-search',
  standalone: false,
  templateUrl: './star-war-search.component.html',
  styleUrl: './star-war-search.component.scss'
})

export class StarWarSearchComponent {
  characterName = new FormControl('');
  people: any = null;
  films: any[] = [];

  constructor(private api: StarWarApiService) {}

  performSearch(): void {
    const name = this.characterName.value?.trim().toLowerCase();

    if (!name) {
      return;
    }

    this.api.getSearchData(name).pipe(
      switchMap((res: any) => {
        this.people = res;
        return this.api.getFilmData(this.people.films);
      })
    ).subscribe(
      (films: any[]) => {
        this.films = films;
      },
      (err: Error) => {
        console.log('Fail to get the info!', err);
    });
  }
}
