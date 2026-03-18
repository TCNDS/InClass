import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  private favoriteUsers: User[] = [];
  private favoriteUsersSubject = new BehaviorSubject<User[]>([]);

  favoriteUsers$ = this.favoriteUsersSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  addToFavorite(user: User): void {
    const exists = this.favoriteUsers.some(fav => fav.id === user.id);

    if (!exists) {
      this.favoriteUsers.push(user);
      this.favoriteUsersSubject.next([...this.favoriteUsers]);
    }
  }

  removeOutFavorite(userId: number): void {
    this.favoriteUsers = this.favoriteUsers.filter(user => user.id !== userId);
    this.favoriteUsersSubject.next([...this.favoriteUsers]);
  }

  toggleFavorite(user: User): void {
    const exists = this.favoriteUsers.some(fav => fav.id === user.id);

    if (exists) {
      this.removeOutFavorite(user.id);
    } else {
      this.addToFavorite(user);
    }
  }

  isFavorite(userId: number): boolean {
    return this.favoriteUsers.some(user => user.id === userId);
  }
}
