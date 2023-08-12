/* typing animation */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Software Developer", "Script Kid"],
    typeSpeed: 80,
    BackSpeed: 60,
    loop: true
});
/* aside */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection(sectionIndex)

})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_lifavcn";
    const templateID = "template_3fp0lbm";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = ("");
            document.getElementById("email").value = ("");
            document.getElementById("subject").value = ("");
            document.getElementById("message").value = ("");
            console.log(res);
            success()
        })
        .catch((err) => console.log(err));
}

function send(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_lifavcn";
    const templateID = "template_36ee5zc";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = ("");
            document.getElementById("email").value = ("");
            document.getElementById("subject").value = ("");
            document.getElementById("message").value = ("");
            console.log(res);
        })
}


function success() {
    swal({
        title: "THANK YOU!",
        text: "Message Send Successfully",
        icon: "success",
        button: "OK!",
    });
}
