const Title = {
    template : `
        <div>
            <div class='add-title'>
                <h1>to-do list</h1>
                <span class="glyphicon glyphicon-plus" aria-hidden="true"
                    v-on:click="toggleAdd"></span>
            </div>
            
        </div>
    `,
    data () {
        return {
            state : false
        }
    },
    methods : {
        toggleAdd () {
            console.log(111111);
            // this.state = !this.state;
            this.$emit("toggleAdd", true);
        }
    }
}

export default Title;