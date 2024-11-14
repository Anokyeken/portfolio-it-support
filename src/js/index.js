$(document).ready(function(){

    /** Start -- Display elements on scroll */
    let options =
    {
        threshold:1
    }

    let callback = (entries,observer)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('showMe');
                observer.unobserve(entry.target);
                // console.log("observing")
            }
            else
            {
                return;
            }
        });
    };

    const observer = new IntersectionObserver(callback,options);
    let target = document.querySelectorAll("p");
    target.forEach(t => observer.observe(t));


    const copyright = document.querySelector(".copyright").innerText = new Date().getFullYear() + " Kennedy Anokye";
    
    /** End -- Display elements on scroll */
});