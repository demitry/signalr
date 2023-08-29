
// create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

// connect to methods that hub invokes aka receive notifications from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

//invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
    // NewWindowLoaded - method we want to invoke on the serverside
    // TODO: Difference between send and invoke
}

//start connection
function fulfilled() {
    //do something on start
    console.log("Connection to User Hub Successful");
}
function rejected() {
    //rejected logs
    console.log("Connection to User Hub rejected");
}

connectionUserCount.start().then(fulfilled, rejected);

//fulfilled - connection estableshed successfully
//rejected - what should happened when it fails