var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      total:null,
      datos:[{'marca':'seat','color':'rojo','edad':2},{'marca':'renault8','color':'amarillo','edad':4},{'marca':'mercedes-300','color':'negro','edad':6}],
      coches: {
        marca:'',
        color:'',
        edad:0
      },
        
      
    },
    
     mounted: function () {
   
     this.message="coches"
    
     this.reverseMessage();
    
      
       
    },
     computed:{
       totalcoches: function(){
         this.total=0;
          for(cantidad of this.datos){
            this.total=this.total+cantidad.edad
          }
          return this.total
        }
     },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      
      agregar:function() {
        this.datos.push({marca: this.coches.marca,color:this.coches.color,edad:this.coches.edad})
      },
    
     
    }
  })
  