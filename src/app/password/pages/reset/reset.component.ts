import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UiService } from '@federico1818/passport'

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss']
})

export class ResetComponent implements OnInit {
    public sent: boolean = false
    public params: any

    constructor(
        protected route: ActivatedRoute,
        protected uiService: UiService
    ) {}

    public ngOnInit(): void {
        this.readParamsFromActivatedRoute()
    }
    
    public onSubmit(form: any): void {
        this.uiService.resetPassword(form).subscribe(res => {
            console.log(res)
        })
    }
    
    private readParamsFromActivatedRoute(): void {
        this.params = {
            token: this.route.snapshot.paramMap.get('token'),
            email: this.route.snapshot.paramMap.get('email')
        }
    }

}
