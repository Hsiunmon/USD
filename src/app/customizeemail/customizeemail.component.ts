import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare let jQuery: any;
declare let $R: any;

@Component({
    selector: 'app-customizeemail',
    styleUrls: ['./customizeemail.style.css'],
    templateUrl: './customizeemail.template.html'
})

export class CustomizeemailComponent {

    public enum = ["color", "text", "textarea", "html", "file"];

    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

    /*
    ��ʼ����templets ģ�������� versions �汾������ �� photos ���ͼ
    ���ύ���ݣ�selectPic,selectForm,selectVersion
    ͨ���ж�type �󶨱���ʹ��jquery��ʱ�󶨳�ʼֵ������������ȡ���ύ��������ֵ
    */
    public templets = [{ templetId: 1, templetName: 'templet1' }, { templetId: 2, templetName: 'templet2' }];
    public versions = [{
        templetId: 1,
        ver: "1.0", form: [
            { "name": "Branding and Colors 1.0", "type": "color", "value": null }
        ]
    }, {
        templetId: 1,
        ver: "2.0", form: [{ "name": "Your Logo 2.0", "type": "file", "value": '' }
        ]
    }, {
        templetId: 2,
        ver: "3.0", form: [
            { "name": "Subject Line 3.0", "type": "text", "value": null },
            { "name": "Subject Info 3.1", "type": "html", "value": null }
        ]
    }, {
        templetId: 2,
        ver: "4.0", form: [
            { "name": "Branding and Colors 4.0", "type": "color", "value": null },
            { "name": "Branding and Colors 4.2", "type": "color", "value": null },
        ]
    }
    ];
    public versionsByTempletId=[]
    public photos = [{ name: "unknown", path: "assets/img/customizeemail/email.jpg" }];
    public data = {
        selectPic: 'front',
        selectForm: [],
        selectTempletId: 2,
        selectVersion: '3.0',
    };
    changeVersion(val: any): void {
        if (val != "" && val != null && val != 0) {
            let selectVersionOption = this.versions.filter((ele) => {
                return ele.ver == val;
            })
            if (selectVersionOption.length > 0)
                this.data.selectForm = selectVersionOption[0].form;

            this.onBindForm();
        }
    }
    changeTemplet(val: any): void {
        let that = this
        if (val != "" && val != null && val != 0) {
            let selectTempletOption = that.templets.filter((ele) => {
                return ele.templetId == val;
            })
            if (selectTempletOption.length > 0) {
                that.versionsByTempletId = that.versions.filter((ele) => {
                    return ele.templetId == selectTempletOption[0].templetId;
                })
            }
        }
    }

    //������ͼƬ�л���ʼ
    public proof2 = 0;
    public start2: number = 0;
    public end2: number = 1;
    public pics2 = [];
    public frompics2 = [
        { name: 'EWS20180911', path: 'assets/img/proof/email.png' },
        { name: 'EWS20180910', path: 'assets/img/proof/directmail.png' },
        { name: 'EWS20180912', path: 'assets/img/proof/purl.png' }
    ];
    prev2(): void {
        if (this.start2 <= 0) return;
        this.start2--;
        this.end2--;
        this.pics2 = this.frompics2.slice(this.start2, this.end2);
        console.log(' this.start', this.start2);
        console.log(' this.end', this.end2);
    };
    next2(): void {
        if (this.end2 >= this.frompics2.length) return;
        this.start2++;
        this.end2++;
        this.pics2 = this.frompics2.slice(this.start2, this.end2);
        console.log(' this.start', this.start2);
        console.log(' this.end', this.end2);
    };
    //������ͼƬ�л�����

    /*�����㵯���¼�*/
    onPop(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                jQuery('#myPop').modal('show')
                that.start2 = 0
                that.end2 = 1
            })
        }
    }
    //�ύ����
    saveData(cb: Function): void {
        this.data.selectForm.forEach(function (ele, index, arr) {
            if (ele.type == "html") {
                ele.value = jQuery('#htmleditor' + index).html();
            }
        })
        cb()
        //ajax code...
    }

    ngOnInit(): void {
        let directmailId = this.routerInfo.snapshot.paramMap.get('directmailid');
        if (directmailId == "201") {
            this.pics2 = this.frompics2.slice(this.start2, this.end2);
           // this.changeVersion(this.data.selectVersion);
        }
    };
    /*������Continue��ť�¼�*/
    onNext(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                jQuery('#myPop').modal('hide').on('hidden.bs.modal', function () {
                    let emailId = 202;
                    let directmailId = that.routerInfo.snapshot.paramMap.get('directmailid');
                    that.router.navigate(['/app', 'customizepurl', { emailid: emailId, directmailid: directmailId }]);
                })
            })
        }
    }

    //�����߱༭���¼�
    onBindForm(): void {
        setTimeout(() => {
            this.data.selectForm.forEach(function (ele, index, arr) {
                if (ele.type == "html") {
                    jQuery('#htmleditor' + index).html(ele.value);
                }
            });
            $R('.htmleditor', { focus: true });
        }, 1000);
    }
    //������߱༭���Ƿ������¼�
    onCheckForm(): boolean {
        let chkState = true
        if (this.data.selectForm.length == 0) {
            alert('form not entered. ');
            chkState = false
        }
        else {
            let blankItem = this.data.selectForm.filter((ele) => {
                return ele.value == "" || ele.value == null;
            })
            if (blankItem.length > 0) {
                alert('form is not filled. ');
                chkState = false
            }
        }
        return chkState
    }

    //���б�ɫ�¼����任�����������ɫ
    onMouseover(event: any): void {
        let target = event.target;
        target.style.background = "#ffffff";
    }

    //���б�ɫ�¼�����ԭ�����������ɫ
    onMouseout(event: any): void {
        let target = event.target;
        target.style.background = "";
    }

    //���ͼ����¼�
    onSelectPic(sort: number): void {
        this.data.selectPic = sort == 1 ? "front" : "back"
        jQuery('.frontbackimgs').find("img").css("z-index", 0)
        jQuery('#pic' + sort).css("z-index", sort)
    }
    //���ϴ��¼�
    uploadFile(event: any, item: any): void {
        let oFile = event.target.files[0];
        item.value = oFile
    }

    //Skip this step 3
    goPayment(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                let directmailId = 201;
                that.router.navigate(['/app', 'portalbillingapprove', { directmailId: directmailId }]);
            })
        }
    }

}