const {createApp} = Vue

createApp({
    data(){
        return{
            index : 0,
            toDoList : [
                {
                    text : 'Lezione Boolean @09:00',
                    done : true
                    }, {
                        text : 'Call con Azienda',
                        done : false
                    }, {
                        text : 'Portare a spasso il cane',
                        done : true
                    }, {
                        text : 'Fare la spesa',
                        done : false
                    }, {
                        text : 'Prenotare ristorante @Ristorante da Mario',
                        done : true
                    },
            ],
        }
    },

}).mount('#app')