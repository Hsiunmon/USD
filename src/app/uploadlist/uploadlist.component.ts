import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare let jQuery: any;

@Component({
    selector: 'app-uploadlist',
    styleUrls: ['./uploadlist.style.css'],
    templateUrl: './uploadlist.template.html'
})

export class UploadlistComponent {

  public creativelibrarys = [
    { name: 'Mortgage 1', path: 'assets/img/ews/usd-lm-pic-1.png' },
    { name: 'Mortgage 2', path: 'assets/img/ews/usd-lm-pic-2.png' },
    { name: 'Mortgage 3', path: 'assets/img/ews/usd-lm-pic-3.png' },
    { name: 'Mortgage 4', path: 'assets/img/ews/usd-lm-pic-4.png' },
    { name: 'Mortgage 5', path: 'assets/img/ews/usd-lm-pic-5.png' },
  ];


    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

    public chooseFile = "Choose File to Upload";
    public uploadfrm = {
    select: "",
    name: "",
    remark: "",
    file:null
    };


  uploadFile(event: any): void {
    var oFile = event.target.files[0];
    this.uploadfrm.file = oFile;
    if (this.uploadfrm.file != null) {
        this.chooseFile = this.uploadfrm.file.name;
    }
  }

    ngOnInit(): void {
        const campaignId = this.routerInfo.snapshot.paramMap.get('id');
        console.log('campaignId', this.routerInfo.snapshot.paramMap);
  }

  onBack(): void {
  }

  onNext(): void {
      console.log(this.uploadfrm);
      let _this = this;
      if(this.uploadfrm.file == null){
        alert('Please choose File.');
        return;
      };
      let uploadId = 100;
      this.router.navigate(['/app', 'uploadlistmapping', { id: uploadId }]);
  }
}
