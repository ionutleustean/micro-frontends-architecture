import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HrefComponent} from './href/href.component';
import {IframeComponent} from './iframe/iframe.component';
import {WebcomponentsComponent} from './webcomponents/webcomponents.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'href',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'href',
  //   component: HrefComponent,
  // },
  // {
  //   path: 'iframe',
  //   component: IframeComponent,
  // },
  // {
  //   path: 'webcomponent',
  //   component: WebcomponentsComponent,
  //
  // },
  // {
  //   path: '**',
  //   redirectTo: 'webcomponent'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
