var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      total:null,
      datos:[{'marca':'seat','color':'rojo','cantidad':2},{'marca':'renault8','color':'amarillo','cantidad':4},{'marca':'mercedes-300','color':'negro','cantidad':6}],
      coches: {
        marca:'',
        color:'',
        cantidad:0
      },
        
      
    },
    
     mounted: function () {
   
     this.message="coches"
    
     this.reverseMessage();
    
      
       
    },
     computed:{
       totalcoches: function(){
         this.total=0;
          for(totalcantidad of this.datos){
            this.total=this.total+totalcantidad.cantidad
          }
          return this.total
        }
     },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      
      agregar:function() {
        this.datos.push({marca: this.coches.marca,color:this.coches.color,cantidad:this.coches.cantidad})
      },
    
     
    }
  })
  