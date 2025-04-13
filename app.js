function ChangeTheme(){
    let body = document.querySelector("body");
    if (body.classList.contains("dark")){
        body.classList.remove("dark")}
            else {
               body.classList.add("dark");
            }

}

let button = document.querySelector("button");
button.addEventListener("click", ChangeTheme);