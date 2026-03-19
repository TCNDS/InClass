import { Component, OnInit, viewChild } from '@angular/core';
import { User, UserService} from './user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  users: User[] = [];
  constructor (private userService: UserService ) {}
  
  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Failed to fetch user data!', error)
      }
    )
  }

  toggleFavorite(user: User): void {
    this.userService.toggleFavorite(user);
  }

  isFavorite(userId: number): boolean {
    return this.userService.isFavorite(userId);
  }

}
