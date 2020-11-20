import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        if(this.form.valid)
            console.log(this.form.value)
    }
}
