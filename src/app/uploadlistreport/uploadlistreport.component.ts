import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-uploadlistreport',
    styleUrls: ['./uploadlistreport.style.css'],
    templateUrl: './uploadlistreport.template.html'
})
export class UploadlistreportComponent {
    public myReport = [
        { name: 'Initial Count', count: '1,200,300' },
        { name: 'Duplicate Count', count: '300' },
        { name: 'CASS/NCOA (Hygiene)', count: '1,000,000' },
        { name: 'Initial Count', count: '1,200,300' },
        { name: 'Final Count', count: '1,100,000' },
        { name: 'Final Count', count: '1,100,000' },
        { name: 'Final Count', count: '1,100,000' },
    ];

    trackByFn(): void {
    };
    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

    ngOnInit(): void {
        const uploadlistmappingId = this.routerInfo.snapshot.paramMap.get('id');
        console.log('uploadlistmappingId', uploadlistmappingId);
    }
    onNext(): void {
        let uploadlistreportId = 200;
        this.router.navigate(['/app', 'customizedirectmail', { id: uploadlistreportId }]);
    }

    onExport(): void {
        alert('Export Data');
    }
}