import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

@Injectable()
export class SuperService implements HttpInterceptor {
    
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.clone({
            headers: req.headers.set('Accept', 'application/json')
        })
        return next.handle(req).pipe(
            tap(event => {
                if(event instanceof HttpResponse) {
                    console.log(event)
                }
            }, error => {
                console.log(error)
            })
        )
        //return next.handle(headers);
    }

}
