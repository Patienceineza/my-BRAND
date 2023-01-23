/*const todos = (resource =>{
return new Promise((resolve, reject) => {
     
    const http = new XMLHttpRequest();


    http.addEventListener('readystatechange',()=>{
        if(http.readyState === 4  && http.status ===200){
            const data = JSON.parse(http.responseText)
          resolve(data)
        }
    
       else if(http.readyState === 4 ){
         reject('error getting the resource ')
       }
    })
    http.open('GET',resource);
    http.send();
})

})
todos('todos/async.json').then(data=>{
    console.log('promise 1 resolved', data)
    return todos('todos/pacy.json')
}).then(data=>{
    console.log('promise 2 resolved', data)
}).catch(err=>{
    console.log('promise rejected  error',err)
})


/*todos("todos/pacy.json",(err,data)=>{
 console.log(data)
 /*if(err){
    console.log(err)
 }
 else{
    console.log(data)
 }
 todos("todos/async.json",(err,data)=>{
    console.log(data)
 })
}); 

 const getSomething = ()=>{
    return new Promise((resolve, reject) => {
        resolve("well done ")
    })
 }
   

getSomething().then( data=>{
    console.log(data)
}). catch(err=>{
    console.log(err)
})/




fetch('todos/async.json').then((response=>{
    console.log('resol=bed',response)
    return response.json()
})).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("case nor resolved",err)
})*/

const getdata = async()=>{
    const  response  = await fetch('todos/paccy.json')
    if(response.status !== 200 )
{
   throw new Error('could not fetch the data')
}    const data = await response.json();
    return data;
}
getdata()
.then(data=>
    console.log('resolved ',data))
.catch(err=>
    console.log('not reolved:',err.message)
)