const {createApp} = Vue

createApp({
    data(){
        return{

            newElement : "",
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
                    },{
                        text : 'Partita Tennis @21:00',
                        done : false
                    },
                        ],
                 }
            },
            methods: {
                removeToDo : function(element){
                    const index = this.toDoList.indexOf(element)
                    if(index > -1) {
                        this.toDoList.splice(index, 1)
                    }
                    
                },
                addToDo: function(element){
                    if (element != "" && element.length >= 2){
                        this.toDoList.push({text : element})
                        this.clearInput();
                    }
                    
                },

                clearInput : function(){
                    this.newElement = "";
                },
            
        }
        
    

}).mount('#app')