const sidebarOpen = document.querySelector("#sidebar-open")
const sidebarClose = document.querySelector("#sidebar-close")
const closeListIcon = document.querySelector("#close-list-icon")
const menuListIcon = document.querySelector("#menu-list-icon")
const sidebarListItem = document.querySelector("#sidebar-list-item")

const showSidebarMenuList = function () {
    sidebarClose.classList.add("show")
    sidebarOpen.classList.remove('show')
  
}

const showSidebarCloseList = function () {
    sidebarClose.classList.remove('show')
    sidebarOpen.classList.add("show")
}

const showSidebarMenuListItem =  function (){
    sidebarClose.classList.add("show")
    sidebarOpen.classList.remove('show')
}


sidebarListItem.addEventListener("click" , showSidebarMenuListItem)
menuListIcon.addEventListener("click", showSidebarCloseList )
closeListIcon.addEventListener("click", showSidebarMenuList)
