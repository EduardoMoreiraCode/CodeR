document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode');
    const html = document.querySelector('html');
    var inputDarkMode = document.getElementById('input-dark-mode');
    
    if(darkModeStorage){
        html.setAttribute("dark", "true");
        inputDarkMode.checked = true;
        document.querySelector(".img").src="sun-icon.png";
    }

    inputDarkMode.addEventListener('change', () => {
        
        if(inputDarkMode.checked){
            html.setAttribute("dark", "true");
            localStorage.setItem('dark-mode', true);
            document.querySelector(".img").src="sun-icon.png";
            
        }else{
            html.removeAttribute("dark");
            localStorage.removeItem('dark-mode');
            document.querySelector(".img").src="moon-icon-coder.png";
        }
    });
})



function loading() {

    // O código desejado é apenas isto:
    document.querySelector(".body").style.opacity = 0;
    document.querySelector(".body").style.display ="none";
    document.querySelector("header").style.opacity = 1;
    document.querySelector("nav").style.opacity = 1;
    document.querySelector("nav").style.display = "block";

}