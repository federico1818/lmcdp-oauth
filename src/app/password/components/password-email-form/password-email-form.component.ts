import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { FormComponent } from '@federico1818/utils'

@Component({
    selector: 'app-password-email-form',
    templateUrl: './password-email-form.component.html',
    styleUrls: ['./password-email-form.component.scss']
})

export class PasswordEmailFormComponent extends FormComponent {
    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    })
}
