module.exports = {
	
 aritGeo: function (arr) {

    if (arr.length === 0) {

      return 0;

    } else {

      var arithmetic = true;

      var diff = arr[1] - arr[0];

      var geometric = true;

      var ratio = arr[1] / arr[0];

      for (var i = 1; i < arr.length; i++) {

        if ((arr[i] - arr[i - 1]) !== diff) {

          arithmetic = false;

        }

        if ((arr[i] / arr[i - 1]) !== ratio) {

          geometric = false;

        }

      }

      if (arithmetic === true) {

        return 'Arithmetic';

      }

      if (geometric === true) {

        return 'Geometric';

      }

      return -1;

    } 

  },
  

fizzBuzz: function(i){
        
if(i % 3 === 0 && i % 5 === 0){
        
console.log("FizzBuzz");

return  "FizzBuzz";   
}
 else if(i % 5 === 0){
        
console.log("Buzz");
return  "Buzz";
   
}
  else if (i % 3 === 0){
            
console.log("Fizz");
   
return  "Fizz"; 
}
  else{
 
return  i;
}
    
},

findMinMax: function(args)
{

var swapped;
do {
        
	swapped = false;
        
	for (var i=0; i < args.length-1; i++) {

            if (args[i] < args[i+1]) {
   
             var temp = args[i];
  
             args[i] = args[i+1];
 
             args[i+1] = temp;
    
	     swapped = true;
 
           }
        
	}
   
 } while (swapped);



	var max = args[0];

	var min = args[args.length - 1];

	
if(max === min){
	
	return [max];	

	}else{
		return [min,max]
	
}

}

}