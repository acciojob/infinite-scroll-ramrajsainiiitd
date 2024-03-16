// let InfiniteScroll = document.getElementById('infi-list').childNodes;
document.addEventListener('DOMContentLoaded',function () {
  let list = document.getElementById('infi-list');
  // var listItem = document.getElementById('infi-list');
  let itemCount = 10;
// function to add new list
function AddListItem() {
  let listItem = document.createElement('li');
  listItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(listItem);
}
// for initial list item
for(let i=0;i<itemCount;i++){
AddListItem();
}
// function to handelscroll
function HandelScroll() {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;
  if (scrollTop + clientHeight >= clientHeight) {
    // User has reached the end of the list
    // Add 2 more list items automatically
    AddListItem();
    AddListItem();
  }
}

list.addEventListener('scroll',HandelScroll);
});