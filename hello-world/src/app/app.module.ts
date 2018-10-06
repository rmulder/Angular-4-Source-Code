import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path :'', 
        component: HomeComponent
      },
       {
        path :'followers/:id/:username', 
        component: GithubProfileComponent
      },{
        path :'followers', 
        component: GithubFollowersComponent
      },{
        path :'posts', 
        component: PostsComponent
      },
      {
        path :'**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    PostsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
