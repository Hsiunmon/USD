import { Component } from '@angular/core';

@Component({
    selector: 'app-createnewcampaign',
    styleUrls: ['./createnewcampaign.style.css'],
    templateUrl: './createnewcampaign.template.html'
})

export class CreatenewcampaignComponent {
  num = 0;
  show2 = -1;
  selectlibrarys2 = [];
  selectlibrarys3 = [];
  public creativelibrarys = [
    {name: 'Mortgage 1', path: 'assets/img/ews/usd-lm-pic-1.png', Pid: 0},
    {name: 'Mortgage 2', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    {name: 'Mortgage 3', path: 'assets/img/ews/usd-lm-pic-3.png', Pid: 2},
    {name: 'Mortgage 4', path: 'assets/img/ews/usd-lm-pic-4.png', Pid: 3},
    {name: 'Mortgage 5', path: 'assets/img/ews/usd-lm-pic-5.png', Pid: 4},
    {name: 'Mortgage 6', path: 'assets/img/ews/usd-lm-pic-4.png', Pid: 5}
  ];
  public creativelibrarys2 = [
    {name: 'Mortgage one', path: 'assets/img/ews/usd-lm-pic-1.png', Pid: 0},
    {name: 'Mortgage one', path: 'assets/img/ews/usd-lm-pic-1.png', Pid: 0},
    {name: 'Mortgage 2', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    {name: 'Mortgage 2', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    {name: 'Mortgage 2', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    {name: 'Mortgage 3', path: 'assets/img/ews/usd-lm-pic-3.png', Pid: 2},
    {name: 'Mortgage 4', path: 'assets/img/ews/usd-lm-pic-4.png', Pid: 3},
    {name: 'Mortgage 5', path: 'assets/img/ews/usd-lm-pic-5.png', Pid: 4},
    {name: 'Mortgage 6', path: 'assets/img/ews/usd-lm-pic-4.png', Pid: 5}
  ];
  public creativelibrarys3 = [
    { id: 1,name: 'ver.1.0', path: 'assets/img/ews/usd-lm-pic-1.png', Pid: 0},
    { id: 2,name: 'ver.1.2', path: 'assets/img/ews/usd-lm-pic-1.png', Pid: 0},
    { id: 3,name: 'ver.1.0', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    { id: 4,name: 'ver.1.5', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    { id: 5,name: 'ver.2.0', path: 'assets/img/ews/usd-lm-pic-2.png', Pid: 1},
    { id: 6,name: 'ver.1.0', path: 'assets/img/ews/usd-lm-pic-3.png', Pid: 2},
    { id: 7,name: 'ver.1.0', path: 'assets/img/ews/usd-lm-pic-4.png', Pid: 3},
    { id: 8,name: 'ver.1.0', path: 'assets/img/ews/usd-lm-pic-5.png', Pid: 4},
    { id: 9,name: 'ver.1.0', path: 'assets/img/ews/usd-lm-pic-4.png', Pid: 5}
  ];

  onSelect(val, i): void {
    this.num ++;
    var array = [];
    this.creativelibrarys2.forEach(function (ele) {
      if (ele.Pid == i) {
        array.push(ele);
      }
    })
    this.selectlibrarys2 = array;
  };
  onSelect2(val, Pid): void {
    this.num ++;
    var array2 = [];
    this.creativelibrarys3.forEach(function (ele) {
      if (ele.Pid == Pid) {
        array2.push(ele);
      }
    })
    this.selectlibrarys3 = array2;
  };
  back(): void {
    this.num --;
  };
  otherSideShow(i): void {
    this.show2 = i;
  };
  close(): void {
    this.show2 = -1;
  };
}
