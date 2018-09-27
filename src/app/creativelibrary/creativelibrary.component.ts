import { Component } from '@angular/core';
import { Router } from '@angular/router'; //导入router服务

declare let jQuery: any;

@Component({
    selector: 'app-creativelibrary',
    styleUrls: ['./creativelibrary.style.css'],
    templateUrl: './creativelibrary.template.html'
})

export class CreativelibraryComponent {

    public creativelibrarys = [
        { name: 'Mortgage 1', path: 'assets/img/ews/usd-lm-pic-1.png' },
        { name: 'Mortgage 2', path: 'assets/img/ews/usd-lm-pic-2.png' },
        { name: 'Mortgage 3', path: 'assets/img/ews/usd-lm-pic-3.png' },
        { name: 'Mortgage 4', path: 'assets/img/ews/usd-lm-pic-4.png' },
        { name: 'Mortgage 5', path: 'assets/img/ews/usd-lm-pic-5.png' },
    ];

    public opts = [{ name: '111111' }, { name: '222222' }, { name: '333333' }];

    constructor(private router: Router) { }

    public chooseFile = "Choose File to Upload";
    public uploadfrm = {
        select: "",
        name: "",
        remark: "",
        file:null
    };


    uploadFile(event: any): void {
        var oFile = event.target.files[0];
        console.log(oFile);//打印值看下面图片,简单点的话我们直接把这个数据给后台处理就可以了
        this.uploadfrm.file = oFile;
        if (this.uploadfrm.file != null) {
            this.chooseFile = this.uploadfrm.file.name;
        }
    }
    ngOnInit(): void {
    }

    onBack(): void {
    }

    onNext(): void {
        if (this.uploadfrm.select == "") {
            alert('Please select the drop-down box. ');
            return;
        }
        if (this.uploadfrm.name == "") {
            alert('Please input your name. ');
            return;
        }
        if (this.uploadfrm.select != "") {
            console.log(this.uploadfrm);
            let _this = this;
            setTimeout(() => {
                jQuery('#myModal').modal('hide').on('hidden.bs.modal', function () {
                    jQuery('#myModal2').modal('show').modal('hide').on('hidden.bs.modal', function () {
                        _this.router.navigate(['/app'], { fragment: 'dashboard' });
                    })
                })
            }, 2000);
        } else {
            alert('Upload failure');
        }
    }

}