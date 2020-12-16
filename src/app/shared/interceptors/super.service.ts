import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { AlertService } from '../services/alert.service'

@Injectable()
export class SuperService implements HttpInterceptor {
    
    constructor(
        protected alertService: AlertService
    ) {}
    
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* const headers = req.clone({
            headers: req.headers.set('Accept', 'application/json')
        }) */
        return next.handle(req).pipe(
            tap(event => {
                if(event instanceof HttpResponse) {
                    console.log(event)
                }
            }, error => {
                this.alertService.open(error.error.message)
            })
        )
        //return next.handle(headers);
    }

}
