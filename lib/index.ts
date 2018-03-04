import { Observable, Subject } from 'rxjs/Rx';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';

export function debounce(asyncValidator: AsyncValidatorFn,
    time: number = 1000): (c: AbstractControl) => Observable<any> {
      const subject: Subject<AbstractControl> = new Subject();
  
      const obs: Observable<any> = subject
        .debounceTime(time)
        .switchMap(abstractControl => asyncValidator(abstractControl))
        .share();
  
      obs.subscribe();
  
      return (c: AbstractControl) => {
        subject.next(c);
        return obs.first();
      };
}
