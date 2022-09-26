const array = []
document.querySelectorAll(".as-imagegrid-item-title").forEach((e) => {
    array.push(e.innerText.replace("\nSupport", ""))
})
console.log(array);

// Output:
// ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"]