import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'

import { OauthService } from '@federico1818/passport'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

    public invalid_grant: boolean = false 

    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    constructor(
        protected fb: FormBuilder,
        protected oauthService: OauthService
    ) {}

    public onSubmit(): void {
        if(this.form.valid)
            this.login()
    }

    public login(): void {
        this.oauthService.login(this.form.value).pipe(
            catchError(this.handleError.bind(this))
        ).subscribe((res: any) => {
            this.invalid_grant = false
        })
    }

    private handleError(error: HttpErrorResponse) {
        if(error.error['error'] == 'invalid_grant')
            this.invalid_grant = true
        return throwError(error.error)
    }

}
