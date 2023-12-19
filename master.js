let li = document.querySelectorAll("#list>li")
let sounds = document.querySelectorAll("audio")

document.getElementById("start").addEventListener("click", (e) => {
    e.target.parentElement.parentElement.style.height = "0";
    li[0].style.transform = "scale(1.3)"
    sounds[0].play()
    sounds[1].play()
})

document.querySelector("main").addEventListener("scroll", (e) => {
    let st = e.target.scrollTop
    // console.log(st);
    document.querySelector(".porsche").style.clipPath = `inset(0 0 ${st * 2}px 0)`
    document.querySelector(".s1930").style.top = `${st}px`
    sounds[0].pause()

    if (st > 265) {
        document.querySelector(".s1930").style.clipPath = `inset(0 0 ${(st - 300) * 2}px 0)`
        document.querySelector(".s1940").style.top = `${st}px`
        li[0].style.transform = "scale(1)"
        li[1].style.transform = "scale(1.3)"
        sounds[1].pause()
        sounds[2].play()
    }
    else {
        document.querySelector(".s1930").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s1940").style.top = `0px`
        li[1].style.transform = "scale(1)"
    }

    if (st > 650) {
        document.querySelector(".s1940").style.clipPath = `inset(0 0 ${(st - 685) * 2}px 0)`
        document.querySelector(".s1950").style.top = `${st}px`
        li[1].style.transform = "scale(1)"
        li[2].style.transform = "scale(1.3)"
        sounds[2].pause()
        sounds[3].play()
    }
    else {
        document.querySelector(".s1940").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s1950").style.top = `0px`
        li[2].style.transform = "scale(1)"
    }

    if (st > 1032) {
        document.querySelector(".s1950").style.clipPath = `inset(0 0 ${(st - 1067) * 2}px 0)`
        document.querySelector(".s1960").style.top = `${st}px`
        li[2].style.transform = "scale(1)"
        li[3].style.transform = "scale(1.3)"
        sounds[3].pause()
        sounds[4].play()
    }
    else {
        document.querySelector(".s1950").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s1960").style.top = `0px`
        li[3].style.transform = "scale(1)"
    }
    if (st > 1420) {
        document.querySelector(".s1960").style.clipPath = `inset(0 0 ${(st - 1455) * 2}px 0)`
        document.querySelector(".s1970").style.top = `${st}px`
        li[3].style.transform = "scale(1)"
        li[4].style.transform = "scale(1.3)"
        sounds[4].pause()
        sounds[5].play()
    }
    else {
        document.querySelector(".s1960").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s1970").style.top = `0px`
        li[4].style.transform = "scale(1)"
    }
    if (st > 1805) {
        document.querySelector(".s1970").style.clipPath = `inset(0 0 ${(st - 1840) * 2}px 0)`
        document.querySelector(".s1980").style.top = `${st}px`
        li[4].style.transform = "scale(1)"
        li[5].style.transform = "scale(1.3)"
        sounds[5].pause()
        sounds[6].play()
    }
    else {
        document.querySelector(".s1970").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s1980").style.top = `0px`
        li[5].style.transform = "scale(1)"
    }
    if (st > 2192) {
        document.querySelector(".s1980").style.clipPath = `inset(0 0 ${(st - 2227) * 2}px 0)`
        document.querySelector(".s1990").style.top = `${st}px`
        li[5].style.transform = "scale(1)"
        li[6].style.transform = "scale(1.3)"
        sounds[6].pause()
        sounds[7].play()
    }
    else {
        document.querySelector(".s1980").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s1990").style.top = `0px`
        li[6].style.transform = "scale(1)"
    }
    if (st > 2579) {
        document.querySelector(".s1990").style.clipPath = `inset(0 0 ${(st - 2614) * 2}px 0)`
        document.querySelector(".s2000").style.top = `${st}px`
        li[6].style.transform = "scale(1)"
        li[7].style.transform = "scale(1.3)"
        sounds[7].pause()
        sounds[8].play()
    }
    else {
        document.querySelector(".s1990").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s2000").style.top = `0px`
        li[7].style.transform = "scale(1)"
    }
    if (st > 2962) {
        document.querySelector(".s2000").style.clipPath = `inset(0 0 ${(st - 2997) * 2}px 0)`
        document.querySelector(".s2010").style.top = `${st}px`
        li[7].style.transform = "scale(1)"
        li[8].style.transform = "scale(1.3)"
        sounds[8].pause()
        sounds[9].play()
    }
    else {
        document.querySelector(".s2000").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s2010").style.top = `0px`
        li[8].style.transform = "scale(1)"
    }
    if (st > 3345) {
        document.querySelector(".s2010").style.clipPath = `inset(0 0 ${(st - 3380) * 2}px 0)`
        document.querySelector(".s2020").style.top = `${st}px`
        li[8].style.transform = "scale(1)"
        li[9].style.transform = "scale(1.3)"
        sounds[9].pause()
        sounds[10].play()
    }
    else {
        document.querySelector(".s2010").style.clipPath = `inset(0 0 0 0)`
        document.querySelector(".s2020").style.top = `0px`
        li[9].style.transform = "scale(1)"
    }
    if (st > 3732 && st < 4200) {
        document.querySelector(".s2020").style.clipPath = `inset(0 0 ${(st - 3767) * 2}px 0)`
        li[9].style.transform = "scale(1)"
        li[10].style.transform = "scale(1.3)"
        sounds[10].pause()
        sounds[11].play()
    }
    else {
        document.querySelector(".s2020").style.clipPath = `inset(0 0 0 0)`
        li[10].style.transform = "scale(1)"
    }
})