# SignalR Mastery - Become a Pro in Real-Time Web Development - Kevin Griffin

<!-- TOC -->

- [SignalR Mastery - Become a Pro in Real-Time Web Development - Kevin Griffin](#signalr-mastery---become-a-pro-in-real-time-web-development---kevin-griffin)
    - [Section 1: Introduction](#section-1-introduction)
        - [What Is SignalR? [1]](#what-is-signalr-1)
        - [Github Repo [2]](#github-repo-2)
        - [Updates for .NET 6 [3]](#updates-for-net-6-3)
        - [Office Hours Information [4]](#office-hours-information-4)
        - [Changelog Updated 2022-08-23 [5]](#changelog-updated-2022-08-23-5)
        - [Coming soon Updated 2023-01-13 [6]](#coming-soon-updated-2023-01-13-6)
    - [Section 2: Essentials](#section-2-essentials)
        - [What is a Hub? [7]](#what-is-a-hub-7)
        - [Basic Client/Server Setup [8]](#basic-clientserver-setup-8)
        - [Logging [9]](#logging-9)
        - [Transport Options [10]](#transport-options-10)
        - [Choosing a Transport Type [11]](#choosing-a-transport-type-11)
        - [Creating a Hub Method [12]](#creating-a-hub-method-12)
        - [Calling Hub Method from a Client [13]](#calling-hub-method-from-a-client-13)
        - [Creating a Client Event [14]](#creating-a-client-event-14)
        - [Connection Anatomy [15]](#connection-anatomy-15)
        - [Clients [16]](#clients-16)
        - [Groups [17]](#groups-17)
        - [Message Sizes [18]](#message-sizes-18)
        - [Calling Clients Outside of Hubs [19]](#calling-clients-outside-of-hubs-19)
        - [Hub Lifecycles [20]](#hub-lifecycles-20)
        - [Reconnection [21]](#reconnection-21)
        - [Supplemental: Dependency Injection [22]](#supplemental-dependency-injection-22)
    - [Section 3: Advanced Techniques](#section-3-advanced-techniques)
        - [Connection Events on the Client [23]](#connection-events-on-the-client-23)
        - [Connection Events on the Server [24]](#connection-events-on-the-server-24)
        - [Does SignalR Guarantee Message Deliverability? [25]](#does-signalr-guarantee-message-deliverability-25)
        - [Securing Hub Classes and Hub Methods with ASP.NET Identity [26]](#securing-hub-classes-and-hub-methods-with-aspnet-identity-26)
        - [Message Pack [27]](#message-pack-27)
        - [Strongly Typed Hubs [28]](#strongly-typed-hubs-28)
        - [Scaling Problems [29]](#scaling-problems-29)
        - [Configuring Redis Backplane [30]](#configuring-redis-backplane-30)
        - [Using SignalR with ASP.NET Core Hosted Services [31]](#using-signalr-with-aspnet-core-hosted-services-31)
        - [Using the .NET Client [32]](#using-the-net-client-32)
        - [Multiple Hubs: Math to Consider [33]](#multiple-hubs-math-to-consider-33)
        - [Multiple Hubs: Example [34]](#multiple-hubs-example-34)
    - [Section 4: Azure SignalR Service](#section-4-azure-signalr-service)
        - [Why Azure SignalR Service? [35]](#why-azure-signalr-service-35)
        - [Azure SignalR Pricing Explained [36]](#azure-signalr-pricing-explained-36)
        - [Azure SignalR Pricing - Real Client Math [37]](#azure-signalr-pricing---real-client-math-37)
        - [NEW: Premium Pricing Tier and Auto Scale! [38]](#new-premium-pricing-tier-and-auto-scale-38)
        - [Creating an Azure SignalR Resource in the Azure Portal [39]](#creating-an-azure-signalr-resource-in-the-azure-portal-39)
        - [Azure SignalR Service Portal Walkthrough [40]](#azure-signalr-service-portal-walkthrough-40)
        - [Adding Azure SignalR Support to An New/Existing Application [41]](#adding-azure-signalr-support-to-an-newexisting-application-41)
        - [Azure SignalR Service CORS Support [42]](#azure-signalr-service-cors-support-42)
        - [Student Questions Answered - Part 1 [43]](#student-questions-answered---part-1-43)
    - [Section 5: Real Project Architectures](#section-5-real-project-architectures)
        - [Real Project Architecture: LiveCad [44]](#real-project-architecture-livecad-44)
    - [Section 6: Interviews](#section-6-interviews)
        - [Interview with Brady Gaster, Program Manager of SignalR at Microsoft [45]](#interview-with-brady-gaster-program-manager-of-signalr-at-microsoft-45)
    - [Section 7: Presentations](#section-7-presentations)
        - [Real-Time Revolution - SignalR in Action LIVE at Tulsa .NET Users Group [46]](#real-time-revolution---signalr-in-action-live-at-tulsa-net-users-group-46)
    - [Section 8: Additional Resources](#section-8-additional-resources)
        - [Building a Scaffold Typescript/Webpack/.NET 5 [47]](#building-a-scaffold-typescriptwebpacknet-5-47)

<!-- /TOC -->


## Section 1: Introduction
### What Is SignalR? [1]
### Github Repo [2]
### Updates for .NET 6 [3]
### Office Hours Information [4]
### Changelog (Updated 2022-08-23) [5]
### Coming soon (Updated 2023-01-13) [6]
## Section 2: Essentials
### What is a Hub? [7]
### Basic Client/Server Setup [8]
### Logging [9]
### Transport Options [10]
### Choosing a Transport Type [11]
### Creating a Hub Method [12]
### Calling Hub Method from a Client [13]
### Creating a Client Event [14]
### Connection Anatomy [15]
### Clients [16]
### Groups [17]
### Message Sizes [18]
### Calling Clients Outside of Hubs [19]
### Hub Lifecycles [20]
### Reconnection [21]
### Supplemental: Dependency Injection [22]
## Section 3: Advanced Techniques
### Connection Events on the Client [23]
### Connection Events on the Server [24]
### Does SignalR Guarantee Message Deliverability? [25]
### Securing Hub Classes and Hub Methods with ASP.NET Identity [26]
### Message Pack [27]
### Strongly Typed Hubs [28]
### Scaling Problems [29]
### Configuring Redis Backplane [30]
### Using SignalR with ASP.NET Core Hosted Services [31]
### Using the .NET Client [32]
### Multiple Hubs: Math to Consider [33]
### Multiple Hubs: Example [34]
## Section 4: Azure SignalR Service
### Why Azure SignalR Service? [35]
### Azure SignalR Pricing Explained [36]
### Azure SignalR Pricing - Real Client Math [37]
### NEW: Premium Pricing Tier and Auto Scale! [38]
### Creating an Azure SignalR Resource in the Azure Portal [39]
### Azure SignalR Service Portal Walkthrough [40]
### Adding Azure SignalR Support to An New/Existing Application [41]
### Azure SignalR Service CORS Support [42]
### Student Questions Answered - Part 1 [43]
## Section 5: Real Project Architectures
### Real Project Architecture: LiveCad [44]
## Section 6: Interviews
### Interview with Brady Gaster, Program Manager of SignalR at Microsoft [45]
## Section 7: Presentations
### Real-Time Revolution - SignalR in Action (LIVE at Tulsa .NET Users Group) [46]
## Section 8: Additional Resources
### Building a Scaffold (Typescript/Webpack/.NET 5) [47]