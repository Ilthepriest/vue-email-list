const app = new Vue({
    el: '#app',
    data: {
        email: null,
        listaEmail: []
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    // console.log(this);
                    this.email = response.data
                    this.listaEmail.push(this.email)
                    console.log(this.listaEmail);
                })
        }
    }
})
