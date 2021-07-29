class fitpage {
    constructor(option) {
        this.option = {
            slideSeletor: ".fitpage-slide",
            ...option
        }
        this.state = {
            currentSlide: 0,
            beforeSlide: 0,
            maxSlide: 0,
            scrolling: false,
            touchStart: 0,
            touchEnd: 0,
            interval: 0,
        }
        this.init();
    }
    init() {
        const { containerSelector, slideSeletor } = this.option;
        this.container = document.querySelector(containerSelector);
        this.slides = document.querySelectorAll(slideSeletor);
        const slides = this.slides;
        const container = this.container;

        //슬라이드 사이즈 맞추기
        for (let i = 0, len = slides.length; i < len; i++) {
            slides[i].style.position = "relative";
            slides[i].style.height = "100%";
            slides[i].innerHTML = `<div class="fitpage-pallex-container">${slides[i].outerHTML}</div>`;
            slides[i].classList.replace(slideSeletor, slideSeletor + "-wrapper");
            if (i === this.state.currentSlide) {
                continue;
            }
            slides[i].childNodes[0].style.transform = "translateY(40%)";
        }

        //맥스 슬라이드 설정
        this.state.maxSlide = slides.length - 1;

        //휠 이벤트 설정
        container.onwheel = (e) => { this.wheelEvent(e, this) };
        container.ontouchend = (e) => { this.wheelEvent(e, this) };
        container.ontouchstart = (e) => { e.preventDefault(); this.state.touchStart = e.touches[0].clientY; };
        container.onscroll = (e) => { e.preventDefault(); };
    }
    easeOutBounce(x) {
        const n1 = 7.5625;
        const d1 = 2.75;

        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
    }
    easeInOutBounce(x) {
        const easeOutBounce = this.easeOutBounce;
        return x < 0.5
            ? (1 - easeOutBounce(1 - 2 * x)) / 2
            : (1 + easeOutBounce(2 * x - 1)) / 2;
    }
    easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    scroll() {
        const container = this.container;
        const interval = this.state.interval;
        const currentSlide = this.slides[this.state.currentSlide];
        const beforeSlide = this.slides[this.state.beforeSlide];
        const easeInOutCubic = this.easeInOutCubic;
        const easeInOutBounce = this.easeInOutBounce.bind(this);
        const easing = easeInOutCubic;
        const currentSlideChild = currentSlide.childNodes[0];
        const beforeSlideChild = beforeSlide.childNodes[0];
        const target = currentSlide.offsetTop;
        const gap = target - container.scrollTop;
        const fps = 72;
        const sec = 1;
        const step = sec * fps;
        const start = container.scrollTop;
        let scrollTop;
        let progress = 0;
        let progressratio = progress / step;
        clearInterval(interval);
        this.state.interval = setInterval(() => {
            progress++;
            progressratio = progress / step;
            scrollTop = start + gap * easing(progressratio);

            //패럴렉스 주는 부분
            container.scrollTop = scrollTop;
            currentSlideChild.style.transform = `translateY(${40 - (40 * easing(progressratio))}%)`;
            beforeSlideChild.style.transform = `translateY(${0 + (40 * easing(progressratio))}%)`;

            if (progressratio > 1) {
                container.scrollTop = target;
                currentSlideChild.style.transform = `translateY(${0}%)`;
                beforeSlideChild.style.transform = `translateY(${40}%)`;

                this.state.scrolling = false;
                clearInterval(this.state.interval);
            }
        }, 1000 / fps);
    }
    wheelEvent(e, thisClass) {

        //현재 스크롤링중이면 나가기
        e.preventDefault();
        if (thisClass.state.scrolling !== false) return;

        let deltaY = 0;
        //휠일경우
        if (e.type === "wheel") {
            deltaY = e.deltaY;
        }

        //터치일경우
        if (e.type === "touchend") {
            thisClass.state.touchEnd = e.changedTouches[e.changedTouches.length - 1].clientY;
            deltaY = thisClass.state.touchStart - thisClass.state.touchEnd;
        }

        thisClass.state.beforeSlide = thisClass.state.currentSlide;
        if (deltaY < 0) {
            //위로
            thisClass.state.currentSlide--;
            if (thisClass.state.currentSlide < 0) {
                thisClass.state.currentSlide = 0;
                return;
            }
        } else if (deltaY !== 0) {
            //아래로
            thisClass.state.currentSlide++;
            if (thisClass.state.currentSlide > thisClass.state.maxSlide) {
                thisClass.state.currentSlide = thisClass.state.maxSlide;
                return;
            }
        }
        thisClass.state.scrolling = true;
        thisClass.scroll();
    }
}