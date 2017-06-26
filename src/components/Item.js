const Item = {
    template : `
        <div class='item-container'>
            <div class="item-container-left">
                <p class="item-title">{{title}}</p>
                <p class="item-content">{{des}}</p>
            </div>
            <div class="item-container-right">
                <span class="glyphicon glyphicon-ok done" aria-hidden="true"></span>
                <span class="glyphicon glyphicon glyphicon-remove delete" aria-hidden="true"></span>
            </div>
        </div>
    `,
    data () {
        return {
            title : "这是标题部分",
            des : "这是描述部分"
        }
    }
}
export default Item;