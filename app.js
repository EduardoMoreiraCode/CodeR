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

function copyToClipBoard()
{
    var right = "copiado com sucesso!"
    var wrong = "Algo deu errado durante a cópia!"
    var content = document.getElementById('fixed-text').innerHTML;

    navigator.clipboard.writeText(content)
    .then(() => {
        window.alert("Código " + right);
    })

    .catch(err => {
        window.alert(wrong, err);
    })
}
