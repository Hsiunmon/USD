import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-portalbillingsummary',
    styleUrls: ['./portalbillingsummary.style.css'],
    templateUrl: './portalbillingsummary.template.html'
})
export class PortalbillingsummaryComponent {

    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

    data = {
        PaymentConfirmation: '1037201132',
        AmountCharged: '$69.99',
        PaymentDate: new Date,
        PaymentSource: "Credit Card",
        Name: 'Jon Doe',
        'Email': 'contact@jondoe.com'
    }

    onNext(): void {
        let _this = this
        _this.router.navigate(['/app', 'dashboard']);

    }

}
