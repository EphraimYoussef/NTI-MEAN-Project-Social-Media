import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-post',
  standalone: false,
  templateUrl: './add-new-post.html',
  styleUrl: './add-new-post.css'
})
export class AddNewPost {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      imgUrl: ['']
    });
  }
  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Submitted!', this.postForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
