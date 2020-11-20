import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'

import { OauthService, Credentials } from '@federico1818/passport'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public invalid_grant: boolean = false 

    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    constructor(
        protected fb: FormBuilder,
        protected oauthService: OauthService
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        if(this.form.valid)
            this.login()
    }

    public login(): void {
        this.oauthService.login(
            new Credentials(
                this.form.value.email,
                this.form.value.password
            )
        ).pipe(
            catchError((error: HttpErrorResponse) => {
                if(error.error['error'] == 'invalid_grant')
                    this.invalid_grant = true
                return throwError(error.error)
            })
        ).subscribe(res => {
            this.invalid_grant = false
        })
    }
}
