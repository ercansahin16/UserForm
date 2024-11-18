
function showTab(event, tabName) {

    const contents = document.querySelectorAll(".tab-content");

    contents.forEach(content => content.classList.remove("active-content"));

    document.getElementById(tabName).classList.add("active-content");

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => tab.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-tab");
}
