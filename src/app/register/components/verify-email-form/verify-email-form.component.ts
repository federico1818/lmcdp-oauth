import { Component, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'
import { FormComponent } from '@federico1818/utils'

@Component({
    selector: 'app-verify-email-form',
    templateUrl: './verify-email-form.component.html',
    styleUrls: ['./verify-email-form.component.scss']
})

export class VerifyEmailFormComponent extends FormComponent implements OnInit {
    
    public form = this.fb.group({
        id: ['', [Validators.required]],
        hash: ['', [Validators.required]],
    })

    ngOnInit(): void {
        super.ngOnInit()
        this.send()
    }

}
