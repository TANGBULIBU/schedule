import {defineStore} from "pinia";

const mystore = defineStore("schedulestore", {
    state: () => {
        return {
            scheduleList: [
                // {sid: 1, userid: 1, content: "学习java", completed: true},
                // {sid: 2, userid: 1, content: "学习html", completed: false}
            ]
        }
    }
    ,
    getters: {},
    actions: {}
});

//导出
export  default  mystore