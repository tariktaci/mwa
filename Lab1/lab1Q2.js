
let prom= function(){
    return fetch( 'https://randomuser.me/api/')
    .then(response=>response.json())
    .then((name)=>console.log(name))
}




function promi(){

    try{
      return  prom
    }
catch(error){
    console.error();
}
}

 async function asyn(){
    
        try{
            let resualt =await prom;
            console.log(resualt);
        }
      catch(error){
          console.error();
      }
    }


function obs(){

form(prom).pipe(map((obj)=>({mes:'${obj.name} + ${obj.location}'})))
.subscribe((obj)=>console.log(obj.mes));
}
window.onload=function(){
    document.getElementById(pro).onclick=promi;
    document.getElementById(asy).onclick=asyn;
    document.getElementById(rec).onclick=obs;
}