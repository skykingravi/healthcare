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

let headEl = document.getElementById("ser-data-info");
let selEl = document.getElementById("category");
let stateObj = {"delhi": "Delhi Commison for women<br>011-23379181, 23370597<br>Delhi Women Protection Cell<br>011-24673366/<br>4156/7699", "andhra pradesh": "Andhra Pradesh - Hyderabad/Secundrabad<br>Police station<br>040-27853508<br>Andhra Pradesh Women Protection cell<br>040-23320539<br>Andhra Pradesh Women Commission<br>0863-2329090<br>Hyderabad Women Police Station<br>040-27852400/4852", "arunachal pradesh": "Arunachal Pradesh Women Commission<br>'C' Sector, Ita Nagar<br>0360-2214567,<br>0360-2290544", "assam": "ASSAM WOMEN HELPLINE<br>181 , 9345215029,<br>0361-2521242", "bihar": "Bihar Women Helpline<br>18003456247 / 0612-2320047 / 2214318<br>                    Bihar Women Commission<br>( 1 South, Beily Road, Patna, Bihar )<br>0612- 2507800", "chandigarh": "Chandigarh Women Police<br>0172-2741900<br>Chandigarh Women Commission N-A", "chattisgarh": 'Chattishgarh Women Commission<br>( Gaytri Bhawan, Raipur )<br><a href="complaint@cgmahilaayog.com">Complaint</a><br>0771-2429977,<br>4013189<br>18002334299<br>0771-4241400', "goa": "GOA Women Helpline<br>1091 ,<br>0832-2421208<br>GOA Women Commission <br>0832-2421080", "gujarat": 'STATE WOMEN COMMMISION GUJRAT<a href=" http://www.scwgujarat.org/"> (Website)</a><br>18002331111 / 079-23251604 , 079-23251613<br>UJRAT - Ahemdabad Women Group <br>https://www.awagindia.org/ <br>7926441214 <br>GUJRAT - Self Employed Womens Association<a href=" http://www.sewa.org/"> (Website)</a><br>079-25506477/ 25506444', "haryana": 'Haryana Women and Child Helpline<br>0124-2335100<br>Helpline for women in Distress<br>9911599100<br>Haryana Women Commission<br>( Bays No: 39-40, CADA Bhawan, Sec-4, Panchkula )<br>0172 - 2584039, 0172-2583639<br>Women and Child Development Department<br>0172-2560349', "himachal pradesh": 'Himachal Pradesh Women Commision<a href=" http://hp.gov.in/hpwomencommission"> (Website)</a>/Home.aspx<br>H.P. State commission for Women,<br>Himrus Bhawan,<br>Himland, Shimla<br>9816077100, 0177-2622929<br>0177-2783607 <br>01892-228072', "maharashtra": 'Mumbai Railway Police<br>                    9833331111<br>Mumbai Police Women Helpline No. <br>022-22633333, 22620111', "punjab": 'Women Helpline Punjab<br>                    1091 / 112<br>Women Helpline Amritsar City Only<br>9781101091<br>                    Punjab Women Commission<br>SCO No:-57,58,59 Sector-17-C,<br>Chandigarh<br>Website: <a href="https://punjabwomencommission.punjab.gov.in/">click here</a><br>0172-2712607<br>                    0172-2783607<br />Punjab Samvad ( NGO )<br />0172- 2546389, 2700109, 276000114', "telangana": 'TELANGANA<br>WOMEN HELPLINE 181 <br />WOMEN COMMISION WHATSAPP 9490555533', "tamilnadu": 'Tamil Nadu Women Helpline<br>044-28592750<br>State Commission for Women<br>WEBSITE : Click Here<br>044-28551155', "tripura": 'Tripura Commmission for Women<br>H.G. Basak Road, Melarmath <br>Agartala, West Tripura<br>( http://tcw.nic.in/ )<br>0381-2323355, 2322912', "rajasthan": 'Rajasthan Nirbhaya Helpline<br>1800-1200-020<br>Rajasthan Women Commission<br>0141-2779001-4<br>Rajasthan Women Helpline<br>0141-2744000<br>Jodhpur Women Helpline<br>0291-2012112', "karnatka": 'Banglore Women Police <br>080-22943225 <br>Karnataka Women Police <br>0821-2418400 <br />Karnataka Women Commision <br>( 1st Floor, Karnatka Housing Board Building, Cauvery Bhawan, K.G.Marg, Bangalore-560 009 )<br>080-22100435/ 22862368, 080-2216485 <br>Mysore Women Police <br>0821-2418110/ <br>2418410'};
headEl.innerHTML = stateObj[selEl.value];
function display(val) {
    headEl.innerHTML = stateObj[val];
}