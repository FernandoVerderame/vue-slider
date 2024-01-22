console.log('Vue ok', Vue);

const {createApp} = Vue;

const app = createApp({
    name: 'VueCarousel',
    data: () => ({
        destinations,
        currentIndex: 0
    }),
    computed: {
        lastElementIndex() {
            return this.destinations.length - 1;
        },
        isFirstIndex(){
            return this.currentIndex === 0;
        },
        isLastIndex(){
            return this.currentIndex === this.lastElementIndex;
        }
    },
    methods: {
        goToPrev() {
            if (this.isFirstIndex) this.currentIndex = this.lastElementIndex;
            else this.currentIndex--;
        },
        goToNext() {
            if (this.isLastIndex) this.currentIndex = 0;
            else this.currentIndex++;
        }
    }
});

app.mount('#root');