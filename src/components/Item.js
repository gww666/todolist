const Item = {
    template : `
        <div class='item-container' :class="{itemclick : this.item_click}" @click="clickItem">
            <div class="item-container-left">
                <p class="item-title">{{title}}</p>
                <p class="item-content">{{des}}</p>
            </div>
            <div class="item-container-right">
                <span class="glyphicon glyphicon-ok done" aria-hidden="true" @click.stop="completeItem"></span>
                <span class="glyphicon glyphicon glyphicon-remove delete" aria-hidden="true" 
                    @click.prevent.stop="deleteItem" id="#delete">
                </span>
            </div>
            <div class="item-container-cover" :style="{display :　done}"></div>
        </div>
    `,
    data () {
        return {
            item_click : false,
            delete_id : this.itemId,
            done : "none"
        }
    },
    methods : {
        clickItem () {
            if (this.done === "none") {
                this.item_click = true;
                setTimeout(() => {
                    this.item_click = false;
                }, 600);
            }
        },
        //删除某个子项
        deleteItem () {
            this.$emit("deleteItem", this.delete_id);
            // $('#delete').popover("show")
        },
        completeItem () {
            this.done = "block";
        }
    },
    props : {
        title : String,
        des : String,
        itemId : Number
    },
    created () {
        console.log();
    }
}
export default Item;