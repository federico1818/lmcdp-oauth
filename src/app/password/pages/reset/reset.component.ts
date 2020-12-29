import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss']
})

export class ResetComponent implements OnInit {
    public sent: boolean = false

    constructor(
        protected route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('token'))
    }

    public onSubmit(form: any): void {
        console.log(form)
    }

}
