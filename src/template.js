function populateEngineer(data) {
    for (i = 0; i < data.engineer[i]; i++) {
        var engName = data[i].engineerName;
        var engID = data[i].engineerID;
        var engEmail = data[i].engineerEmail;
        var engUsername = data[i].engineerUsername;

        var engCard = document.createElement("div");
        var engHeader = document.createElement("h2");
        var engIDEl = document.createElement("p");
        var engEmailEl = document.createElement("p");
        var engUsernameEl = document.createElement("p");

        engCard.setAttribute("class", "info");
        engHeader.setAttribute("class","card-title");
        engIDEl.setAttribute("class", "card-text");
        engEmailEl.setAttribute("class", "card-text");
        engUsernameEl.setAttribute("class", "card-text");

        engHeader.innerHTML = "Engineer " + `${engName}`;
        engIDEl.innerHTML = "Office ID " + `${engID}`;
        engEmailEl.innerHTML = "Email " + `${engEmail}`;
        engUsernameEl.innerHTML = "Github Username " + `${engUsername}`;
    }
}

function populateIntern (){
    console.log("intern info")
}

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
    </head>
    <body>
        <h1>My Team</h1>
        <div id="manager">
            <h2>Manager ${data.managerName}</h2>
            <div id="info">
            <p>Employee ID: ${data.managerID}</p>
            <p>Email: ${data.managerEmail}</p>
            <p>Office number: ${data.officeNumber}</p>
        </div>
        </div>    
        <div id="engineers">
            ${populateEngineer()}
        </div>
        <div id="interns">
            ${populateIntern()}
        </div>
    </body>
    </html>`
}