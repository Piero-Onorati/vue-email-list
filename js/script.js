const app = new Vue(
    {
        el: '#app',
        data:{
            mailList:[],
            violet: 'violet',
            darkViolet: 'dark-violet',
        },

        mounted: function(){

            for (let index = 0; index < 10; index++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result =>{
                    // console.log(result.data.response);
                    this.mailList.push(result.data.response);
                    }
                );
            }
        }
    }
);