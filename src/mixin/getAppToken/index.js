
export const getAppToken = {
    mounted() {
        window.getAppToken = this.getAppToken;
    },
    methods: {
        // 接收原生传入的 token 
        getAppToken(token) {
            if(!token) return;
            this.$store.dispatch('STORE_TOKEN', token);
        }
    }
}