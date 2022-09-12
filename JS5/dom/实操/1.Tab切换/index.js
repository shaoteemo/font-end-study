window.onload = function () {
    //获取导航
    let nav = document.querySelector(".nav");
    //内容
    let content = document.querySelector(".content");

    let contentDiv = content.querySelectorAll("div");
    let navDivs = nav.querySelectorAll("div");

    /*事件处理*/
    /*for (let i = 0; i < navDivs.length; i++) {
        (function (index) {
            navDivs[index].onmouseenter = function (event) {
                if (event.target.nodeName.toLowerCase() !== "a") {
                    let target = event.target;
                    //样式变更
                    for (let j = 0; j < navDivs.length; j++) {
                        navDivs[j].classList.remove("select");
                        contentDiv[j].style.display = "none";
                    }
                    //变更内容
                    target.classList.add("select");
                    contentDiv[index].style.display = "block";
                }
            }
        }(i))
    }*/


    nav.onmouseover = function (event) {
        let contentDiv = content.querySelectorAll("div");
        let navDivs = nav.querySelectorAll("div");
        if (event.target.nodeName.toLowerCase() !== "a") {
            let target = event.target;
            let contentIndex = -1;
            //样式变更
            for (let i = 0; i < navDivs.length; i++) {
                if (navDivs[i] === event.target) {
                    contentIndex = i;
                }
                navDivs[i].classList.remove("select");
                if (contentDiv[i]) {
                    contentDiv[i].style.display = "none";
                }
            }
            //变更内容
            target.classList.add("select");
            if (contentDiv[contentIndex]) {
                contentDiv[contentIndex].style.display = "block";
            }
        }
    }

}