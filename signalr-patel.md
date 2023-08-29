# SignalR - The Complete Guide (with real world examples) - Bhrugen Patel

<!-- TOC -->

- [SignalR - The Complete Guide with real world examples - Bhrugen Patel](#signalr---the-complete-guide-with-real-world-examples---bhrugen-patel)
    - [Section 1: Introduction](#section-1-introduction)
        - [Welcome [1]](#welcome-1)
        - [Demo [2]](#demo-2)
        - [Topics Covered [3]](#topics-covered-3)
        - [Project Resources [4]](#project-resources-4)
        - [Typical HTTP Scenario [5]](#typical-http-scenario-5)
        - [Hubs in SignalR [6]](#hubs-in-signalr-6)
        - [Typical Flow [7]](#typical-flow-7)
        - [Create Project [8]](#create-project-8)
    - [Section 2: SignalR in Action](#section-2-signalr-in-action)
        - [Create Hub [9]](#create-hub-9)
        - [Create Hub Method [10]](#create-hub-method-10)
        - [Add Client Side Library for SignalR [11]](#add-client-side-library-for-signalr-11)
        - [Modify Home View [12]](#modify-home-view-12)
        - [Configure SignalR Client Js [13]](#configure-signalr-client-js-13)
        - [SignalR In Action [14]](#signalr-in-action-14)
        - [SignalR Hub Methods [15]](#signalr-hub-methods-15)
        - [SignalR Flow Overview [16]](#signalr-flow-overview-16)
        - [Transport Types [17]](#transport-types-17)
        - [SignalR Connections [18]](#signalr-connections-18)
    - [Section 3: SignalR - More Projects](#section-3-signalr---more-projects)
        - [Send vs Invoke [19]](#send-vs-invoke-19)
        - [Transport Type and Logging in SingalR [20]](#transport-type-and-logging-in-singalr-20)
        - [Deathly Hallow Race Setup [21]](#deathly-hallow-race-setup-21)
        - [Deathly hallow [22]](#deathly-hallow-22)
        - [Method to Update Race Count Spans [23]](#method-to-update-race-count-spans-23)
        - [Race in Action and Assignment 1 [24]](#race-in-action-and-assignment-1-24)
        - [Assignment 1 Solution [25]](#assignment-1-solution-25)
    - [Section 4: Groups in SignalR](#section-4-groups-in-signalr)
        - [Groups Overview [26]](#groups-overview-26)
        - [What we will cover [27]](#what-we-will-cover-27)
        - [Setup Harry Potter House UI [28]](#setup-harry-potter-house-ui-28)
        - [Setup House Hub [29]](#setup-house-hub-29)
        - [Subscribe and Unsubscribe Button Listeners [30]](#subscribe-and-unsubscribe-button-listeners-30)
        - [Subscribe Group in Action [31]](#subscribe-group-in-action-31)
        - [Fix Subscription Bug [32]](#fix-subscription-bug-32)
        - [Assignment 2 [33]](#assignment-2-33)
        - [Subscribe Unsubscribe in Action [34]](#subscribe-unsubscribe-in-action-34)
        - [Trigger Notifications [35]](#trigger-notifications-35)
    - [Section 5: SignalR - Notification Project](#section-5-signalr---notification-project)
        - [Assignment 3 Overview [36]](#assignment-3-overview-36)
        - [Assignment 3 Solution - Notification Hub [37]](#assignment-3-solution---notification-hub-37)
        - [Assignment 3 Solution - Notification Client Setup [38]](#assignment-3-solution---notification-client-setup-38)
        - [Assignment 3 Solution - Notification In Action [39]](#assignment-3-solution---notification-in-action-39)
        - [Assignment 3 Solution - Notification Load Messages [40]](#assignment-3-solution---notification-load-messages-40)
    - [Section 6: SignalR - Basic Chat](#section-6-signalr---basic-chat)
        - [Seperating out Views [41]](#seperating-out-views-41)
        - [Setup of Basic Chat Application UI [42]](#setup-of-basic-chat-application-ui-42)
        - [Send Public Message [43]](#send-public-message-43)
        - [Send Private Message [44]](#send-private-message-44)
        - [Authorization in SignalR [45]](#authorization-in-signalr-45)
        - [Seperating out Chat [46]](#seperating-out-chat-46)
    - [Section 7: SignalR - Order Update Project](#section-7-signalr---order-update-project)
        - [Project Setup [47]](#project-setup-47)
        - [Order Datatable Updated [48]](#order-datatable-updated-48)
    - [Section 8: SignalR Azure Service](#section-8-signalr-azure-service)
        - [Create Azure SignalR Service [49]](#create-azure-signalr-service-49)
        - [Azure SignalR Overview [50]](#azure-signalr-overview-50)
        - [azure signalr in action [51]](#azure-signalr-in-action-51)
        - [SignalR Client Events [52]](#signalr-client-events-52)
    - [Section 9: SignalR - Advanced Chat](#section-9-signalr---advanced-chat)
        - [Rename and move basic chat [53]](#rename-and-move-basic-chat-53)
        - [API Endpoints for Chat Application [54]](#api-endpoints-for-chat-application-54)
        - [Setup UI for Chat Application [55]](#setup-ui-for-chat-application-55)
        - [Setup Chat Action Method [56]](#setup-chat-action-method-56)
        - [HubConnection Helper [57]](#hubconnection-helper-57)
        - [Notify User is online [58]](#notify-user-is-online-58)
        - [User Connection Error [59]](#user-connection-error-59)
        - [Disconnection Connection [60]](#disconnection-connection-60)
        - [Add Chat Room [61]](#add-chat-room-61)
        - [Create Chat Room [62]](#create-chat-room-62)
        - [Delete Chat Room [63]](#delete-chat-room-63)
        - [Send Public Message [64]](#send-public-message-64)
        - [Send Private Message [65]](#send-private-message-65)
        - [Advanced Chat [66]](#advanced-chat-66)

<!-- /TOC -->

## Section 1: Introduction
### Welcome [1]

- Product is not available?
- Chat App
- SignalR - Open Source, open protocol
- Part of .NET framework
- Fast, scalable, Azure
- Real-time Web without refreshing the browser
- 2 parts: Client Side and Server side (hub)

### Demo [2]
### Topics Covered [3]
### Project Resources [4]
### Typical HTTP Scenario [5]
### Hubs in SignalR [6]
### Typical Flow [7]

1. Create SignalR hub
2. Add methods for Hub
3. Add Client side SignalR
4. Connect to SignalR Hub from Client JS
5. Call SignalR Hub method
6. SignalR invokes methid in client JS to notify clients
7. Clients receives update from SignalR hub and perform action

### Create Project [8]

- Asp.NET Core MVC
- Authentication type: Individual Account
- => Integration .NET/EFCore with the user identity

## Section 2: SignalR in Action

### Create Hub [9]

Hub - sends and receives messages to/from clients

Hubs folder

```cs
using Microsoft.AspNetCore.SignalR;

namespace SignalRSample.Hubs
{
    public class UserHub : Hub
    {
    }
}
```

Program.cs

```cs
builder.Services.AddSignalR();
...
app.MapHub<UserHub>("/hubs/userCount");
```

### Create Hub Method [10]

```cs
    //Server side
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;

        //Every time page loads/reloads
        public async Task NewWindowLoaded()
        {
            TotalViews++;
            // Tell all the clients, the view is updated
            // send update to all clients that total views have been updated

            await Clients.All.SendAsync("updateTotalViews", TotalViews); // can pass a lot of params
        }
    }
```

### Add Client Side Library for SignalR [11]

1. Solution -> Add -> Client Side Library
  - Provider: unpkg
  - Library: @microsoft/signalr@latest
  - Target location: wwwroot/lib/microsoft/signalr/
2. Install
3. Move signalr.js to js folder

### Modify Home View [12]

```html
@* Client Side *@
<div class="container">
    <div class="row">
        <div class="col-3">Total Views: </div>
        <div class="col-4">
            <span id="totalViewsCounter"></span>
        </div>
    </div>
</div>

<script src="~/js/signalr.js"></script>
```

### Configure SignalR Client Js [13]

Connect to a Hub from client side
- create connection
- connect to methods that hub invokes aka receive notifications from hub
- invoke hub methods aka send notification to hub
- start connection

```js
// create connection
//"/hubs/userCount" - route provided in Program.cs
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

// connect to methods that hub invokes aka receive notifications from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

// invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded"); // Invoke Hub method
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

```

### SignalR In Action [14]

Chrome log
```
[2023-08-29T11:01:24.616Z] Information: Normalizing '/hubs/userCount' to 'https://localhost:7008/hubs/userCount'.
Utils.ts:191 [2023-08-29T11:01:24.748Z] Information: WebSocket connected to wss://localhost:7008/hubs/userCount?id=ukRDMeb1setZhvZtuzWe2g.
usersCount.js:21 Connection to User Hub Successful
```

Wow, it is updates on each instance of Chrome

### SignalR Hub Methods [15]

Total number of connected windows?

```cs
    //Server side
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;
        
        public static int TotalUsers { get; set; } = 0;

        public override Task OnConnectedAsync()
        {
            TotalUsers++;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            TotalUsers--;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();

            return base.OnDisconnectedAsync(exception);
        }
```

On the client side all the same:

```js
connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
})
```

### SignalR Flow Overview [16]

SignalR Basic Flow.pdf

### Transport Types [17]

SignalR works at a top of these protocols:
- Web Sockets
- SSE (Server Sent Events)
- Long Polling

Traditional HTTP
- Server cannot send response without the request from client side
- It take some time to send a response after a request
- After the response is sent from the server, that connection is dropped. It is no longer active, so that connection cannot be used again to send any more data.
- That is the critical piece when it comes to HTTP.
- Only client can initiate a request.
- Server cannot initiate a response without a request.

To solve the issue with a response without any existing connection, we have different protocols:
- **Web Sockets**
  - the connection is not a one big connection. two way connection and it stays open.
  - But what if web sockets is not supported?
- **SSE (Server Sent Events)**
  - client will have a request (traditional HTTP request) to the server and then server will not  response back.
  - It will try to create an event pipeline using that communication channel that server creates.
  - It is only one way. It is not bi directional like we saw in web sockets.
  - Client cannot use the event channel.
  - Client can use just traditional HTTP request

In worst case scenario, in some situation where web sockets and event is also not supported:

- **Long Polling**
  - Request
  - The connection does not close. 
  - It always waits for a response from the server
  - Timeout, which is about 2 minutes.
  - So in 2 minutes, if server does not have any response -   connection will be closed with timeout.
  - Client could initiate a new request.
  - So client can have a channel which is always open

Summary

- Web Sockets - best, fastest, 2-way channel, always open
- SSE (Server Sent Events) - 1-way, Client cannot use the event channel. Client uses traditional HTTP request.
- Polling with timeout 2 min.

### SignalR Connections [18]
## Section 3: SignalR - More Projects
### Send vs Invoke [19]
### Transport Type and Logging in SingalR [20]
### Deathly Hallow Race Setup [21]
### Deathly hallow [22]
### Method to Update Race Count Spans [23]
### Race in Action and Assignment 1 [24]
### Assignment 1 Solution [25]
## Section 4: Groups in SignalR
### Groups Overview [26]
### What we will cover [27]
### Setup Harry Potter House UI [28]
### Setup House Hub [29]
### Subscribe and Unsubscribe Button Listeners [30]
### Subscribe Group in Action [31]
### Fix Subscription Bug [32]
### Assignment 2 [33]
### Subscribe Unsubscribe in Action [34]
### Trigger Notifications [35]
## Section 5: SignalR - Notification Project
### Assignment 3 Overview [36]
### Assignment 3 Solution - Notification Hub [37]
### Assignment 3 Solution - Notification Client Setup [38]
### Assignment 3 Solution - Notification In Action [39]
### Assignment 3 Solution - Notification Load Messages [40]
## Section 6: SignalR - Basic Chat
### Seperating out Views [41]
### Setup of Basic Chat Application UI [42]
### Send Public Message [43]
### Send Private Message [44]
### Authorization in SignalR [45]
### Seperating out Chat [46]
## Section 7: SignalR - Order Update Project
### Project Setup [47]
### Order Datatable Updated [48]
## Section 8: SignalR Azure Service
### Create Azure SignalR Service [49]
### Azure SignalR Overview [50]
### azure signalr in action [51]
### SignalR Client Events [52]
## Section 9: SignalR - Advanced Chat
### Rename and move basic chat [53]
### API Endpoints for Chat Application [54]
### Setup UI for Chat Application [55]
### Setup Chat Action Method [56]
### HubConnection Helper [57]
### Notify User is online [58]
### User Connection Error [59]
### Disconnection Connection [60]
### Add Chat Room [61]
### Create Chat Room [62]
### Delete Chat Room [63]
### Send Public Message [64]
### Send Private Message [65]
### Advanced Chat [66]
