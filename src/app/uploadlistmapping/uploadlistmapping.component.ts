import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare let jQuery: any;

@Component({
    selector: 'app-uploadlistmapping',
    styleUrls: ['./uploadlistmapping.style.css'],
    templateUrl: './uploadlistmapping.template.html'
})

export class UploadlistmappingComponent {
    public firstname = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public Lastname = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public Make = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public Madel = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public address = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public city = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public state = [{ name: 'Tom', id: 11 },
    { name: 'Jerry ', id: 22 },
    { name: 'Stone ', id: 33 }
    ];
    public C = {
        firstname: '', lastname: '', make: '', model: '', address: '', city: '', state: ''
    };
    constructor(private router: Router, private routerInfo: ActivatedRoute) { }
    ngOnInit(): void {
        const uploadId = this.routerInfo.snapshot.paramMap.get('id');
        console.log('uploadId', uploadId);
    }

    public chooseFile = 'Choose File to Upload';
    public uploadfrm = {
        select: '',
        name: '',
        remark: '',
        file: null
    };

    onExport(): void {
        console.log('Export Data');
    };

    onNext(): void {
        setTimeout(() => {
            let uploadlistmappingId = 1000;
            this.router.navigate(['/app', 'uploadlistreport', { id: uploadlistmappingId }]);
        }, 2000);
    };

    getOptions(value): void {

        console.log(value);

    }

    getOptions2(value): void {
        console.log(value);
    };

}
