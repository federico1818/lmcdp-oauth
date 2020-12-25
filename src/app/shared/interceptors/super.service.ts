import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { AlertService } from 'src/app/shared/services/alert.service'
import { MessageService } from 'src/app/shared/services/message.service'

@Injectable()
export class SuperService implements HttpInterceptor {
    
    constructor(
        protected alertService: AlertService,
        protected messageService: MessageService
    ) {}
    
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.clone({
            headers: req.headers.set('Accept', 'application/json')
        })
        
        this.messageService.open('Se están enviando los datos...')
        
        return next.handle(headers).pipe(
            tap(event => {
                if(event instanceof HttpResponse) {
                    console.log(event)
                }
            }, err => {
                let message = err.error.message
                if(err.status == 0) {
                    message = 'No es posible conectarse al servidor en estos momentos.'
                }
                if(err.status == 422) {
                    message = err.error.errors[Object.keys(err.error.errors)[0]][0]
                }
                this.messageService.close()
                this.alertService.open(message)
            }, () => {
                console.log('Complete')
                this.messageService.close()
            })
        )
        //return next.handle(headers);
    }

}
