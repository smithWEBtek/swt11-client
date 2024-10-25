# Onboarding as a Contractor
### by Brad Smith


## intro
This article covers some basics for onboarding with a new client team, as a software engineer contractor. We will look at the people, resources and dynamics involved in successful onboarding and provide thought points to reference as you onboard.

## Why you are there
There are many reasons why contractor roles exist. Most of the time you are being brought in to solve a problem for the client, provide temporary staff augmentation or to be an added resource on a specific project. These are all happy reasons why a client would take on a contractor. 

Conversely, there are situations which are not so happy in their origin, due to issues within the client organization, unsuccessful projects, people leaving unexpectedly, or poor performance of “the last contractor we had ...". 

Whether the situation is a happy one or not, you have to navigate carefully, listen, watch, take good notes and balance your initiative with diplomacy. 

If you are introverted and less communicative by nature, there are deliberate actions you can take to facillitate communcation.

## Who's Who
Notice that we did not begin with “Whats's What”.
Identifying the key players within your client organization is crucial, because you need to foster relationships for everything else that follows.

Make a list of leadership, management, team leads, people with specific skills. Start watching their work styles, schedules and how they communicate. This will help you get in sync with them for crucial communication and collaboration. Further in this article I recommend keeping a "dev log", and at least capturing the basic information about your client team.

## Get Set Up

This is about getting setup to work, with repos, credentials, access, “add me to this or that”, channels, documentation and tribal knowledge.

Obviously you can't work if these things are not in place. My experience is that there is no perfect onboarding, anywhere (if “perfect” means that you have everything needed, on hour one of day one). Embrace the unfamiliar. Keep track of the things you needed for being fully setup and ready-to-work.

Reasons why:
- You need to be set up and working billable hours as soon as possible.
- You want to have everything needed to get setup on a new machine.
- You want to be ready to help onboard a colleague on the same project, and the client team will likely expect you to have retained that knowledge.
- Client teams are often deep into their code base for many months or years. It is difficult for them to see the project from a new person's eyes. Capturing the details of setup is a valuable contribution to your client team.

## Facts

    You will not have everything you need on day one. Be cool.

Nobody has complete documentation of the app, environment, business logic, you-name-it. You will have to ask for things, repeatedly, diplomatically without complaining. 

Onboarding a contractor helps reveal gaps in client documentation and processes. The more you can roll with it and keep working positively, the better.

    If there is documentation, it's probably outdated. Again, be cool.

Be aware of client team dynamics. They might be stressed for many reasons. They might have had very little help when they started working there. You might be coming in to do something they were not able to do. Stay calm and present your requests as friendly and non-threatening as possible.

## Quick Wins
The idea here is to get a positive result for your client as soon as possible. 
Obvious, right? This does not have to be a major release game-changing pull request.

    If you “get” me, I automatically like you.
It is human nature to seek to be “understood”. As an outsider coming in to an organization, the one thing you can do is show respect and acknowledge others genuinely. Sincerely try to understand what people are saying and their feelings. 

    Help the Universe by understanding your fellow human being.
    
This enables frank communication and collaboration. 
It translates into a perception of competence, giving you the benefit of the doubt early on, but only if you are sincere in your efforts to understand others.

Small wins that build the relationship: 
- getting a closer communication with key players.
- showing that you are listening by the questions you ask
- getting clarity on resources, application flow, business rules, known issues

Notice that the quick wins start with the people first. Be aware of where you stand with the client team. It is not enough to just code a solution.

    Communicate reliably, even if you don't have perfect news.

    Don't make your client chase you for updates and status.

## The Tidy Question
This is about creating a solid question to ask a more experienced developer.
Following the debugging points below will help you:
- get clarity before you ask for time from another developer.
- stay focused on the errors and steps you've taken.
- be ready to get effective help when the opportunity arises.

    Most experienced people are happy to help you, especially if they can see you've tried.


## Debugging Points

When things are broken and I'm stuck, I use this five step process to get unstuck:
1) goal:  My goal is _______
2) errors: The error I get is ________
3) tried: I have tried to ________
4) positives: Positives are _______
5) solution: The solution was ________

goal: 
```
I am trying to “get data from this endpoint”
```

errors: 

```
An error occurred while installing libv8 (3.16.14.19), and Bundler cannot continue.
Make sure that `gem install libv8 -v '3.16.14.19' --source 'http://rubygems.org/'` succeeds before
bundling.

Something is preventing me from running Ruby 2.3.7 on Mac OS Catalina
```

positives:

```
The front end client app is almost working.
I was able to access the repo today.
The database is running in the API and not showing errors
I can reach data from the Rails console in the API
```

solutions:

```
Turns out that OpenSSL 1.1 was getting installed by Brew automatically.
I used MacPorts to install version 1.0, which ruby 2.3.7 requires
This allowed bundle to complete without errors
```


## Fail Loudly

Seems counter-intuitive, right? It can actually help reveal issues in the app, spark conversations to clarify things and often helps the client team get clarity on goals with their end users. So this does mean that you delete the production database. It might be that you forge a working solution even if it is not elegant. You might do this just to prove a concept works, and to get feedback on how the client team would normally approach it.
There is an old saying:  “you can't steer a parked car”. I would much rather go into a stand up meeting with something that works, even if it is ugly. 


## Personality Matters

Programmers are often introverted. Sometimes we need to adapt our communciation style to help another person communicate with us. It is ok to deliberately take actions that get you out of your shell and communicate on meetings. It is ok to “adapt” your communication deliberately.

- before a meeting, create talking points for yourself, e.g.: “things I want to get out of this meeting”
- questions you want to ask
- statements you want to convey
- issues to avoid (know when to shut up)
- relationships, e.g.: “I want to reassure James that I understand his issue”
- relationships, e.g.: “I want to praise Tina for her efforts on XYZ”

The bullet points enable you to:
- quickly summarize things
- remember the essence of your point, allowing verbal improvisation
- keep grounded if you are shy about public speaking 

Watch for your openings. Sometimes an agenda is set in the beginning, where you can speak up and let others know that you have points you want to cover.


## Logs

Form the habit of a daily developer log. Make it simple enough that you use it without thinking too much.
I use OneNote simply because it syncs so flawlessly on all my devices. I create simple two-column tables, living in logical pages and sections. 

The two column table allows me the most freedom to capture my development day, error messages, events, scripts, etc. I don't try to get too fancy with it, just a date in the left column and brain dump in the right column.

!["dev-log"](https://res.cloudinary.com/smithwebtek/image/upload/v1622724740/blog/dev-log.png)

I also try to keep separate logs for:
- setup log
  - be ready to setup an entirely new machine if needed
  - environment variables
  - scripts
  - urls to dev, test, staging, production
- issues and solutions log
  - put things here that were blockers, or key breakthroughs to setup
  - everyday errors go in the dev log
- client info
  - about, business model, what they do
  - who's who
  - who can answer what
  - instructions to access the building, or acct info, etc.


## conclusion
- Put people first, “seek first to understand” your client and their business.
- Record your setup steps, be cool if things are not 100% day one.
- Maintain logs for dev, client, setup, issues.
- Create thought points and speak up in meetings.
- Ask tidy questions of experienced devs.
