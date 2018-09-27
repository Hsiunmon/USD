import { Component } from '@angular/core';

declare let jQuery: any;
declare let $R: any;


@Component({
    selector: 'app-proof',
    styleUrls: ['./proof.style.css'],
    templateUrl: './proof.template.html'
})
export class ProofComponent {

    //第一组
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
    //第一组结束


    //第二组
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
    // 第二组结束

    // 第三组
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

    // 第 三组结束
    // 连续打开按钮控制
    onNext(): void {
        jQuery('#myModal').modal('hide').on('hidden.bs.modal', function () {
            jQuery('#myModal2').modal('show').modal('hide').on('hidden.bs.modal', function () {
                this.start = 0;
                this.end = 1;
            })
        })
    };

    onNext2(): void {
        jQuery('#myModal2').modal('hide').on('hidden.bs.modal', function () {
            jQuery('#myModal3').modal('show').modal('hide').on('hidden.bs.modal', function () {
                this.start = 0;
                this.end = 1;
            })
        })
    };


    // 单点控制
    onModal2(): void {
        jQuery('#myModal2').modal('show');
        this.start = 0;
        this.end = 1;
    };
    onModal3(): void {
        jQuery('#myModal3').modal('show');
        this.start = 0;
        this.end = 1;
    }
    ngOnInit(): void {
        this.pics = this.frompics.slice(this.start, this.end);
        this.pics2 = this.frompics2.slice(this.start2, this.end2);
        this.pics3 = this.frompics3.slice(this.start3, this.end3);

        $R('[name="content68"]', { focus: true });

    };
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
}
