import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare let jQuery: any;
declare let $R: any;

@Component({
    selector: 'app-customizepurl',
    styleUrls: ['./customizepurl.style.css'],
    templateUrl: './customizepurl.template.html'
})

export class CustomizepurlComponent {

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
    public versionsByTempletId = []
    public photos = [{ name: "unknown", path: "assets/img/customizepurl/purl.jpg" }];
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
    /*�����㵯���¼�*/
    onPop(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                jQuery('#myPop').modal('show')
                that.start3 = 0
                that.end3 = 1
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

    // ������
    public proof3 = 0;
    public start3: number = 0;
    public end3: number = 1;
    public pics3 = [];
    public frompics3 = [
        { name: 'EWS20180912', path: 'assets/img/proof/purl.png' },
        { name: 'EWS20180910', path: 'assets/img/proof/directmail.png' },
        { name: 'EWS20180912', path: 'assets/img/proof/email.png' }
    ];
    prev3(): void {
        if (this.start3 <= 0) return;
        this.start3--;
        this.end3--;
        this.pics3 = this.frompics3.slice(this.start3, this.end3);
        console.log(' this.start', this.start3);
        console.log(' this.end', this.end3);
    };
    next3(): void {
        if (this.end3 >= this.frompics3.length) return;
        this.start3++;
        this.end3++;
        this.pics3 = this.frompics3.slice(this.start3, this.end3);
        console.log(' this.start', this.start3);
        console.log(' this.end', this.end3);
    };
    // �� �������

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

    onNext(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                jQuery('#myPop').modal('hide').on('hidden.bs.modal', function () {
                    let purlId = 203;
                    that.router.navigate(['/app', 'portalbillingapprove', { purlid: purlId }]);
                });
            })
        }
    };

    ngOnInit(): void {
        let emailId = this.routerInfo.snapshot.paramMap.get('emailid');
        let directmailId = this.routerInfo.snapshot.paramMap.get('directmailid');
        if (directmailId == "201" || emailId == "202") {
            this.pics3 = this.frompics3.slice(this.start3, this.end3)
        }
    };

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
}