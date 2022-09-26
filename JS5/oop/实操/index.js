/* 常规面向对象写法 */
function Tab(id) {
    let tabBox = document.getElementById(id);
    // 属性
    this.tabBtn = tabBox.getElementsByTagName("input");
    this.tabDiv = tabBox.getElementsByTagName("div");
    console.log(this.tabBtn);
    for (let i = 0; i < this.tabBtn.length; i++) {
        this.tabBtn[i].index = i;
        let _this = this;
        this.tabBtn[i].onclick = function () {
            _this.clickBtn(this);
        }
    }
}

Tab.prototype.clickBtn = function (element) {
    for (let i = 0; i < this.tabBtn.length; i++) {
        this.tabBtn[i].className = '';
        this.tabDiv[i].style.display = "none";
    }
    element.className = 'active';
    this.tabDiv[element.index].style.display = "block";
}

/* window.onload = function () {
    let tab1 = new Tab("tab_box");
    let tab2 = new Tab("tab_box2");
} */


/* 继承概念 */
function SmartTab(id, effect) {
    Tab.call(this, id);
    this.effect = effect;
}

for (const index in Tab.prototype) {
    SmartTab.prototype[index] = Tab.prototype[index];
}

SmartTab.prototype.getEffect = function () {
    console.log(this.effect);
}

window.onload = function () {
    let tab1 = new SmartTab("tab_box", "第一个Tab标签对象");
    let tab2 = new SmartTab("tab_box2", "第二个Tab标签对象");

    tab1.getEffect();
    tab2.getEffect();
}

// 传统方式写法
/* window.onload = function (){
    let tabBox = document.getElementById("tab_box");
    let tabBtn = tabBox.getElementsByTagName("input");
    let contentDiv = tabBox.getElementsByTagName("div");

    for (let index = 0; index < tabBtn.length; index++) {
        tabBtn[index].index = index;
        tabBtn[index].onclick = function (){
            for (let i = 0; i < tabBtn.length; i++) {
                const element = tabBtn[i];
                element.className = '';
                contentDiv[i].style.display = "none";
            }
            this.className = 'active';
            contentDiv[this.index].style.display = "block";
        }
    }

} */