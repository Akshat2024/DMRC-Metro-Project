/*let sourcestn, sval, destn, dval;
sourcestn = document.querySelectorAll('.input-wrap');
     Array.from(sourcestn).forEach((source)=>{
        source.addEventListener('click', (e)=>{
         sval=e.target.innerHTML;
        })
     });
     destn = document.querySelectorAll('.input-wrap');
     Array.from(sourcestn).forEach((source)=>{
        source.addEventListener('click', (e)=>{
         dval=e.target.innerHTML;
        })
     });
     let p = fetch(https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=Dwarka&to=Palam)
     p.then((value1)=>return value1.json()
   }).then((value2)=>console.log(value2)
})
     async function search(){
        let results = await axios.get(`https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=Dwarka&to=Palam`)
        console.log(results);
      
      fetch('https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=Dwarka&to=Palam')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});}*/

/*let sourcestn, sval, destn, dval;
sourcestn = document.querySelectorAll('.input-wrap');
     Array.from(sourcestn).forEach((source)=>{
        source.addEventListener('click', (e)=>{
         sval=e.target.innerHTML;
        })
     });
     destn = document.querySelectorAll('.input-wrap');
     Array.from(sourcestn).forEach((source)=>{
        source.addEventListener('click', (e)=>{
         dval=e.target.innerHTML;
        })
     });*/
   // $(document).ready(function(){
//var x, y, q,r;

/*(function test() {
    x = document.getElementById("from_station");
    y = x.options[x.selectedIndex].text;
   //console.log(y);
}());
(function test1() {
    q = document.getElementById("to_station");
     r = q.options[q.selectedIndex].text;
   //console.log(r);
}());
console.log(y);
console.log(r);
});*/




let x,y,q,r;
// First function which takes its data from option list in index.html using onchange function(line 36 in index.html)
const test = (callback) =>
{
 x = document.getElementById("from_station");
 y = x.options[x.selectedIndex].text;
 //console.log(y);
 callback(y);
}

// Second function which takes its data from option list in index.html using onchange function(line 309 in index.html)
const test1 = (callback) =>
{
 q = document.getElementById("to_station");
 r = q.options[q.selectedIndex].text;
 //console.log(r);
callback(r);
}


const station = (y,r) =>
{
let p = fetch(`https://cors-anywhere.herokuapp.com/https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=${y}&to=${r}`)
p.then((value1) =>{
   return value1.json()
}).then((value2) =>{
   console.log(value2)
})
}

//Call the first function and pass in the second function as the callback
test(function(y){
   //Call the second function and pass in the station function as the callback
   test1(function(r){
      // Call the station function and pass in the input variables (y and r)
      station(y,r);
   });
});


