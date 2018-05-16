import {Injectable, Directive, Attribute, ElementRef, DynamicComponentLoader} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,RouterOutlet, ComponentInstruction} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';


@Directive({
    selector: 'router-outlet'
})

@Injectable()
export class AuthCheck extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;
    
    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router,
    @Attribute('name')nameAttr:string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);
        
        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            'login': true
        };
    }
    
    activate(instruction: ComponentInstruction) {
        let url = instruction.urlPath;
        
        if(!this.publicRoutes[url] && !localStorage.getItem('AUTH_TOKEN')){
            this.parentRouter.navigateByUrl('/Login');
        }
        
        return super.activate(instruction);
    }    
}