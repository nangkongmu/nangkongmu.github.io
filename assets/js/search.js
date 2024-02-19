window.enterkeySearch = () =>{
if(window.event.keyCode == 13){
    searchPost();
};

window.searchPost = () => {
$('#home -section-post').empty();
let searchQuery = $('#search-input').val();
if(searchQuery == ''){
    alert('검색어를 입력해주세요!');
    $('#search-input').focus();
    return;
}
$.ajax({
type: 'GET',url: ProcessingInstruction.env.BACKEND_HOST + 
'/post/search?query=' + searchQuery,
        success: function (response) {
            console.log(response);
            let posts = response;

            for (let index = 0; index < posts.length; index++) {
                let id = posts[index]['id'];
                let title = posts[index]['title'];
                let meetingType = posts[index]['meetingType'];
                let period = posts[index]['period'];
                let hits = posts[index]['hits'];
                let recruitmentState = posts[index]['recruitmentState'] ? '모집 완료' : '모집 중';

                let recruitmentStateColor = posts[index]['recruitmentState'] ? 'is-default' : 'is-pink';
                let recruitmentStateColorBack = posts[index]['recruitmentState'] ? 'is-white' : 'is-gray';

                let cardHTML = `<div id=${id} class="card ${recruitmentStateColorBack}">
                                    <div class="card-header">
                                        <p class="card-header-title" onclick="openPost(${id})">${title}</p>
                                        <div class="content bookmark">
                                            <i class="fa-regular fa-bookmark" onclick="registerBookmark(${id})"></i>
                                        </div>
                                    </div>

                                    <div class="card-content" onclick="openPost(${id})">
                                        <div class="card-content-box">
                                            <div class="content">
                                                <span>기간</span>
                                                <span class="bubble-item bubble">${period}</span>
                                            </div>

                                            <div class="content">
                                                <span>모임 방식</span>
                                                <span class="bubble-item bubble">${meetingType}</span>
                                            </div>

                                            <div class="content">
                                            <span>모집 현황</span>
                                            <span class="bubble-item ${recruitmentStateColor}">${recruitmentState}</span>
                                        </div>

                                        </div>
                                        <div class="card-content-box">
                                        <div>
                                            <div class="content">
                                                <i class="fa-regular fa-eye"></i>
                                                <span>${hits}</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>`;

                $('#home-section-post').append(cardHTML);
            }
            resizeHomeContainer();
        }
    });
};
}
