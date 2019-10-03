

Array.prototype.removeNum= async function(x){
   
    try
    { 
        
   await function (x){
        let result= [];
        for(var element in this){
            if(element!=x){
                result.push(element);
            }
        }
        console.log(result);
        
    }

        
} catch(error)
    {
  console.error('error');
    }
}
let myArry=new Array();
myArry.push(1);
myArry.push(2);
myArry.push(3);
myArry.push(4);
myArry.removeNum(1);