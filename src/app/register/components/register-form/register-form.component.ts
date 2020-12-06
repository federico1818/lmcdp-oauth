import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { OauthService } from '@federico1818/passport'
import { confirmed } from 'src/app/shared/validators/confirmed'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {

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
