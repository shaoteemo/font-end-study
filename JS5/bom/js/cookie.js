let cookieUtil = {
    set: function (name, value, days) {
        let date = new Date();
        date.setDate(date.getDate() + days); // 设置过期时间
        document.cookie = name + "=" + value + ";expires=" + date + ";";
    },
    get: function (name) {
        /* 获取Cookie */
        let cookies = document.cookie.split("; ");
        console.log(cookies);
        for (const index in cookies) {
            let cookie = cookies[index].split("=");
            if (name === cookie[0]) {
                return cookie[1];
            }
        }
    },
    remove: function (name) {
        this.set(name , "" , -1);
    }
}