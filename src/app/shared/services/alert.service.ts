import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core'
import { Subscription } from 'rxjs'
import { AlertComponent } from '../components/alert/alert.component'

@Injectable({
    providedIn: 'root'
})

export class AlertService {
    protected componentRef: ComponentRef<AlertComponent> | null = null
    protected subscriptionAfterClosed: Subscription | null = null

    constructor(
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected applicationRef: ApplicationRef,
        private injector: Injector
    ) {}

    public open(message: string): void {
        this.close()
        this.componentRef = this.appendComponentToBody()
        this.componentRef.instance.message = message
        this.subscriptionAfterClosed = this.componentRef.instance.afterClosed.subscribe((value) => {
            this.close()
            this.subscriptionAfterClosed?.unsubscribe()
        }) 
    }

    public close(): void {
        this.removeComponentFromBody()
    }

    private appendComponentToBody(): ComponentRef<AlertComponent> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
        const componentRef = componentFactory.create(this.injector)
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
        this.applicationRef.attachView(componentRef.hostView)
        document.body.appendChild(domElem)
        return componentRef
    }

    private removeComponentFromBody(): void {
        if(!this.componentRef) return
        this.applicationRef.detachView(this.componentRef.hostView)
        this.componentRef.destroy()
    }
}
