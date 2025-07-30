import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/postInterface';
import { CommentServices } from '../../services/comment/comment-services';
import { ToastrService } from 'ngx-toastr';
import { IComment } from '../../interfaces/commentInterface';
import { PostServices } from '../../services/post/post-services';


@Component({
  selector: 'app-post-card',
  standalone: false,
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard implements OnInit {
  showComments: boolean = false;
  newComment: string = '';
  
  @Input() post!: IPost;
  @Input() myPost!: boolean;
  comments: IComment[] = [];

  constructor(
    private commentService: CommentServices,
    private toastr: ToastrService,
    private postServices: PostServices
  ) {}


  ngOnInit() {
    this.getComments();
    
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  addComment() {
    if (this.newComment.trim()) {
      const comment = {
        content: this.newComment
      };
      this.commentService.createComment(comment, this.post._id).subscribe({
        next: () => {
          this.toastr.success('Comment added successfully');
          this.newComment = '';
          this.getComments(); // Refresh to include new comment
        },
        error: (err) => {
          this.toastr.error('Failed to add comment');
          console.error('Error adding comment:', err);
        }
      });
    }
  }

  getComments() {
    this.commentService.getComments(this.post._id).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.post.comments = comments;
      },
      error: (err) => {
        this.toastr.error('Failed to load comments');
        console.error('Error loading comments:', err);
      }
    });
  }

  deletePost() {
    this.postServices.deleteMyPost(this.post._id).subscribe({
      next: () => {
        this.toastr.success('Post deleted successfully');
        window.location.reload();
      },
      error: (err) => {
        this.toastr.error('Failed to delete post');
        console.error('Error deleting post:', err);
      }
    });
  }
}
