const CHAMP_LIST_URL = "https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"



const selectTag = document.querySelector('select')

const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')

const getChampList = async () => {
 
  try {
    const response = await axios.get(CHAMP_LIST_URL)
    // const champList = Object.keys(response.data)
    const champListObj = response.data.data
    const champListArr = Object.values(champListObj)
    //console.log(response.data.data.Aatrox)
    setOptions(champListArr)
   // champS(optionValue)
  } catch (error) {
    console.error(error)
  }
}
getChampList()

function champS(placeholder) {
  
  

  let championN = `
<h1>${champListObj.data.data.Aatrox}hello</h1>
`
}
  



function setOptions(list) {
  // console.log(list)
  const THUMBURL = "https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/"
  for (let i = 0; i < list.length; i++) {
    const option = `
    <option value="${list[i].id}">
      <img src="${THUMBURL}${list[i].id}.png">
      <div id="Test"></div>
        ${list[i].id}
      </option>
      `
    selectTag.innerHTML += option
  }
}

 //////////////

function getValue(e) {
  e.preventDefault()
  let optionValue = selectTag.value
  removeElements(dataContainer)
  console.log(optionValue)
  getChampData(optionValue)
  // return optionValue
}
/////
form.addEventListener('submit', getValue)

async function getChampData(championN) {
  const URL = `https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/${championN}.json`
  try {
    const response = await axios.get(URL)
 
    appendChamp(response.data.data, championN)
    console.log(response.data.data)
  } catch (error) {
    console.error(error)
  }
}
////
function appendChamp(champ,championName) {
  console.log(champ)
  // appending a title (h2 elmt) to the DOM 
  const h1 = document.createElement('h1')
  h1.textContent = champ[championName].title
  dataContainer.append(h1)
  // appending blurb (p elmt) to DOM 
  const pTag = document.createElement('p')
  pTag.textContent = champ[championName].lore
  dataContainer.append(pTag)
  // appending img to the DOM

  const champUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`
  const img = document.createElement('img')    
  img.setAttribute('src', champUrl)
  dataContainer.append(img)
  ///// appending status to DOM
  
  const h3 = document.createElement('h3')
  h3.textContent = champ[championName].allytips
  const allyTips = document.createElement('p')
  allyTips.textContent = "allyTips"
  dataContainer.append("ally tips")
  dataContainer.append(h3)
  /// appending champ tags to DOM
  const h2 = document.createElement('h2')
  h2.textContent = champ[championName].enemytips
  dataContainer.append("Enemy tips", h2)

}

function removeElements(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}
//////
var body = $('body');
var colors = ['Forest', 'green', 'Lime', 'Teal'];
var currentIndex = 0;
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