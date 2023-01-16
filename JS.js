 //hide and show--toggle, dmth checks for visibility
    //scrollY-property of the Window interface, kthen numrin e pixel-ave qe dokumenti eshte currently scrolled vertikalisht ne nje dritare
    //If the document isn't scrolled at all up or down, then scrollY is 0... bon edhe pa ata?
    window.addEventListener('scroll',function(){
        const header= document.querySelector('header');
        header.classList.toggle("sticky",window.scrollY>0)
    })

