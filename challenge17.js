document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content !== '') {
            createPost(content);
            postContent.value = '';
        }
    });

    function createPost(content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <p>${content}</p>
            <button class="likeBtn">Like</button>
            <button class="replyBtn">Reply</button>
        `;
        postsContainer.prepend(postDiv);
    }
});
