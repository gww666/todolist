import Item from "./Item";
import bus from "./bus";
const List = {
    template : `
        <div class="list-container" @click="">
            <template v-for="(item, index) in todolist">
                <item :itemId="item.itemId" :title="item.title" :des="item.des" @deleteItem="handleDeleteItem"></item>
            </template>
        </div>
    `,
    components : {
        "item" : Item
    },
    data () {
        return {
            todolist : [{itemId : 123, "title" : "这是一个示例", des : "这是要做的事项描述"}]
        }
    },
    methods : {
        updateList (todoObj) {
            console.log(this);
            // this.todolist.push(todoObj);
            // console.log(todoObj);
            console.log("updateList");
        },
        handleDeleteItem (id) {
            console.log(id)
            // for (let item of this.todolist) {
            //     if (item.id === id) {

            //     }
            // }
            for (let i = 0; i < this.todolist.length; i++) {
                // console.log(this.todolist[i].itemId);
                if (this.todolist[i].itemId === id) {
                    console.log("id相同")
                    this.todolist.splice(i, 1);
                    break;
                }
            }
        }
    },
    created () {
        bus.$on("mclick", todoObj => {
            // console.log(todoObj);
            // console.log(List);
            console.log(this);
            this.todolist.push(todoObj);
            // List.$emit("updateList", todoObj);
            // List.methods.updateList(todoObj);
        });
    }
}
export default List;