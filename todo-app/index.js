var app = new Vue({
    el: "#app",
    data: {
        todoList: [
            "cook", "clean", "Code", "Add todo"
        ],
        message: '',
        empty: false,
    },
    methods: {
        add() {
            if (this.message != '') {
                this.todoList.push(this.message);
                this.message = ''
            }
        },
        remove(index) {
            this.todoList.splice(index, 1);
        },

/*         ifEmpty() {
            if (this.todoList.length == 0) {
                empty = true;
                return true;
            } else {
                empty = false;
                return false;
            }
        }, */
    },
})

