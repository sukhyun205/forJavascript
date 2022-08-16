let news = []
let menus = document.querySelectorAll(".menus button")

console.log("munues: ",menus)

menus.forEach((item)=>{
    item.addEventListener("click", (event)=>getNewsByTopic(event))
})

const getLatestNews = async()=>{

    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=JP&page_size=10') //new URL()함수는 URL의 정보를 분석해준다.
    let header = new Headers({"x-api-key":"klvI5IGf3ZG2W6NuI0muNA6bLS33bNOy6xR3fip1NlM"})
    let response = await fetch(url,{headers:header}) //async와 await은 한 세트 
    //url, header를 통해 데이터를 fetch해오기도 전에 data를 출력시키면 data 변수를 불러올 수 없게된다.
    let data = await response.json()
    // console.log("데이터:",data)

    news = data.articles
    console.log("토픽뉴스:",news)

    render();
}

const getNewsByTopic = async(event) =>{ //await이랑 async는 짝짜꿍. 무조건 같이 온다.

    // console.log("클릭됨", event.target.textContent)

    let topic = event.target.textContent.toLowerCase()
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=JP&page_size=10&topic=${topic}`)
    let header = new Headers({"x-api-key":"klvI5IGf3ZG2W6NuI0muNA6bLS33bNOy6xR3fip1NlM"})
    let response = await fetch(url,{headers:header}) //async와 await은 한 세트 
    let data = await response.json()

    news = data.articles
    console.log("토픽뉴스:",news)

    render();

}




// 사이드 메뉴바 함수
const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

// 검색메뉴박스 함수
const openSearchBox = ()=>{
    let inputArea = document.getElementById("input-area");
    if(inputArea.style.display === "inline"){
        inputArea.style.display = "none";
    }
    else{
        inputArea.style.display = "inline";
    }
};

const render = ()=>{
    let newsHTML = '';
    newsHTML = news.map((item)=>{ //제에에에발 '말고 `백틱인거 기억하자!!!
        return `<div class="row news"> 
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.summary}
            </p>
            <div>
                ${item.published_date} from ${item.rights}
            </div>
        </div>
    </div>`
}).join('join을 쓰면 array타입에서 string타입으로 바꿀 수 있다.')

    document.getElementById("news-board").innerHTML = newsHTML;
}


getLatestNews();

//기본적인 API를 호출하는 방법.
// const callAPI = async() => {
//     let url = new URL('url주소')
//     let header
//     let response = await fetch("url", {headers:header})
// }