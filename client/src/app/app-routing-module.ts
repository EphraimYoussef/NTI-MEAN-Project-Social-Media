import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { AddNewPost } from './components/add-new-post/add-new-post';
import { PostCard } from './components/post-card/post-card';
import { AllPosts } from './components/all-posts/all-posts';
import { MyPosts } from './components/my-posts/my-posts';

const routes: Routes = [
  {
    path:"",
    component: MainLayout,
    children: [
      { path: "newpost" , component: AddNewPost},
      { path: "post" , component: PostCard},
      { path: "" , component: AllPosts},
      { path: "allposts" , component: AllPosts},
      { path: "myposts" , component: MyPosts},
    ]
  },
  {
    path:"",
    component: AuthLayout,
    children:[
      { path: "login" , component: Login} ,
      { path: "signup" , component: SignUp}
    ]
  },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
