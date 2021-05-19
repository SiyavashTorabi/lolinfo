const CHAMP_LIST_URL = "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"



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
  for (let i = 0; i < list.length; i++) {

  // console.log(list[i].id)
    let option = document.createElement('option')
   
    option.textContent = list[i].id
    option.value = list[i].id
    // console.log(option)
    selectTag.append(option)
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
  const URL = `http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/${championN}.json`
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
  const h2 = document.createElement('h2')
  h2.textContent = champ[championName].title
  dataContainer.append(h2)
  // appending blurb (p elmt) to DOM 
  const pTag = document.createElement('p')
  pTag.textContent = champ[championName].blurb
  dataContainer.append(pTag)
  // appending img to the DOM

  const champUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`
  const img = document.createElement('img')    
  img.setAttribute('src', champUrl)
  dataContainer.append(img)
}
// function appendImage(URL) {
//   const imageTag = document.createElement('img')
//   imageTag.setAttribute('src', URL)
//   dataContainer.append(imageTag)
// }


function removeElements(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}