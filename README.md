https://siyavashtorabi.github.io/lolinfo/


# lolinfo- **App Title**: lolinfo
 **App Description**: searchs for league of legends (an online video game) champions info for an easy access to thair in game ifo and stories.
 **API**: end point http://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json
 ** api document page ** https://developer.riotgames.com/docs/lol
 
 **API Snippet**: 
 ```json
    "format": "standAloneComplex",
    "version": "10.6.1",
    "data": {
        "Aatrox": {
            "version": "10.6.1",
            "id": "Aatrox",
            "key": "266",
            "name": "Aatrox",
            "title": "the Darkin Blade",
            "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
```    

- **Wireframes**:  

https://lucid.app/lucidchart/fa848cd1-ea81-495b-bb36-57df26735701/edit?viewport_loc=-430%2C6%2C2720%2C1362%2C0_0&invitationId=inv_72a57a72-0c1c-4698-9a26-e8a1d20f34c1



- **MVP**: creat a profile for champion, search by champion name through a drop down button and connecting name of champs to thaer img for easier search,remove the search results, being able to opne the web page in phone,ipad and pc 
- **Post-MVP**: css design on champions cards & brand design on their info box, have a brand design on the websites background, reemoving rendered data from the screen & replacing it with new data
- **Goals**:
- 
|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 17| Project Approval / Core Application Structure (HTML, CSS, etc.) | complete
|May 18| Pseudocode / actual code | complete
|May 19| Initial Clickable Model  | complete
|May 20| MVP | complete
|May 21| Presentations | complete

- 
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Adding boilerplate | H | 3hrs| 3.5hrs | 3.5hrs |
| Adding bar for web info,search champ,link to my github | H | 3hrs| 3.5hrs | 3.5hrs |
| creating a dropdown button | H | 3hrs| 3.5hrs | 3.5hrs |
| removing rendered data | H | 3hrs | 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| find and connetct img to dtat | H | 3hrs| 3.5hrs | 3.5hrs |
| brand designing info cards  | H | 3hrs| 3.5hrs | 3.5hrs |
| brand designing we background | H | 3hrs| 3.5hrs | 3.5hrs |
| adding footer with link and logo to my github | H | 3hrs| 3.5hrs | 3.5hrs |
| fixing we functionally on other devices | H | 3hrs| 3.5hrs | 3.5hrs |
| creating presentations script | H | 3hrs| 3.5hrs | 3.5hrs |
| debuging & cleaning the code | H | 3hrs| 3.5hrs | 3.5hrs |
| Total | H | 40 | 5hrs | 5hrs |



**Priority Matrix**: https://app.conceptboard.com/board/m3k7-90zn-p0py-144s-kfga
## Code Snippet 
```js 
////// this code came from
/// https://stackoverflow.com/questions/41099739/how-to-change-background-color-continuously-without-refreshing-the-page
let body = $('body');
let colors = ['Forest', 'green', 'Lime', 'Teal'];
let currentIndex = 0;
setInterval(function () {
   body.css({
     backgroundColor: colors[currentIndex]
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 100);
```
