import { Component } from '@angular/core';
import { User, UserService} from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite',
  standalone: false,
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  favoriteUsers: User[] = [];
  favoriteSub!: Subscription;
  constructor (private userService: UserService ) {}
  ngOnInit(): void {
    this.favoriteSub = this.userService.favoriteUsers$.pipe().subscribe({
      next: (data) => {
        this.favoriteUsers = data;
      },
      error: (err) => {
        console.error('Failed to receive favorite users:', err);
      }
    });
  }
  removeFavorite(userId: number): void {
    this.userService.removeOutFavorite(userId);
  }
  ngOnDestroy(): void {
    if (this.favoriteSub) {
      this.favoriteSub.unsubscribe();
    }
  }
}
