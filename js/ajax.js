function getData() {
    $.ajax({
        url: "https://api.jsonbin.io/b/5f3f7567993a2e110d32cddd/latest",
        method: "GET",
        headers: {
            "secret-key": "$2b$10$O8QLc0GXnRY.2vy4PR.pAOWN1TKC0JX6M7aVcw1NTFkR.dmaPTpei"
        },
        success: function(res) {
            renderData(res);
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function renderData(data) {
    var html = '';
    for (let i = 0; i < data.length; i++) {
        html += '<div class="post-content" data-aos="zoom-in" data-aos-delay="200">' +
            '<div class="post-image">' +
            '<div>' +
            '<img src="' + data[i].img_url + '" class="img" alt="blog1">' +
            '</div>' +
            '<div class="post-info flex-row">' +
            '<span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;' + data[i].author + '</span>' +
            '<span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;' + data[i].date + '</span>' +
            '<span>' + data[i].comment + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="post-title">' +
            '<a href="./detail.html?id=' + data[i].id + '">' + data[i].title + '</a>' +
            '<p> ' + data[i].content +
            '</p>' +
            '<a href="./detail.html?id=' + data[i].id + '"><button class="btn post-btn">Đọc thêm &nbsp; <i class="fas fa-arrow-right"></i></button></a>' +
            '</div>' +
            '</div>'
    }

    $('.container .site-content .posts').html(html);
}