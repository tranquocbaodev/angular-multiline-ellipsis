import { NgModule } from '@angular/core';
import { MultilineEllipsisDirective } from './multiline-ellipsis.directive';


@NgModule({
  declarations: [MultilineEllipsisDirective],
  exports: [MultilineEllipsisDirective]
})
export class EllipsisModule { }
