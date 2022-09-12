window.onload = function () {
    let small = document.getElementById("small");
    let zoom = document.getElementById("zoom");
    let detail = document.getElementById("detail");

    /* 事件添加 */
    small.onmouseover = function () {
        zoom.style.display = "block";
        detail.style.display = "block";
    }

    small.onmouseleave = function () {
        zoom.style.display = "none";
        detail.style.display = "none";
    }

    small.onmousemove = function (event) {
        // 获取鼠标移动的方式：根据鼠标方向->移动的像素
        /* 
            clientX clientY:相对于页面左上角移动的距离（px）
            并将其定位至鼠标中间。
        */
        let zoomCSSWidth = zoom.offsetWidth;
        let zoomCSSHeight = zoom.offsetHeight;
        let zoomX = event.clientX - small.offsetLeft - zoomCSSWidth / 2;
        let zoomY = event.clientY - small.offsetTop - zoomCSSHeight / 2;

        if (zoomX < 0) {
            zoomX = 0;
        }

        if (zoomY < 0) {
            zoomY = 0;
        }

        if (zoomX >= zoomCSSWidth / 2) {
            zoomX = zoomCSSWidth / 2;
        }
        if (zoomY >= zoomCSSHeight / 2) {
            zoomY = zoomCSSHeight / 2;
        }

        zoom.style.left = zoomX + "px";
        zoom.style.top = zoomY + "px";

        // 放大比例 = 图片大图 / 图片小图
        let rate = 800 / 450;

        detail.style.backgroundPositionX = -zoomX * rate + "px";
        detail.style.backgroundPositionY = -zoomY * rate + "px";

    }
}