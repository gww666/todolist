import Item from "./Item";
const List = {
    template : `
        <div class="list-container">
            <item></item>
        </div>
    `,
    components : {
        "item" : Item
    },
    data () {
        return {

        }
    }
}
export default List;