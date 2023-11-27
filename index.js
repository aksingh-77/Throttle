const container = document.querySelector(".container");
const para = document.querySelector(".para");
let count = 0;

const throttle = (callback, delay)=>{
    isWaiting = false;

    return (...args)=>{

        if(isWaiting) return;

        callback(...args);
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false
        },delay);

    }
}


const handleScroll = () => {
    // console.log("scroll");
    count++

    para.innerText = count;
    //LOGIC Of API
}

container.addEventListener("scroll", throttle(handleScroll, 500));