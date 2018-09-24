$(document).ready(function () {

    $("#showPostsButton").click(function () {
        showPosts();
    });

    $("#table-container").on("click", ".showCommentsButton", function () {
        var postId = $(this).attr("data-post");
        showComments(postId);
    });

});

function showPosts() {

    $.get("http://jsonplaceholder.typicode.com/posts", function (posts, status) {

        applyMustacheTemplate('posts-list-template.html', {"posts": posts}, "#table-container")
    });
}

function showComments(postId) {

    $.get("http://jsonplaceholder.typicode.com/posts/" + postId + "/comments", function (comments, status) {

        applyMustacheTemplate('comments-list-template.html', {
            "comments": comments,
            "postId": postId
        }, "#comments-container")
    });
}

function applyMustacheTemplate(template_file, data, selector) {
    $.get(template_file, function (template) {

        var rendered = Mustache.render(template, data);
        $(selector).html(rendered);
    });
}