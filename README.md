
# Rookies & Dragons

### Description

**Rookies & Dragons** is a website to help new Dungeons and Dragons players choose a class and race for their first character. The user will first choose to explore classes or races. From there the page will display well know pop culture references that correspond to each class. The page will the give detailed examples of the Class along with Lore, their abilities and their traditional roll in a party.

Post MVP the page will display the base stats along with the class and racial features of a level 1 character built and ready to play. 

<br>

### Wireframes


[Home](https://drive.google.com/file/d/1DkVOb-4zL9pin0A_sRljizEGWkaJsaFI/view?usp=sharing)

- Desktop Landing

[Class/Race List](https://drive.google.com/file/d/17R43niQwydDN2BPbEkk3fu_4Zk0IW0iM/view?usp=sharing)

- Desktop Body

[Class/Race Info](https://drive.google.com/file/d/1TDffkgfFxwnqw8wIfToRkGtOjLBBn_5b/view?usp=sharing)

- Desktop Resource Index


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

![Class List Axios Call](https://res.cloudinary.com/dyrvlnond/image/upload/v1593393870/Class-list_-_axios_Call_frrnur.png)
![Class List Console.Log](https://res.cloudinary.com/dyrvlnond/image/upload/v1593393870/class-list_-console_lssmb5.png)
![Class info Axios Call](https://res.cloudinary.com/dyrvlnond/image/upload/v1593393870/Class-Info_-Axios_Call_ndj0ma.png)
![Class List Console.log](https://res.cloudinary.com/dyrvlnond/image/upload/v1593393870/Class-Info_lu6v8q.png)

<br>

#### MVP Libraries & Dependencies


|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | The Building Blocks for the project |
| React Router | Used to link components |
|    Axios     | Used to get make the API requests |
|   Bootstrap  | Styling for the page |

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


|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | Initial Axios Call and the basic homepage for the site |
|  Navigation  | functional |   n   |   n   |   n   | Quick Links to every page|
|   RoleList   | Functional |   n   |   y   |   n   | Displays the list of classes along with known references/examples |
|   RoleInfo   |    Class   |   y   |   y   |   n   | Detailed breakdown of specific Classes     |
|  RoleStats   |    Class   |   y   |   y   |   n   | Displays bas statistics of chosen Class|
|RoleEquipment |    Class   |   y   |   y   |   n   | Displays examples of starting Equipment for chosen class|
|RoleAbilities |    Class   |   y   |   y   |   n   | Displays the names of all first level abilities for chosen class |
|AbilityDetails| functional |   n   |   n   |   n   | Displays the details of any ability displayed in RoleAbility |
|    Footer    | functional |   n   |   n   |   n   | Contact information |

<br>

#### MVP Timeframes


| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------          | :------: | :------------: | :-----------: | :---------: |
| CSS                       |    L     |     3 hrs      |     5 hrs     |    3 hrs    |
| Initial API setup         |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Hard Coded Details (JSON) |    M     |     3 hrs      |     4 hrs     |     TBD     |
| Routing & Links           |    L     |     3 hrs      |     3 hrs     |     TBD     |
| RoleList                  |    M     |     4 hrs      |     4 hrs     |     TBD     |
| RoleInfo                  |    H     |     4 hrs      |     4 hrs     |     TBD     |
| RoleStats                 |    M     |     4 hrs      |     4 hrs     |     TBD     |
| RoleEquipment             |    H     |     4 hrs      |     5 hrs     |     TBD     |
| Ability Components        |    M     |     4 hrs      |     6 hrs     |     TBD     |
| TOTAL                     |    -     |     39 hrs     |     39 hrs    |     TBD     |


<br>

### Post-MVP


- Store the users choices for Class and Race to build a ready to use character template.  
- Random Stat Generator to make a more fleshed out character for the user.
- Integrate with another API for more images.

<br>

***


### Code Showcase
I had to figure out a way to make multiple API calls to different endpoints at once based on the results from the original call and the info rendered from the map function. This code below allowed me to do it and render then info I needed from there. 

```
async componentDidMount() {

      const res = await axios(`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}/levels/1`)
      const info = res.data.features
      const apiCall = info.map(abilities => axios(`https://www.dnd5eapi.co${abilities.url}`))
      const deets = await Promise.all(apiCall)
    
```

### Code Issues & Resolutions
