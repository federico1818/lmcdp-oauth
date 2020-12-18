import { Component, Output, EventEmitter } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'app-password-email-form',
    templateUrl: './password-email-form.component.html',
    styleUrls: ['./password-email-form.component.scss']
})

export class PasswordEmailFormComponent {
    @Output() submitted: EventEmitter<any> = new EventEmitter<any>()
    
    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    })

    constructor(
        protected fb: FormBuilder
    ) {}
    
    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    protected send(): void {
        this.submitted.emit(this.form.value)
    }
}
