var arr = [
  {
    dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    story:
      "https://images.unsplash.com/photo-1590875680698-6f435a58807c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvcnRyYWl0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "/cvbgpic.jpeg",
    story: "cv.jpg",
  },
  {
    dp: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1503034230949-7fd0e1d0a9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

var clutter = "";
var stories = document.querySelector("#stories");
arr.forEach(function (elm, idx) {
  //   console.log(idx);
  clutter += ` <div class="story">
  <img id="${idx}" src="${elm.dp}" alt="" />
</div>`;
});
// console.log(clutter);

stories.innerHTML = clutter;
stories.addEventListener("click", function (details) {
  document.querySelector("#fullscreen").style.display = "block";

  document.querySelector("#fullscreen").style.backgroundImage = `url(${
    arr[details.target.id].story
  })`;
  //   document.querySelector("#fullscreen").style.backgroundRepeat = "none";
  //   var value = arr[details.target.id].story;
  setTimeout(function () {
    document.querySelector("#fullscreen").style.display = "none";
  }, 3000);
});
