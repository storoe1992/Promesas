const asyncFunction = async  () => {
    try{
        let url = 'https://jsonplaceholder.typicode.com/photos';
        let response = await fetch(url);
        let data = await response.json();
        data.forEach(el => {
            if(el.id <= 20){
                console.log(el.title);
            }
        })
    }catch(e){

    }
}

const waitFunction = () => new Promise((resolve,reject) =>{
    setTimeout(()=> {
        resolve("Información enviada");
    },3000);
});

const asyncFunctionAwaitReceiver = async (waitFunction) => {
    let valueWaitFunction = await waitFunction();
    console.log(valueWaitFunction);
}


asyncFunctionAwaitReceiver(waitFunction);
asyncFunction();