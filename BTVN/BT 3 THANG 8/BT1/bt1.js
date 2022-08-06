var node = document.querySelector(".telecom");

// g để tìm hết tất cả các thằng

var result = node.innerText.replace(
    /Frontend/gi,
    '<span class="text">Frontend</span>'
);

node.innerHTML = result;
