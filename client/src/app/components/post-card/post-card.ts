import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-post-card',
  standalone: false,
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  showComments: boolean = false;
  newComment: string = '';
  // @Input() post: any;
  // @Input() currentUserId!: string;

  // get isLikedByCurrentUser(): boolean {
  //   return this.post?.likedBy?.includes(this.currentUserId);
  // }

  // isLikedByCurrentUser: boolean = false; // Placeholder for actual logic
  // toggleLike(): void {
  //   if (this.isLikedByCurrentUser) {
  //     // Unlike logic
  //   } else {
  //     // Like logic
  //   }
  // }
}
