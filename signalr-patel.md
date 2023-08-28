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
### Demo [2]
### Topics Covered [3]
### Project Resources [4]
### Typical HTTP Scenario [5]
### Hubs in SignalR [6]
### Typical Flow [7]
### Create Project [8]
## Section 2: SignalR in Action
### Create Hub [9]
### Create Hub Method [10]
### Add Client Side Library for SignalR [11]
### Modify Home View [12]
### Configure SignalR Client Js [13]
### SignalR In Action [14]
### SignalR Hub Methods [15]
### SignalR Flow Overview [16]
### Transport Types [17]
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