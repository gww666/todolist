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
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="input title">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="input description">
                    </div>
                    <button class="btn btn-default">Add It</button>
                </div>
            </form>
        </div>
    `,
    data () {
        return {

        }
    },
    methods : {
        closeAdd () {
            this.$emit("closeAdd", false);
        }
    }
}

export default Add;