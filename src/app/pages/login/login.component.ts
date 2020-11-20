import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { OauthService } from '@federico1818/passport'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
        this.oauthService.login().subscribe(() => {
            console.log('Login')
        })
    }
}
