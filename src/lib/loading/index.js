import LoadingView from "./index.vue"
import Vue from "vue"
class JSLoading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        // console.log(LoadingFn) 
        this.loadingVm = new LoadingFn({
            el:document.createElement("div"),//重新创建一个el管辖范围
        })
    }
    loadingMount(){//挂载
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    destroyLoading(){//卸载
        // document.body.removeChild(this.loadingVm.$mount().$el)
        this.loadingVm.$el.remove();
    }
}

export default new JSLoading();



/*
Vue.extend()实现继承,是vue的子类，可以new,可以实例化 重新规定一个挂载点
*/