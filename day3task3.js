var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload = function() {
    var result =JSON.parse(request.response)
    console.log(result)

      for ( let i=0 ;i<result.length;i++) {
        console.log("Name :"+ " "+result[i].name);
        console.log("Region :"+ " " + result[i].region);
        console.log("Sub Region :"+ " "+ result[i].subregion);
        console.log("Population :"+ " "+ result[i].population);


     }
    
    }