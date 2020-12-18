import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { UiService } from '@federico1818/passport'
import { AlertService } from 'src/app/shared/services/alert.service'

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
        protected uiService: UiService,
        protected alertService: AlertService
    ) {}
    
    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    protected send(): void {
        this.uiService.sendResetLinkEmail(this.form.value, '/api/password/email').subscribe((res) => {
            this.alertService.open(res.message).subscribe(() => {
                this.form.reset()
            })
        })
    }
}
