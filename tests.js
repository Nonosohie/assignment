// testing code goes here

'use strict'

var chai = require('chai');
var math = require('mathjs');
var assert = chai.assert;

var expect = chai.expect;

var myApp = require('../app/library.js');


describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    assert(myApp.computeAverage(1,2,3) == 2);
  })
  it("should return 20 as average for 15, 25, 20", function() {
   assert(myApp.computeAverage(15,25,20) == 20);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    assert(myApp.computeAverage(3, 7, 5) == 5);
  })
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) == 120);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    assert(myApp.convertTempCtoF(40) == 104);
  })
 
  it("should return 140 for Celcius value 60", function() {
    assert(myApp.convertTempCtoF(60) == 140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    assert(myApp.convertTempFtoC(140) == 60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    assert(myApp.convertTempFtoC(104) == 40);
  })


})

var fizzBuzz = function(i){
        
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
        
console.log(i);
 
return  i;
}

    
}

describe("Fizz Buzz tests ", function() {



 
  it("should return `Fizz` for number divisible by 3", function() {

  
   expect(fizzBuzz(3)).to.equal('Fizz');

 });
 



 it("should return `Buzz` for number divisible by 5", function() {

  
   expect(fizzBuzz(5)).to.equal('Buzz');

 });



 
  it("should return `FizzBuzz` for 15", function() {

   
   expect(fizzBuzz(15)).to.equal('FizzBuzz');

 });



 
  it("should return `FizzBuzz` for 45", function() {

   
   expect(fizzBuzz(45)).to.equal('FizzBuzz');

 });



 
  it("should return `FizzBuzz` for 90", function() {

   
   expect(fizzBuzz(90)).to.equal('FizzBuzz');

 });



 
  it("should return `Fizz` for 63", function() {

   
   expect(fizzBuzz(63)).to.equal('Fizz');

 });



 
  it("should return 7 since its indivisible by 3 and 5", function() {

  
    expect(fizzBuzz(7)).to.equal(7);

 });



 
  it("should return 101 since its indivisible by 3 and 5", function() {

   
   expect(fizzBuzz(101)).to.equal(101);


  });
})

var findMinMax = function(args){

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



describe('Min-Max Numbers in a List: ', function () {



   
describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {



     
it('should return [1,4] for [1, 2, 3 , 4]', function () {

       
expect(findMinMax([1, 2, 3, 4])).to.eql([1,4]);

     });



     
it('should return [4, 6] for [6, 4]', function () {

       
expect(findMinMax([6, 4])).to.eql([4, 6]);

     });



     
it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {

       
expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.eql([2, 78]);

    
 });



   
});



   

describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {



     
it('should return [4] for [4, 4, 4, 4]', function () {

       
expect(findMinMax([4, 4, 4, 4])).to.eql([4]);

     
});



   
});



 
});


var aritGeo = function(args){
  var arith = false;
  var geo = false; if(args.length === 0)return 0;
  
  for(var i=0; i <args.length - 1; i++){
    var intvl ;
    if(!intvl){
        intvl  = args[i+1] - args[i];
    }else{
      if(intvl === args[i+1] - args[i]){
          arith = true;
      }else{
        arith = false;
        break;
      }
    }
  }
   
  for(var j=0; j <args.length - 1; j++){
    var intl ;
    if(!intl){
        intl  = args[j+1]/args[j];
    }else{
      if(intl === args[j+1]/args[j]){
          geo = true;
      }else{
        geo = false;
        break;
      }
    }
      
  }
  
  if(arith){
    return "Arithmetic";
  }else if(geo){
    return "Geometric";
  }else {
    return -1;
  }
}

  describe("Determine the sequence of an array of numbers: ", function() {



  
describe("Case for an empty array", function() {



     it("should return 0 for an empty array", function() {

       expect(aritGeo([])).to.eql(0);

     });



   });



   describe("Case for an arithmetic sequence", function() {



     it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {

       expect(aritGeo([2, 4, 6, 8, 10])).to.eql('Arithmetic');

     });



     it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {

       expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).to.eql('Arithmetic');

     });



     it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {

       expect(aritGeo([15, 10, 5, 0, -5, -10])).to.eql('Arithmetic');

     });



   });



   describe("Case for a geometric sequence", function() {



     it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {

       expect(aritGeo([2, 6, 18, 54, 162])).to.eql('Geometric');

     });



     it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {

       expect(aritGeo([0.5, 3.5, 24.5, 171.5])).to.eql('Geometric');

     });



     it("should return `Geometric` for [-128, 64, -32, 16, -8]", function() {

       expect(aritGeo([-128, 64, -32, 16, -8])).to.eql('Geometric');

     });



   });



   describe("Case for neither arithmetic nor geometric sequence", function() {



     it("should return -1 for [1, 2, 3, 5, 8]", function() {

       expect(aritGeo([1, 2, 3, 5, 8])).to.eql(-1);

     });



     it("should return -1 for [1, 3, 6, 10, 15]", function() {

       expect(aritGeo([1, 3, 6, 10, 15])).to.eql(-1);

     });



     it("should return -1 for [1, 8, 27, 64, 125]", function() {

       expect(aritGeo([1, 8, 27, 64, 125])).to.eql(-1);

     });

     

   });

 });