// TODO: add code here

window.addEventListener("load",function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            
            //creating an array of the json object so that the astronauts can be sorted by hours in space
            let astronautArray=Object.entries(json);
            //for loop using the bubble method to sort by hours in space
            for(j=0;j<json.length;j++){
                for(k=0;k<json.length-j-1;k++){
                    if(astronautArray[k][1].hoursInSpace>astronautArray[k+1][1].hoursInSpace){
                        let temp=astronautArray[k+1];
                        astronautArray[k+1]=astronautArray[k];
                        astronautArray[k]=temp;
                    }

                }

            }

            for(let i=0;i<astronautArray.length;i++){
                container.innerHTML+=`
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronautArray[i][1].firstName} ${astronautArray[i][1].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronautArray[i][1].hoursInSpace}</li>`+

                            `${astronautArray[i][1].active===true? `<li class="greenText">Active: ${astronautArray[i][1].active}</li>` : `<li>Active: ${astronautArray[i][1].active}</li>`}`+
                            `<li>Skills: ${astronautArray[i][1].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronautArray[i][1].picture}">
                </div>
                `
            };

            document.getElementById("astronautCount").innerHTML+= astronautArray.length
            



            /*
            for(let i=0;i<json.length;i++){
                container.innerHTML+=`
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `
            };
            */



            
        });
    });
});