const CHAMP_LIST_URL = "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"
const CHAMP_IMG_URL = "http://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/"


const selectTag = document.querySelector('select')

const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')

const getChampList = async () => {
 
  try {
    const response = await axios.get(CHAMP_LIST_URL)
    // const champList = Object.keys(response.data)
    const champListObj = response.data.data
    const champListArr = Object.values(champListObj)
  
    setOptions(champListArr)
  } catch (error) {
    console.error(error)
  }
}
getChampList()



function setOptions(list) {
  // console.log(list)
  for (let i = 0; i < list.length; i++) {

  console.log(list[i].id)
    let option = document.createElement('option')
   
    option.textContent = list[i].id
    option.value = list[i].id
    console.log(option)
    selectTag.append(option)
  }
}

 

// function getValue(e) {
//   e.preventDefult()
//   let optionValue = selectTag.value
//   removeElements(dataContainer)
//   getChampList(optionValue)
//   return optionValue
// }
// form.addEventListener('submit', getValue)
// async function getChampImage(champValue) {
//   const URL = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champValue}_0.jpg`
//   try {
//     const imageURL = await axios.get(URL)
//     appendImage(imageURL.data.data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// function appendImage(URL) {
//   const imageTag = document.createElement('img')
//   imageTag.setAttribute('src', URL)
//   dataContainer.append(imageTag)
// }


// function removeElements(element) {
//   while (element.lastChild) {
//     element.removeChild(element.lastChild)
//   }
// }