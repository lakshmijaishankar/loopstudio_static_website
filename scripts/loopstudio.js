const DESKTOP_URL_PATH = "./assets/images/desktop/";
const MOBILE_URL_PATH = "./assets/images/mobile/";
const MOBILE_MENU = document.querySelector(".loopstudio_hamburger");
const NAV_LINKS = document.querySelector(".loopstudio_nav_links");
const INTERACTIVE_VR = document.querySelector(".loopstudio_interactive");
const CREATION_GALLERY_CONTAINER = document.querySelector(
  ".loopstudio_creation_gallery_conatiner"
);

const CREATION_GALLERY_ARRAY = [
  {
    srcPath: `${"image-deep-earth.jpg"}`,
    title: "Deep Earth",
  },
  {
    srcPath: `${"image-night-arcade.jpg"}`,
    title: "Night Arcade",
  },
  {
    srcPath: `${"image-soccer-team.jpg"}`,
    title: "Soccer Team",
  },
  { srcPath: `${"image-grid.jpg"}`, title: "The Grid" },
  {
    srcPath: `${"image-from-above.jpg"}`,
    title: "From Above",
  },
  {
    srcPath: `${"image-pocket-borealis.jpg"}`,
    title: "Pocket Borealis",
  },
  {
    srcPath: `${"image-curiosity.jpg"}`,
    title: "The Curiosity",
  },
  { srcPath: `${"image-fisheye.jpg"}`, title: "Make It Fisheye" },
];
const BUTTON_SEEALL = document.querySelector("[type=button]");
var isDesktopOrModile = "desktop";

/* window.addEventListener("load", (e) => {
  let imgPath = window.innerWidth <= 768 ? MOBILE_URL_PATH : DESKTOP_URL_PATH;
  creationGallery(imgPath);
}); */

/* window.addEventListener("resize", () => {
  let imgPath = window.innerWidth <= 768 ? MOBILE_URL_PATH : DESKTOP_URL_PATH;
  creationGallery(imgPath);
}); */
/* window.addEventListener("load", () => {
  CREATION_GALLERY_CONTAINER.classList.toggle(
    "animate-gallery",
    window.innerWidth <= 768
  );
}); */
window.addEventListener("resize", () => {
  CREATION_GALLERY_CONTAINER.classList.toggle(
    "animate-gallery",
    window.innerWidth <= 768
  );
});
MOBILE_MENU.addEventListener("click", () => {
  let isAnimate = NAV_LINKS.classList.toggle("show_links");
  animateNavLinks(isAnimate);
});

function animateNavLinks(isAnimate) {
  NAV_LINKS.querySelectorAll("li").forEach((li) => {
    li.classList.toggle("animate_nav_links", isAnimate);
  });
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      entry.target.classList.toggle(
        "animate-gallery",
        window.innerWidth <= 768
      );
  });
});
function creationGallery() {
  // removeChildrenNode(CREATION_GALLERY_CONTAINER);
  CREATION_GALLERY_ARRAY.forEach(({ srcPath, title }, index) => {
    let liElement = renderCreationGallery(srcPath, index, title);
    CREATION_GALLERY_CONTAINER.appendChild(liElement);
  });
  // animateCreationGallery();
}
function renderCreationGallery(url, index, title) {
  let liElement = createElement("li");
  let pictureElement = createElement("picture");
  let imgElement = createElement("img");
  let spanElement = createElement("span");
  let sourceElementDesktop = createElement("source");
  let sourceElementModile = createElement("source");
  sourceElementDesktop.srcset = DESKTOP_URL_PATH + url + " 1x";
  sourceElementDesktop.type = "image/jpg";
  sourceElementDesktop.media = "(min-width:769px)";
  sourceElementModile.srcset = MOBILE_URL_PATH + url + " 1x";
  sourceElementModile.type = "image/jpg";
  sourceElementModile.media = "(min-width:320px) and (max-width:768px)";

  /*   liElement.classList.add(
    "loopstudio_creation_gallery",
    `${
      window.innerWidth <= 768
        ? "modile_gallery_item_" + (index + 1)
        : "desktop_gallery_item_" + (index + 1)
    }`
  ); */
  liElement.classList.add("loopstudio_creation_gallery");
  spanElement.classList.add("loopstudio_creation_gallery_title");
  spanElement.innerText = title;
  imgElement.src = DESKTOP_URL_PATH + url;
  imgElement.alt = title;
  pictureElement.appendChild(sourceElementDesktop);
  pictureElement.appendChild(sourceElementModile);
  pictureElement.appendChild(imgElement);
  liElement.appendChild(pictureElement);
  liElement.appendChild(spanElement);
  return liElement;
}
BUTTON_SEEALL.addEventListener("click", () => {
  window.scrollTo({ top: 980, behavior: "smooth" });
});
/* function removeChildrenNode(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
  console.log(parentNode.childrens);
} */
// console.log(CREATION_GALLERY);
/* function animateCreationGallery() {
  let CREATION_GALLERY = document.querySelectorAll(
    ".loopstudio_creation_gallery"
  );
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
      if (element.isIntersecting)
        element.target.classList.add("animate_creation_gallery");
    });
  });

  CREATION_GALLERY.forEach((galleryEle) => {
    observer.observe(galleryEle);
  });
}
 */
observer.observe(CREATION_GALLERY_CONTAINER);

function createElement(elementType) {
  return document.createElement(elementType);
}

creationGallery();
