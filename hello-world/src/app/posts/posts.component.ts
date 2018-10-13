import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts : any[];

  
  constructor(private service : PostsService) { 
    
  }

  ngOnInit(){
      this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input : HTMLInputElement){
    let post = { title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(posts => {
      post['id'] = posts.id;
      console.log(posts);
    }, 
      (error: AppError) => {
        this.posts.splice(0,1);

        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.originalError);
          alert("Couldn't connect to the server");
          console.log(error);
        } else {
          throw error;
        }
    });
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(posts => {
        console.log(posts);
    });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.id)
    .subscribe(posts => {
            console.log(posts);
      }, 
      (error: AppError) => {
            this.posts.splice(index, 0, post);
            if(error instanceof NotFoundError) {
              alert('Ths post has already been deleted');
              console.log(error);
            }
            else {
              throw error;
            }
    }) 
  }
}
