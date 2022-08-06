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
}

getLatestNews();

//기본적인 API를 호출하는 방법.
// const callAPI = async() => {
//     let url = new URL('url주소')
//     let header
//     let response = await fetch("url", {headers:header})
// }

