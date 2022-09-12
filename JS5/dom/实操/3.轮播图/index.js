window.onload = function () {

    // 当前显示图片
    let currentImage = 0;

    //获取所有轮播img
    let imgs = document.getElementById("img-list")
        .querySelectorAll("li");

    //左右切换按钮
    let btnLeft = document.getElementById("left");
    let btnRight = document.getElementById("right");

    btnLeft.onclick = function () {
        currentImage--;
        changePic();
    }

    btnRight.onclick = function () {
        currentImage++;
        changePic();
    }

    //circle指示器
    let circles = document.getElementById("circle")
        .querySelectorAll("li");

    //指示器事件
    for (const index in circles) {

        /* 自定义属性实现 */
        /* circles[index].id_index = index;
        circles[index].onclick = function () {
            // 此处的this表示点击对象
            currentImage = this.id_index;
            changePic();
        } */

        /* 闭包实现 */
        (
            function(index){
                circles[index].onclick = function (){
                    currentImage = index;
                    changePic();
                }
            }(index)
        );
    }


    function changePic() {
        if (currentImage > imgs.length - 1) {
            currentImage = 0;
        }

        if(currentImage < 0){
            currentImage = imgs.length - 1;
        }
        // 重置其他属性
        imgs.forEach(item => {
            item.classList.remove("current");
        });
        imgs[currentImage].setAttribute("class", "current");

        circles.forEach(item => {
            item.classList.remove("current");
        });
        circles[currentImage].setAttribute("class", "current");
    }



}