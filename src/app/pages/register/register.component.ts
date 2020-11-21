import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { confirmed } from 'src/app/shared/validators/confirmed'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password_confirmation: ['', [Validators.required, Validators.minLength(8)]]
    }, {
        validator: confirmed('password')
    })

    constructor(
        protected fb: FormBuilder
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        if(this.form.valid)
            this.register()
    }
    
    protected register(): void {
        console.log(this.form)   
    }

}
