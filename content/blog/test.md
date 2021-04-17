---
title: Omni Channel In Lightning
date: 2021-04-17T03:16:33.903Z
subtitle: ""
cover: https://www.clipartmax.com/png/middle/250-2508639_omnichannel-communications-v5-omni-channel-icon-png.png
tags: Salesforce, Lightning, Omni-Channel
---
**how to add omni in your app:-**

* Go to the setup search for Omni-Channel. Then select Omni-Channel setting and enable it  .
* After this , we have to add it in the utility bar of the app in which where you want to use it.

**Now how we make it working we should follow these steps -** 

1.- Create Service Channel: this feature help to use any object in omni channel that we want to assign work to agent of  retated particular object .

2. Set Routing Configuration: after creating service channel we set rounting configuration .in this we decide how will route the work item.
   Routing Priority: in this we set priority of route the work item
   Push Time-Out: it set time for work item how much wait for accept by agent .
   Skills-Based Routing Rules: this is user for skill based routing of work item. Wee can use multiple skill for route work. For example if one agent want to pass their work item to any one who is capable or has skills for that work  then agent can pass using particular skills.
   Work Item Size: this set the size of work item at a time a agent can have how many work item or record .

Units of Capacity :No unit of work item meant work item has 2 unit then agent can handal 4 case
Percentage of Capacity: the capacity of agent at a time to handle work item.

Configure Presence Configuration:
In this we set these values
Automatically Accept Requests	Its enable the auto accept case or work item 
Allow Agents to Decline Requests	This for decline the work item
Update Status on Decline	 
Allow Agents to Choose a Decline Reason	Its enable to choose reason of decline like workload and skill issue any thing
Update Status on Push Time-Out	 
Request Sound Enabled	Its set notification sound for work item
Disconnect Sound Enabled	Similr this also give sound of disconnecting omni
Create Presense status ;
 We can create status of agent like 
Busy
Away 
Online 
Offline
And so on.
Presense Decline reason: in this we can create decline reson whatever we want to create like workloador nor available like this.

After this we create queue and it assign to  routing configuration
And also assign service channel to presence status then  

Work item is a record like one case is generated and assign to a agent this is a one work item.