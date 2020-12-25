import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core'
import { Observable, Subject, Subscription } from 'rxjs'

import { MessageComponent } from 'src/app/shared/components/message/message.component'

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    protected componentRef: ComponentRef<MessageComponent> | null = null
    protected subscriptionAfterClosed: Subscription | null = null
    private readonly _isLoading: Subject<boolean> = new Subject<boolean>()
    public isLoading: Observable<boolean> = this._isLoading.asObservable()

    constructor(
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected applicationRef: ApplicationRef,
        private injector: Injector
    ) {}

    public open(message: string): void {
        this.close()
        this.componentRef = this.appendComponentToBody()
        this.componentRef.instance.message = message
        this._isLoading.next(true)
    }

    public close(): void {
        this.removeComponentFromBody()
        this._isLoading.next(false)
    }

    private appendComponentToBody(): ComponentRef<MessageComponent> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent)
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
