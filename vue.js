// FIXME:Vue常用基本指令
// v-bind：綁定 HTML 屬性
// v-model：雙向數據綁定
// v-for：循環渲染
// v-if：條件渲染
// v-on：事件綁定

Vue.component('my-component', {
    template: '<p>這是自定義組件!</p>'
});

new Vue({
    el: '#app', // Vue 實例的掛載點div上要掛id #app
    data: {
        message: 'Hello, Vue!', // 定義原始顯示數據
        modeltest: '雙向綁定',
        items: [
            { id: 1, text: '項目 1', price: 7000, name: '阿哈哈1', isVisible: true },
            { id: 2, text: '項目 2', price: 8000, name: '阿哈哈2', isVisible: true },
            { id: 3, text: '項目 3', price: 9000, name: '阿哈哈3', isVisible: true }
        ],
        url: 'https://www.google.com.tw',
        isActive: true,
        hasError: false,
        isLoggedIn: false,
    },
    methods: {
        changeMessage() {
            this.message = '你好，Vue！'; // 改變p顯示的數據
        },
        toggleLoginStatus() {
            this.isLoggedIn = !this.isLoggedIn;
        },
        toggleitem() {
            // 控制所有项的显示与隐藏
            this.items.forEach(item => {
                item.isVisible = !item.isVisible;
            });
        }
    },
    computed: {
        classObject() {
            return {
                active: this.isActive,
                error: this.hasError
            };
        },
        styleObject() {
            return {
                width: this.width + 'px',
                height: this.height + 'px',

            };
        },
        final_price() {
            return this.items.price * 0.9;
        }
    }

});

