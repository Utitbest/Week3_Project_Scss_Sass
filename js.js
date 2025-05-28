const mainContainer = document.getElementsByClassName('mainContainer')[0]
const NavAnchor = document.querySelectorAll('nav a')
console.log(mainContainer)
NavAnchor.forEach((ele, nud)=>{
    ele.addEventListener('click', async()=>{
        mainContainer.innerHTML = ''
        const innerhtml = ele.innerHTML.toLocaleLowerCase()
        switch (innerhtml) {
            case 'home':
                document.title = 'Home'
                mainContainer.innerHTML = ''
                fetch(`./pages/${'home'}.html`)
                .then(response => response.text())
                .then(result =>{
                    mainContainer.innerHTML = result
                })
                .catch(erre =>{console.log(erre)})
            break;
                
            case 'about':
                document.title = 'About'
                mainContainer.innerHTML = ''
                fetch(`./pages/${'about'}.html`)
                .then(response => response.text())
                .then(result =>{
                    mainContainer.innerHTML = result
                })
                .catch(erre =>{console.log(erre)})
            break;

            case 'blog':
                document.title = 'Blog'
                mainContainer.innerHTML = ''
                fetch(`./pages/${'blog'}.html`)
                .then(response => response.text())
                .then(result =>{
                    mainContainer.innerHTML = result
                })
                .catch(erre =>{console.log(erre)})
            break;

            case 'contact':
                document.title = 'Contact'
                mainContainer.innerHTML = ''
                fetch(`./pages/${'contact'}.html`)
                .then(response => response.text())
                .then(result =>{
                    mainContainer.innerHTML = result
                })
                .catch(erre =>{console.log(erre)})
            break;

            case 'project lesson':
                document.title = 'SCSS & SASS Full Lesson'
                mainContainer.innerHTML = ''
                fetch(`./pages/${'lessons'}.html`)
                .then(response => response.text())
                .then(result =>{
                    mainContainer.innerHTML = result
                })
                .catch(erre =>{console.log(erre)})
            break;
        }
    })
     document.title = 'Home'
        mainContainer.innerHTML = ''
        fetch(`./pages/${'home'}.html`)
        .then(response => response.text())
        .then(result =>{
            mainContainer.innerHTML = result
        })
        .catch(erre =>{console.log(erre)})
})