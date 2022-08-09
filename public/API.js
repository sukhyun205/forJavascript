let news = []

const getLatestNews = async()=>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10') //new URL()함수는 URL의 정보를 분석해준다.
    // console.log(url)

    let header = new Headers({"x-api-key":"klvI5IGf3ZG2W6NuI0muNA6bLS33bNOy6xR3fip1NlM"})

    let response = await fetch(url,{headers:header}) //async와 await은 한 세트 
    //url, header를 통해 데이터를 fetch해오기도 전에 data를 출력시키면 data 변수를 불러올 수 없게된다.
    let data = await response.json()
    // console.log("데이터:",data)

    news = data.articles
    console.log(news)

    render();
}



//기본적인 API를 호출하는 방법.
// const callAPI = async() => {
//     let url = new URL('url주소')
//     let header
//     let response = await fetch("url", {headers:header})
// }

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
    news.map(news=>{
        return '<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="https://static01.nyt.com/images/2022/08/07/business/07dc-vote-schumer/merlin_211181418_dae98053-1f66-45ae-9e2c-eec76dd38c90-threeByTwoMediumAt2X.jpg" alt="">
        </div>
        <div class="col-lg-8">
            <h2>Senate Vote Puts Climate Action in Reach</h2>
            <p>
                Bill Also Tackles Taxes and Drug Costs; Could Pass the House This Week
            </p>
            <div>
                Scene From Capitol Hill
            </div>
        </div>
    </div>';
    })

    document.getElementById("news-board").innerHTML = newsHTML;
}


getLatestNews();
