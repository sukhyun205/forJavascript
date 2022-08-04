const getLatestNews = ()=>{
    let url = new URL('https://docs.newscatcherapi.com/api-docs/endpoints/latest-headlines') //new URL()함수는 URL의 정보를 분석해준다.
    // console.log(url)

    let header = new Headers({'x-api-key':'klvI5IGf3ZG2W6NuI0muNA6bLS33bNOy6xR3fip1NlM'})

    let response = fetch(url,{headers:header})
}

getLatestNews();

