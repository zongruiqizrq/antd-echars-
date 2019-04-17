import {observable, action} from 'mobx';
import {  observer } from 'mobx-react'


class counterStore {
@observable num = 1;

@action add(){
    this.num ++;
}

@action minus(){
    this.num --;
}
}

export default observer(new counterStore());
