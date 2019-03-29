import {Component, OnInit} from '@angular/core';
import {BlogPageComponent} from '../blog-page/blog-page.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openBlog() {
    const blogPage = this.dialog.open(BlogPageComponent, {
      // width: '1000px',
      panelClass: 'custom-modalbox',
      data: {
        dialogTitle: 'sample title',
      }
    });
  }
}
