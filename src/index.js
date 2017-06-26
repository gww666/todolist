import Title from "./components/Title.js"; 
import List from "./components/List";
import Add from "./components/Add";
// import Text from "components/Text.js"; 

// Text();
let App = {
    template : `
        <div class="app-container">
            <title-com @toggleAdd="getAddState"></title-com>
            <list></list>
            <div class="control-add-container" :class="{addshow : this.addanimation.addshow, addhide : this.addanimation.addhide}">
                <add @closeAdd="getAddState"></add>
            </div>
            <div class="app-cover" :class="{appcovershow : this.coverShow.appcovershow, appcoverhide : this.coverShow.appcoverhide}"></div>
        </div>
    `,
    components : {
        "title-com" : Title,
        "list" : List,
        "add" : Add
    },
    data () {
        return {
            "addanimation" : {
                "addshow" : false,
                "addhide" : false
            },
            coverShow : {
                "appcovershow" : false,
                "appcoverhide" : false
            }
        }
    },
    methods : {
        getAddState (state) {
            this.coverShow.appcovershow = state;
            this.coverShow.appcoverhide = !state;
            this.addanimation.addshow = state;
            this.addanimation.addhide = !state;
            console.log(state);
        }
    }
}
const app = new Vue({
    el : "#box",
    components : {
        "app" : App
    }
});