const submenus = ["Submenu 1", "Submenu 2", "Submenu 3"];

const menuItems = [
  {
    title: "Menu 1",
    submenu: submenus,
    link: "#",
  },
  {
    title: "Menu 2",
    submenu: submenus,
    link: "#",
  },
  {
    title: "Menu 3",
    submenu: submenus,
    link: "#",
  },
  {
    title: "Menu 4",
    submenu: submenus,
    link: "#",
  },
  {
    title: "Menu 5",
    submenu: submenus,
    link: "#",
  },
];

var menu = document.getElementById("menu");

const listElement = document.createElement("ul");

menuItems.forEach((item) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = item.link;
  link.textContent = item.title;
  listItem.appendChild(link);

  const subList = document.createElement("ul");
  item.submenu.forEach((subItem) => {
    const subListItem = document.createElement("li");
    const subLink = document.createElement("a");
    subLink.href = "#";
    subLink.textContent = subItem;
    subListItem.appendChild(subLink);
    subList.appendChild(subListItem);
  });
  listItem.appendChild(subList);
  listElement.appendChild(listItem);
});

menu.appendChild(listElement);
menu.style.display = "none";

var mainMenu = document.getElementById("main-menu");

mainMenu.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    return;
  }
  menu.style.display = "none";
});

var subMenu = document.querySelectorAll("#menu li ul");
subMenu.forEach((item) => {
  item.style.display = "none";
});

var menuItemsEdit = document.querySelectorAll("#menu li");
menuItemsEdit.forEach((item) => {
  item.addEventListener("click", function () {
    var subMenu = this.querySelector("ul");
    if (subMenu.style.display === "none") {
      subMenu.style.display = "block";
      return;
    }
    subMenu.style.display = "none";
  });
});

var subMenuItems = document.querySelectorAll("#menu li ul li");
subMenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.style.display === "none") {
      item.style.display = "block";
      return;
    }
    item.style.display = "none";
  });
});
