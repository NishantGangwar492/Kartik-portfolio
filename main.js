//checking if the script works
console.log("The Script works");

//making the fucntion for slideshow on the top of the page
        // let slide = document.getElementById('slide');
        let b1 = document.getElementById("button1");
        let b2 = document.getElementById("button2");

        let photos = [`'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80'`, `'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'`, `'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'`];

        let index;
        index = 0;

        slide.style.setProperty("--image-back", `url(${photos[index]})`);
        //grabbing the buttons

        b1.addEventListener("click", ()=>{
            if (index > 0 ){
                index--;
                slide.style.setProperty("--image-back", `url(${photos[index]})`);
            }
            else{
                index = 2;
                slide.style.setProperty("--image-back", `url(${photos[index]})`);
            }
        });
        b2.addEventListener("click", ()=>{
            if (index < 2 ){
                index++;
                slide.style.setProperty("--image-back", `url(${photos[index]})`);
            }
            else{
                index = 0;
                slide.style.setProperty("--image-back", `url(${photos[index]})`);
            }
        });

