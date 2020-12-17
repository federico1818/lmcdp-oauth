import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { OauthService } from '@federico1818/passport'

@Component({
    selector: 'app-password-email-form',
    templateUrl: './password-email-form.component.html',
    styleUrls: ['./password-email-form.component.scss']
})

export class PasswordEmailFormComponent {

    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    })

    constructor(
        protected fb: FormBuilder,
        protected oauthService: OauthService
    ) {}
    
    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    protected send(): void {
        
    }
}
