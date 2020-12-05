import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { confirmed } from 'src/app/shared/validators/confirmed'

import { OauthService } from '@federico1818/passport'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        password_confirmation: ['', [Validators.required, Validators.minLength(4)]]
    }, {
        validator: confirmed('password')
    })

    constructor(
        protected fb: FormBuilder,
        protected oauthService: OauthService
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        if(this.form.valid)
            this.register()
    }
    
    protected register(): void {
        this.oauthService.register(this.form.value).subscribe((res: any) => {
            console.log(res)
        })
    }

}
