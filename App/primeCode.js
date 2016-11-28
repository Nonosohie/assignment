module.exports = {
	
getPrimes: function(n) {
	

  if(n < 2) 
       return false;
    for (var i = 2; i < n; i++) {
        if(n % i === 0)
            return false;
    }
    
for(var i = 0; i < 2; i++){
    if(getPrimes(i)) 
    console.log(i);
     else if (i % 2===0) 
     console.log(2);
}
}    
}