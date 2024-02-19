fetch( 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6VBeA79UXYD7rd9JjE9KbQ&maxResults=50&key=[YOUR_API_KEY] HTTP/1.1')
.then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data)
    let videos = data.items
    console.log(data.nextPageToken)

    let videoContainer = document.querySelector(".youtube_container")
    for(video of videos){
        videoContainer.innerHTML += `<img src="${video.snippet.thumbnails.high.url}">`
    }
})