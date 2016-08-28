
      var cart=[];
      var Items =function(name,price,count){
        this.name = name;
        this.price = price;
        this.count = count;

      };

      
      function addItemToCart(name,price,count){
	        var item= new Items(name,price,count);
	        cart.push(item);
	       
         }
  
      function displayItemsinCart(){
    	 
    	  var cartnames=" ";
    	  for(var i =0;i<cart.length;i++){
    	  		// alert(cart[i].name);
    	  		cartnames+= cart[i].name;  
    	  	     cartnames+=' ';
    	  	   cartnames+= cart[i].price;
    	  	     cartnames+=' ';
    	  	   cartnames+= cart[i].count;
  	  	     cartnames+=' ';
    	  
    	      } 
    	  
    	  	  document.getElementById("view").innerHTML=cartnames;
    	  	document.getElementById("numberofitems").innerHTML=totalCount();
    	  	
    	  	document.getElementById("totalprice").innerHTML=totalCost();
      }
     
      
      function totalCount(){
    	  return cart.length;
        
      }
      
      document.getElementById("numberofitems").innerHTML=totalCount();
      //console.log(totalCount());
      function totalCost(){
    	  var totalCost=0;
    	  for(var i =0;i<cart.length;i++){
    		  
    		  totalCost=totalCost+(cart[i].price*cart[i].count);
    	  }
    	  return totalCost;
    	  
      }
      document.getElementById("totalprice").innerHTML=totalCost();
      //console.log(totalCost());