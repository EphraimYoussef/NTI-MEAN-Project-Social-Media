import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { ReactiveFormsModule } from '@angular/forms';
import { AddNewPost } from './components/add-new-post/add-new-post';
import { PostCard } from './components/post-card/post-card';
import { Comment } from './components/comment/comment';
import { AllPosts } from './components/all-posts/all-posts';
import { MyPosts } from './components/my-posts/my-posts';


@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    MainLayout,
    AuthLayout,
    Login,
    SignUp,
    AddNewPost,
    PostCard,
    Comment,
    AllPosts,
    MyPosts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
