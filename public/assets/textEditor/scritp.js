let optionsButtons = document.querySelectorAll(".option-button");
let AnvOptionsButtons = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let LinkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");


let listFont = [
    "Arial",
    "Times New Roman",
    "Georgia",
    "Palatino Linotype",
    "Book Antiqua",
    "Comic Sans MS",
    "Courier"
];


const intializer = () => {

    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, true);
    highlighter(scriptButtons, true);

    listFont.map((value) => {

        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);

    });

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }
    fontSizeRef.value = 3;


};


const modiyfText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};



optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modiyfText(button.id, false, null);
    });
});




AnvOptionsButtons.forEach((button) => {
    button.addEventListener("change", () => {
        modiyfText(button.id, false, button.value);
    });
});





LinkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");

    if (/http/i.test(userLink)) {
        modiyfText(LinkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modiyfText(LinkButton.id, false, userLink);

    }
});


const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.cotains("active")) {
                    alreadyActive = true;

                }
                highlighterRemoval(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }

        });
    });
};

const highlighterRemoval = (className) => {
    className.forEach((button) => {

        button.classList.remove("active")
    });
}

window.onload = intializer();
