import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogPageComponent} from './blog-page/blog-page.component';

@NgModule({
  declarations: [BlogListComponent, BlogPageComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  entryComponents: [
    BlogPageComponent
  ]
})
export class BlogModule {
}
