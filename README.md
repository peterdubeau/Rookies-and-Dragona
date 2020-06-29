
# TITLE <!-- omit in toc -->

Rookies & Dragons

### Description

**Rookies & Dragons** is a website to help new Dungeons and Dragons players choose a class and race for their first character. The user will first choose to explore classes or races. From there the page will display well know pop culture references that correspond to each class or race. After choosing making their choices, the page will then display the base stats for a character along with the class and racial features of a level 1 character. 

<br>

### Wireframes


![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

<br>

### MVP

#### MVP Goals

- 6 separate components (Home, ClassList, ClassInfo, RaceList, RaceInfo, CharacterBuild)
- Axios requests with specific endpoints for each component.
- Display unique pages for each Class and Race. 
- Hide/Show More buttons for readability.

<br>

#### MVP API

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| D&D 5e API |      yes      | https://www.dnd5eapi.co/docs/| https://www.dnd5eapi.co/api/https://www.dnd5eapi.co/api/ |

Sample Query Results:

![Dummy Link](url)
![Dummy Link](url)
![Dummy Link](url)
![Dummy Link](url)

<br>

#### MVP Libraries & Dependencies


|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Lorem ipsum dolor sit amet, consectetur._ |
| React Router | _Lorem ipsum dolor sit amet, consectetur._ |
|     Axios    | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
|__ components/
      |__ Header.js
      |__ ClassList.JS
      |__ ClassInfo.js
      |__ RaceList.js
      |__ RaceInfo.Js
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Header    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|  Navigation  | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Home     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Index     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Detail    | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|   Gallery    |   class    |   y   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
| Gallery Card | functional |   n   |   y   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Footer    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| HTML & CSS    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Initial API setup     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| API component Endpoints    |    H     |     3 hrs      |     1 hrs     |     TBD     |
|       |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL            |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Post-MVP


- Store the users choices for Class and Race, to build a character template.  
- Random Stat Generator to make a more fleshed out character for the user.
- Integrate with another API for more images.

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.