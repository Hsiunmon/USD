import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portalbillingapprove',
    styleUrls: ['./portalbillingcc.style.css'],
    templateUrl: './portalbillingcc.template.html'
})
export class PortalbillingccComponent {

    constructor(private router: Router, private routerInfo: ActivatedRoute) { }

  show = 0;
  public C = {firstname: '', lastname: '', Address1: '', Address2: '', City: '', state: '',
    zipcode: '',creditcard: '', expiration: '', securitycode: ''
  };
  public state = [{ name: 'CN', id: 11 },
    { name: 'EU', id: 22 },
    { name: 'JP ', id: 33 }
  ];
  onSelect(val,i): void {
    if(this.show == i){
       this.show = -1;
       return;
    }
    this.show =  i;
  };
  getOptions(value): void {
    console.log(value);
  };
  onNext(): void {
    // this.C.ForEach(function(ele){
    //   if(ele == ''){
    //     alert('please shu ru it!')
    //     return;
    //   }
    //   console.log(this.C);
    // })
    var _this =this
    // 判断空值的方法
    function judge(NumOrString){
      var flag=new Boolean();
      flag=true;
      for(var key in NumOrString){
        if(NumOrString[key])
        {
        }else{
          flag=false;
        }
      }
      if(!flag){
        alert("Please enter something!");
      }else{
          console.log(_this.C)
          _this.router.navigate(['/app', 'portalbillingsummary']);
        return  true;
      }
    }
    judge(this.C);

  }

}
