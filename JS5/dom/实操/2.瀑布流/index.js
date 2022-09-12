/*动态设置页面居中*/
window.onload = function (){

    waterFlow();

    /* 动态排列 */
    function waterFlow() {
        //获取父级元素
        let container = document.getElementById("container");
        //获取所有子元素
        let childElement = document.getElementsByClassName("box");
        //获取屏幕宽度
        let screenWidth = document.documentElement.clientWidth;
        //一个图片的容器宽度
        let imgWidth = childElement[0].offsetWidth;
        //计算屏幕水平方向最多能放置的图片个数
        let count = Math.floor(screenWidth / imgWidth) - 1;
        //页面左右居中
        container.style.cssText =
            "width: " + count * imgWidth + "px;" +
            "margin: 0 auto;";

        //动态位置调整
        getMinimumHeightOfClos(childElement , count);
    }

    /* 
        页面触底
            滚动高度+视口高度(页面高度)  = 文档总高度(body高度)
        
        实际业务
            滚动高度+视口高度(页面高度)  >= 文档总高度(body高度) - 最后一张图片的高度
    */
    /* 上拉加载数据 */
    var dataImg = {
        code: 200,
        data: [
            {src:'resource/1.jpeg'},
            {src:'resource/2.jpeg'},
            {src:'resource/3.jpeg'},
            {src:'resource/4.jpeg'},
            {src:'resource/5.jpeg'},
            {src:'resource/6.jpeg'},
            {src:'resource/7.jpeg'},
            {src:'resource/8.jpeg'},
            {src:'resource/9.jpeg'},
            {src:'resource/10.jpeg'},
            {src:'resource/11.jpg'}
        ]
    }
    window.addEventListener("scroll" , function(){
        //获取父级元素
        let container = document.getElementById("container");
        if(checkReachButtom()){
            // 加载新数据
            for (let i = 0; i < dataImg.data.length; i++) {
                const element = dataImg.data[i];
                let box = document.createElement('div');
                box.setAttribute("class" , "box");
                container.appendChild(box);

                let innerBox = document.createElement('div');
                innerBox.setAttribute("class" , "box-img");
                box.appendChild(innerBox);
                
                var img = new Image();
                img.src = dataImg.data[i].src;
                innerBox.appendChild(img);
            }
        }

        // 刷新瀑布流
        waterFlow();
    });

    function checkReachButtom(){
        //获取所有子元素
        let childElement = document.getElementsByClassName("box");
        let lastChild = childElement[childElement.length -1];

        //获取滚动高度
        let scrollHeight = document.documentElement.scrollTop;
        //获取视口高度
        let viewPortHeight = document.documentElement.clientHeight;
        //文档总高度
        let docHeight = scrollHeight + viewPortHeight;
        //最后一个元素高度（因为定位基于父级）
        let lastChildHeight = lastChild.offsetTop;
        //滚动到底了
        return lastChildHeight <= docHeight;
    }

    /* 获取最小高度列 */
    function getMinimumHeightOfClos(childNodes , rowsNum) {
        //存储每列高度
        let colsHeights = [];
        for (let i = 0; i < childNodes.length; i++) {
            //判断并获取第一行的图片，获取图片对应的高度，放入到数组中
            if (i < rowsNum){ // 小于每行显示数（即获去第一行的左右信息）
                // 第一行的图片。用于参照
                let imgHeight = childNodes[i].offsetHeight;
                colsHeights.push(imgHeight);
            }else {
                //获取最小值
                let minHeight = Math.min.apply(null ,colsHeights);
                // 获取最小值下标
                let minHeightIndex = colsHeights.indexOf(minHeight);
                // 位置变更
                childNodes[i].style.position = 'absolute';
                childNodes[i].style.top = minHeight + 'px';
                childNodes[i].style.left = childNodes[minHeightIndex].offsetLeft + 'px';

                //重置高度.将新的高度赋予此
                colsHeights[minHeightIndex] = colsHeights[minHeightIndex] + childNodes[i].offsetHeight;
            }
        }
    }
}