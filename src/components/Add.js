import bus from "./bus";
const Add = {
    template : `
        <div class="add-container">
            <div class="add-container-title">
                <span>New to-do-item</span>
                <span class="glyphicon glyphicon-remove"
                    @click="closeAdd"></span>
            </div>
            <form class="add-container-form">
                <div style="width : 100%;">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="input title" v-model="title">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="input description" v-model="des">
                    </div>
                    <input type="button" class="btn btn-default" value="Add It" @click="addItem">
                </div>
            </form>
        </div>
    `,
    data () {
        return {
            title : "",
            des : "",
            itemId : 0
        }
    },
    methods : {
        closeAdd () {
            this.$emit("closeAdd", false);
        },
        addItem () {
            console.log(this);
            this.itemId += 1;
            let obj = {
                title :　this.title,
                des :　this.des,
                itemId : this.itemId
            }
            bus.$emit("mclick", obj);
            this.$emit("closeAdd");
        }
    }
}

export default Add;