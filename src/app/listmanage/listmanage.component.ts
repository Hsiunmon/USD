import { Component } from '@angular/core';

@Component({
    selector: 'app-listmanage',
    styleUrls: ['./listmanage.style.css'],
    templateUrl: './listmanage.template.html'
})
export class ListmanageComponent {

    public lists = [{ name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,900' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,800' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,700' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,800' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,600' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,700' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,030' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '1,000,200' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '2,020,700' },
        { name: 'Data ', date: '01/01/18 - 5:45 PM PST', industry: ' Auto Warranty ', count: '3,000,000' },
    ];

}
