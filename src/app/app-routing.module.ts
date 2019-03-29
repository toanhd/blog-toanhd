import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {BlogModule} from './blog/blog.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    // component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => BlogModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
