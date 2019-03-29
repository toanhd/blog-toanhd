import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BlogPageComponent>,
  ) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
