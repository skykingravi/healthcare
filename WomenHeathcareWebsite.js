// Menu
let menu = document.getElementById("menu");
let menuList = document.querySelector(".nav-list");
menu.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menu.classList.contains("open")) {
        menu.classList.replace("open", "close");
    }
    else {
        menu.classList.replace("close", "open");
    }
});
let remove = () => {
    if (window.innerWidth <= 800) {
        menuList.classList.toggle("show");
    }
    menu.classList.replace("close", "open");
};

localStorage.clear();
let i = 1, j = 2, k = 3;
let addData = () => {
    let titleTxt = document.getElementById("title");
    let messageTxt = document.getElementById("message");
    let nmTxt = document.getElementById("name");
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(i, titleTxt.value);
        localStorage.setItem(j, messageTxt.value);
        localStorage.setItem(k, nmTxt.value);
        i += 3;
        j += 3;
        k += 3;
    }
    else {
        alert("Sorry, your browser does not support Web Storage !!");
    }
    titleTxt.value = messageTxt.value = nmTxt.value = "";
};

let valArr = {"Paytm": "98xxxxxxx0@paytm", "PhonePe": "elvesxxxxx@ybi", "Google Pay": "123456789@hdfcbank"};
let showDetails = (val) => {
    document.querySelector("#donate fieldset .app-img img").src = `${val}.svg`;
    document.querySelector("#donate fieldset .account-data h6").textContent = valArr[val];
};

document.querySelector("#donate .redirect-btn").addEventListener("click", () => {
    document.querySelector("#donate .donate-bx").classList.toggle("visible");
    document.querySelector("#donate .redirect-btn").classList.toggle("hidden");
});
document.querySelector("#donate .done-btn").addEventListener("click", () => {
    document.querySelector("#donate .donate-bx").classList.toggle("visible");
    document.querySelector("#donate .redirect-btn").classList.toggle("hidden");
});



function display(val) {
    if (val == "Andhra Pradesh") {
      document.getElementById("andhraPradesh").style.display = "block";
    } else if (val == "Arunachal Pradesh") {
      document.getElementById("arunachalPradesh").style.display = "block";
    } else if (val == "Goa") {
      document.getElementById("goa").style.display = "block";
    } else if (val == "Punjab") {
      document.getElementById("punjab").style.display = "block";
    } else if (val == "Tripura") {
      document.getElementById("tripura").style.display = "block";
    } else if (val == "Telangana") {
      document.getElementById("telangana").style.display = "block";
    } else if (val == "Karnatka") {
      document.getElementById("karnatka").style.display = "block";
    } else if (val == "Maharashtra") {
      document.getElementById("maharashtra").style.display = "block";
    } else if (val == "Assam") {
      document.getElementById("assam").style.display = "block";
    } else if (val == "Karnatka") {
      document.getElementById("karnatka").style.display = "block";
    } else if (val == "Delhi") {
      document.getElementById("mMaharashtra").style.display = "block";
    }
    if (val == "Chattisgarh") {
      document.getElementById("chattisgarh").style.display = "block";
    }
    if (val == "Chandigarh") {
      document.getElementById("chandigarh").style.display = "block";
    }
    if (val == "Bihar") {
      document.getElementById("bihar").style.display = "block";
    }
  
    if (val == "Gujarat") {
      document.getElementById("gujarat").style.display = "block";
    }
    if (val == "Himachal Pradesh") {
      document.getElementById("himachalPradesh").style.display = "block";
    }
    if (val == "Haryana") {
      document.getElementById("haryana").style.display = "block";
    }
    if (val == "Rajasthan") {
      document.getElementById("rajasthan").style.display = "block";
    }
  }
  
