window.onload = function () {
    //获取导航
    let nav = document.querySelector(".nav");
    //内容
    let content = document.querySelector(".content");

    let contentDiv = content.querySelectorAll("div");
    let navDivs = nav.querySelectorAll("div");

    let timer = null;
    // 滑动超时时间
    let delay = 100;

    /*事件处理*/
    for (let i = 0; i < navDivs.length; i++) {
        (function (index) {
            navDivs[index].onmouseenter = function (event) {
                timer = window.setTimeout(function () {
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
                }, delay);
            }
        }(i))

        /* 鼠标掠过优化 */
        navDivs[i].onmouseleave = function () {
            window.clearTimeout(timer);
        }

    }
}