const sections = document.querySelectorAll(".section-show")



let sectionShow = function(entries) {
    let[entry] = entries;
    if(entry.isIntersecting) {
        entry.target.classList.remove("section-hidden");
    }
}

let sectionObserver = new IntersectionObserver(sectionShow, {root:null, threshold:0.15,})

sections.forEach(section => {

    sectionObserver.observe(section)
    section.classList.add("section-hidden")
})
