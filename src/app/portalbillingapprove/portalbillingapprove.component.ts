import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portalbillingapprove',
    styleUrls: ['./portalbillingapprove.style.css'],
    templateUrl: './portalbillingapprove.template.html'
})
export class PortalbillingapproveComponent {
  show = 0;
  public lists = [{ name: 'Campaign EWS20180910 ', dateCreated: '01/01/2018',  dateSend: '01/01/2018',},
    { name: 'Campaign EWS20180911 ', dateCreated: '01/01/2018',  dateSend: '01/01/2018',  },
    { name: 'Campaign EWS20180912 ', dateCreated: '04/02/2018',  dateSend: '04/02/2018',  },
    { name: 'Campaign EWS20180913 ', dateCreated: '04/21/2018',  dateSend: '04/21/2018',  },
    { name: 'Campaign EWS20180914 ', dateCreated: '09/01/2018',  dateSend: '09/01/2018',  },
    { name: 'Campaign EWS20180915 ', dateCreated: '09/11/2018',  dateSend: '09/11/2018',  }
  ];

    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

    onSelect(val,i): void {
        if(this.show == i){
            this.show = -1;
            return;
        }
        this.show =  i;
    }

    onPayment(): void {
        let that = this
        that.router.navigate(['/app', 'portalbillingcc']);
    }

}
