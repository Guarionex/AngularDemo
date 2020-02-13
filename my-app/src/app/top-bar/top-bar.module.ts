import {NgModule} from '@angular/core';
import {TopBarComponent} from './top-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [TopBarComponent],
  declarations: [TopBarComponent],
  providers: [],
})
export class TopBarModule { }
