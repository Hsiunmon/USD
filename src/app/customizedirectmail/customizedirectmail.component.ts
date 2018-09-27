import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare let jQuery: any;
declare let $R: any;

@Component({
    selector: 'app-customizedirectmail',
    styleUrls: ['./customizedirectmail.style.css'],
    templateUrl: './customizedirectmail.template.html'
})

export class CustomizedirectmailComponent {

    public enum = ["color", "text", "textarea", "html", "file"];

    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

    /*
    初始数据 versions 版本下拉框 和 photos 左侧双图
    待提交数据：selectPic,selectForm,selectVersion
    通过判断type 绑定表单，使用jquery延时绑定初始值，点出弹出层获取待提交数据最终值
    */
    public versions = [{
        ver: "11111", form: [
            { "name": "Branding and Colors", "type": "color", "value": null },
            { "name": "Your Logo", "type": "file", "value": '' },
            { "name": "Main Content 2", "type": "html", "value": '<b>very good</b>' },
            { "name": "Main Content 2", "type": "html", "value": '<b>om</b>ya' },
            { "name": "Subject Line", "type": "text", "value": null }
        ]
    }, {
        ver: "22222", form: [
            { "name": "Branding and Colors", "type": "color", "value": null },
            { "name": "Your Logo", "type": "file", "value": '' }
        ]
    }, {
        ver: "33333",  form: [
            { "name": "Branding and Colors", "type": "color", "value": null },
            { "name": "Your Logo", "type": "file", "value": '' },
            { "name": "Header", "type": "textarea", "value": null },
            { "name": "Main Content 2", "type": "html", "value": '<b>how mush</b>' },
            { "name": "Subject Line", "type": "text", "value": null }
        ]
    }];
    public photos = [{ name: "Front", path: "assets/img/customizedirectmail/table.jpg" }, { name: "Back", path: "assets/img/customizedirectmail/table.jpg" }];
    public data = {
        selectPic: 'front',
        selectForm: [],
        selectVersion: '11111'
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





    //弹出层图片切换开始
    public num = 0;
    public proof = 0;
    public start: number = 0;
    public end: number = 1;
    public pics = [];
    public allstyle = [
        { name: 'Front' },
        { name: 'Back' },
        { name: 'Envelope' }
    ];
    public frompics = [
        { name: 'EWS20180910', path: 'assets/img/proof/directmail.png' },
        { name: 'EWS20180911', path: 'assets/img/proof/email.png' },
        { name: 'EWS20180912', path: 'assets/img/proof/purl.png' }
    ];
    public frompicsback = [
        { name: 'back1', path: 'assets/img/proof/directmail.png' },
        { name: 'back2', path: 'assets/img/proof/email.png' },
        { name: 'back3', path: 'assets/img/proof/purl.png' }
    ];
    public frompicsEnv = [
        { name: 'env1', path: 'assets/img/proof/directmail.png' },
        { name: 'env2', path: 'assets/img/proof/email.png' },
        { name: 'env3', path: 'assets/img/proof/purl.png' }
    ];
    prev(): void {
        if (this.start <= 0) return;
        this.start--;
        this.end--;
        if (this.num == 0) {
            this.pics = this.frompics.slice(this.start, this.end);
        } else if (this.num == 1) {
            this.pics = this.frompicsback.slice(this.start, this.end);
        } else if (this.num == 2) {
            this.pics = this.frompicsEnv.slice(this.start, this.end);
        }
        console.log(' this.start', this.start);
        console.log(' this.end', this.end);
    };
    next(): void {
        if (this.end >= this.frompics.length) return;
        this.start++;
        this.end++;
        if (this.num == 0) {
            this.pics = this.frompics.slice(this.start, this.end);
        } else if (this.num == 1) {
            this.pics = this.frompicsback.slice(this.start, this.end);
        } else if (this.num == 2) {
            this.pics = this.frompicsEnv.slice(this.start, this.end);
        }
        console.log(' this.start', this.start);
        console.log(' this.end', this.end);
    };
    //弹出层图片切换结束

    /*弹出层弹出事件*/
    onPop(): void {
        let that = this
        if (that.onCheckForm()) {
            jQuery('#myPop').modal('show')
            that.start = 0
            that.end = 1
            that.saveData(() => { })
        }
    }
    //提交数据
    saveData(cb: Function): void {
        this.data.selectForm.forEach(function (ele, index, arr) {
            if (ele.type == "html") {
                ele.value = jQuery('#htmleditor' + index).html();
            }
        })

        cb()
        //ajax code...
    }

    /*弹出层上排按钮事件*/
    changeIt(i): void {
        this.num = i;
        this.start = 0;
        this.end = 1;
        console.log('success!');
        if (this.num == 0) {
            this.pics = this.frompics.slice(this.start, this.end);
        } else if (this.num == 1) {
            this.pics = this.frompicsback.slice(this.start, this.end);
        } else if (this.num == 2) {
            this.pics = this.frompicsEnv.slice(this.start, this.end);
        }
    }
    /*弹出层Continue按钮事件*/
    onNext(): void {
        let that = this
        jQuery('#myPop').modal('hide').on('hidden.bs.modal', function () {
            let directmailId = 201;
            that.router.navigate(['/app', 'customizeemail', { directmailid: directmailId }]);
        });
    };


    //绑定在线编辑框事件
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
    //检测在线编辑框是否填满事件
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

    //主要执行版本切换表单元素
    ngOnInit(): void {
        const uploadlistreportId = this.routerInfo.snapshot.paramMap.get('id');
        if (uploadlistreportId == "200") {
            this.pics = this.frompics.slice(this.start, this.end);
            this.changeVersion(this.data.selectVersion);
        }
    };

    //移行变色事件：变换步骤横栏背景色
    onMouseover(event: any): void {
        let target = event.target;
        target.style.background = "#ffffff";
    }

    //移行变色事件：还原步骤横栏背景色
    onMouseout(event: any): void {
        let target = event.target;
        target.style.background = "";
    }

    //左侧图点击事件
    onSelectPic(sort: number): void {
        this.data.selectPic = sort == 1 ? "front" : "back"
        jQuery('.frontbackimgs').find("img").css("z-index", 0)
        jQuery('#pic' + sort).css("z-index", sort)
    }
    //表单上传事件
    uploadFile(event: any, item: any): void {
        let oFile = event.target.files[0];
        item.value = oFile
    }

    //Skip this step 2
    goCustomizepurl(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                let directmailId = 201;
                that.router.navigate(['/app', 'customizepurl', { directmailid: directmailId }]);
            })
        }
    }
    //Skip this step 3
    goPayment(): void {
        let that = this
        if (that.onCheckForm()) {
            that.saveData(() => {
                let directmailId = 201;
                that.router.navigate(['/app', 'portalbillingapprove', { directmailid: directmailId }]);
            })
        }
    }


}