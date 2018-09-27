import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
    styleUrls: ['./campaign.style.css'],
    templateUrl: './campaign.template.html'
})
export class CampaignComponent {
  show = 0;
  public lists = [{ name: 'Campaign EWS20180910 ', dateCreated: '01/01/2018',  dateSend: '01/01/2018',},
    { name: 'Campaign EWS20180911 ', dateCreated: '01/01/2018',  dateSend: '01/01/2018',  },
    { name: 'Campaign EWS20180912 ', dateCreated: '04/02/2018',  dateSend: '04/02/2018',  },
    { name: 'Campaign EWS20180913 ', dateCreated: '04/21/2018',  dateSend: '04/21/2018',  },
    { name: 'Campaign EWS20180914 ', dateCreated: '09/01/2018',  dateSend: '09/01/2018',  },
    { name: 'Campaign EWS20180915 ', dateCreated: '09/11/2018',  dateSend: '09/11/2018',  }
  ];

  onSelect(val,i): void {
    if(this.show == i){
       this.show = -1;
       return;
    }
    this.show =  i;
  }



}
