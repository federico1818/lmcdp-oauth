import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Response, UiService } from '@federico1818/passport'

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.component.html',
    styleUrls: ['./verify-email.component.scss']
})

export class VerifyEmailComponent implements OnInit {
    public sent: boolean = false
    public message: string | null = null
    public params: any

    constructor(
        protected route: ActivatedRoute,
        protected uiService: UiService
    ) {}

    ngOnInit(): void {
        this.readParamsFromActivatedRoute()
    }

    private readParamsFromActivatedRoute(): void {
        this.params = {
            id: this.route.snapshot.paramMap.get('id'),
            hash: this.route.snapshot.paramMap.get('hash')
        }
    }

    public onSubmit(form: any): void {
        this.uiService.verifyEmail(form).subscribe((res: Response) => {
            this.sent = true
            this.message = res.message
        })
    }
}
