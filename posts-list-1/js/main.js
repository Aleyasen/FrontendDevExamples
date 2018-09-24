$(document).ready(function () {

    $("#showPostsButton").click(function () {
        showPosts();
    });

});

function showPosts() {

    $.get("https://jsonplaceholder.typicode.com/posts", function (posts, status) {

        table_html = '<table class="table">' +
            '        <thead>' +
            '        <tr>' +
            '            <th scope="col">#</th>' +
            '            <th scope="col">Title</th>' +
            '            <th scope="col">Body</th>' +
            '        </tr>' +
            '        </thead>' +
            '        <tbody>';

        for (var key in posts) {
            var post = posts[key];
            table_html +=
                '<tr>' +
                '   <th scope="row">' + post.id + '</th>' +
                '   <td>' + post.title + '</td>' +
                '   <td>' + post.body + '</td>' +
                '</tr>';
        }

        table_html += '</tbody>' +
            '</table>';

        $("#table-container").html(table_html);
    });
}