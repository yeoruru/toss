// window.onload() 로 전체 감싸준다
// onload 참고 링크 -> https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-windowonload-%EC%A0%95%EB%A6%AC

window.onload = function() { // 스크립트 시작

// [ 스크롤트리거 시작 ]
// 스크롤트리거_설명.txt 파일 참고해서 간단한 설명 후 index.html head 에  gsap 과 ScrollTrigger 경로 걸어주고 작성 시작 
// gsap 라이브러리에 ScrollTrigger 플러그인 등록 먼저 해준다    
gsap.registerPlugin(ScrollTrigger);

    
// [ 스크립트 1 - introVideoBox ]
// gsap의 timeline 메소드를 이용해 순차적으로 애니메이션이 진행될수있도록 해주는데 여기서 특이점은 scrollTrigger로 트리거를 지정해 준후 그 구간동안만 애니가 진행되도록 해준다
// timeline 참고 url -> https://greensock.com/docs/v3/GSAP/gsap.timeline()  
    
gsap.timeline({
    scrollTrigger: {
        trigger: '.introVideoBox', // 트리거 대상 (.introVideoBox 기준으로 애니 잡아줄거라 .introVideoBox 나오면 이제 애니 시작한다고 생각하면 됨)
        pin: true, // ScrollTrigger가 활성화되어 있는 동안 화면에 고정
        scrub: true, // scrub은 ScrollTrigger의 이벤트가 스크롤이 사용될때만 재생되도록 만들어주는 속성 (scrub 속성 안적으면 트리거시점 나오면 스크롤안해도 계속 애니 진행됨)
                     // scrub은 true 나 숫자로 값을 써줄수있는데 true 또는 0 같은 경우는 스크롤하면 애니 바로 멈추고 숫자는 그 시점을 따라잡는데 N초가 걸려서 애니가 더 부드러워짐
       // markers: true, // 마커로 확인해보면 화면의 시작과 끝 위치인 scroller-start 와 scroller-end 는 디폴트 값이 0 이고 
                       // start는 트리거의 시작(0%) 위치, 그리고 end는 트리거의 끝 위치(100%) 로 지정되어있는걸 알수있다
        end: "250%", // 트리거의 end 지점을 2.5배 늘려줌으로 애니 진행 속도가 천천히 됨 마커로 확인해보기 
    }
})
    
// 자 이제 트리거 대상을 정했으니 gsap.to() 메서드를 활용해 순차적으로 애니메이션을 적어보겠음    
// gsap.to() 메서드는 움직임의 끝나는 점을 지정하는 애니메이션 -> 작성법: gsap.to("타겟", {속성: 속성값, ....});
// to 참고 url -> https://greensock.com/docs/v3/GSAP/gsap.to()

// text 는 위로 올라가며 사라짐
// pin 이나 scrub 주석처리 해보면서 애니 확인해보기
.to('.introVideoBox .text',{'opacity': '0', y: '-20px' ,ease: 'none',duration: 1},0) // 맨뒤에 ,0 은 바로 시작하는 순서를 지정해줌 (안 적으면 그냥 순차적으로 진행됨)

// arrow 도 사라짐
.to('.introVideoBox .arrow',{'opacity': '0', ease: 'none',duration: 1},1) 
    
// video에 라운드 모서리 효과와 스케일 작아지도록
.to('.introVideoBox video',{'clip-path': 'inset(10px round 50px)', scale: '0.8' ,ease: 'none',duration: 1},2) // video랑 아래 .btn 은 동시에 진행되도록 둘다 ,2 로 적어줌

// video 애니와 동시에 btn 이 아래에서 올라옴
.to('.introVideoBox .btnBox .btn',{'opacity': '1',top: '50%',ease: 'none',duration: 1},2)     

// 마지막으로 introVideoBox 전체 투명해지며 사라짐
.to('.introVideoBox',{opacity: '0',ease: 'none',duration: 1},4)
    

// [ 스크립트 2 - introTextBox ]    
gsap.timeline({
    scrollTrigger: {
        trigger: '.introTextBox', // introTextBox 을 트리거 대상으로 잡아줌
        pin: true, // 스크롤하면 텍스트만 순차적으로 생기는 효과기 때문에 pin으로 고정해줌
        scrub: true, 
        //markers: true // 이번엔 start, end 지정을 안 해주고 디폴트값 그대로 사용할 예정
    }
})
    
// gsap.fromTo() 메서드는 시작 점과 끝나는 점을 지정하는 애니메이션 -> gsap.fromTo("타겟", {시작 속성: 시작 속성값, ....},{끝나는 속성: 끝나는 속성값, ....});
// fromTo 참고 url -> https://greensock.com/docs/v3/GSAP/gsap.fromTo()
// text 를 투명도 0 에서 1로 순차적으로 나타나게 해줌
.fromTo(".intro .introTextBox .text.a",{opacity: '0'}, {opacity: '1'})
.fromTo(".intro .introTextBox .text.b",{opacity: '0'}, {opacity: '1'})
.fromTo(".intro .introTextBox .text.c",{opacity: '0'}, {opacity: '1'})
    
// 마지막엔 text 전체가 위로 올라가며 사라짐
.to(".intro .introTextBox .text",{opacity: '0', y:'-10'})
    
//// ! 설명_3: 여기까지 작성 후 story.a 영역 html, css 작성 시작 !
    
    
// [ 스크립트 3 - story a ]  
gsap.timeline({
    scrollTrigger: {
        trigger: '.story.a', 
        //markers: true,
        start: '0% 100%', // 앞에 0% -> 트리거의 시작 위치 / 뒤의 100% -> 화면의 시작 위치
        end: '0% 50%', // 앞에 0% -> 트리거의 끝 위치 / 뒤의 100% -> 화면의 끝 위치 -> 결론적으로 .story.a 가 화면에 올라오면서 애니 시작해서 50% 지점쯤 왔을떄 애니 종료 
        scrub: true,
    }
}) 
// .story.a 올라오면 .wrap 배경색 바꿔줌
.to(".wrap",{background: '#256dda'},0)
    
// [ 스크립트 4 - opacity 공통 ]      
gsap.utils.toArray(".opacity").forEach((selector) => {  // opacity 클래스 가진 요소 나올때 마다 적용되도록 forEach문 사용
    gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: '0% 30%', 
            end: '10% 30%',
            scrub: 1,
           //markers: true,
        }
    })
    // 아래에서 올라오는 느낌으로 투명도와 y축도 함께 적용해줌
    .fromTo(selector,{opacity: '0', y:'50'}, {opacity: '1', y:'0'},0)
}); 
    
//// ! 설명_5: 여기까지 작성 후 story.b 영역 html, css 작성 시작 !

    
// [ 스크립트 5 - .story.b ] 
gsap.timeline({
    scrollTrigger: {
        trigger: '.story.b', 
        start: '-30% 100%',  // .story.b 가 올라오기 전에 애니를 위해 -30%로 잡아줌
        end: '-30% 50%',
        scrub: 1, 
        //markers: true,
    }
}) 
// .story.a 내용들이 올라가며 사라지게 해줌
.to(".story.a .opacity",{opacity: '0', y:'-20'},0)

// .story.b 올라오면 .wrap 배경색 바꿔줌
gsap.timeline({
    scrollTrigger: {
        trigger: '.story.b',
        start: '0% 100%', 
        end: '0% 50%',
        scrub: 1, 
        //markers: true,
    }
})    
.to(".wrap",{background: '#fb6250'},0) 
    
    
// [ 스크립트 6 - .card" ]  
gsap.timeline({
    scrollTrigger: {
        trigger: ".story.b .card",
        pin: true,
        pinSpacing: true, // pin으로 고정된 엘리먼트 각각에 padding을 줘서 스크롤이 끝난 후 다음 엘리먼트가 이어서 보일 수 있도록 만들어준다
                          // 현재 .story.b .card는 position: absolute 형태라 높이 값도 상실한 상태임으로 pinSpacing로 .card 마다 패딩을 자동으로 준다
        end: "350%",
        scrub: true,
        //markers: true,
    }
}) 

// 카드 순서대로 애니 작성해준다
// 내용은 완전 똑같고 카드 abcd만 변경해주고  마지막 ,1 ,2 애니 진행되는 순서 숫자 유의해준다
.to(".card li.a",{scale: '0.8', opacity: '0', x: '300',y:'-200',rotate:'35',ease: 'none',duration: 1},1)
.to(".card ul",{y:'-30',ease: 'none',duration: 1},1) // a카드가 날아가는 동시에 ul 전체를 위로 30px씩 올려준다 
.to(".card li.b",{scale: '0.8', opacity: '0', x: '300',y:'-200',rotate:'35',ease: 'none',duration: 1},2)
.to(".card ul",{y:'-60',ease: 'none',duration: 1},2) 
.to(".card li.c",{scale: '0.8', opacity: '0', x: '300',y:'-200',rotate:'35',ease: 'none',duration: 1},3)
.to(".card ul",{y:'-120',ease: 'none',duration: 1},3) 
.to(".card li.d",{scale: '0.8', opacity: '0', x: '300',y:'-200',rotate:'35',ease: 'none',duration: 1},4)
.to(".card ul",{y:'-150',ease: 'none',duration: 1},4)  
.to(".card li.e",{scale: '0.8', opacity: '0', x: '300',y:'-200',rotate:'35',ease: 'none',duration: 1},5)
.to(".card ul",{y:'-180',ease: 'none',duration: 1},5)
.to(".card li.f",{scale: '0.8', opacity: '0', x: '300',y:'-200',rotate:'35',ease: 'none',duration: 1},6)
    
    
//// ! 설명_7: 여기까지 작성 후 story.c 영역 html, css 작성 시작 !    
    
// [ 스크립트 7 - .story.c ]     
gsap.timeline({
    scrollTrigger: {
        trigger: '.story.c', 
        start: '-30% 100%', // .story.c 가 올라오기 전에 애니를 위해 -30%로 잡아줌
        end: '-30% 50%',
        scrub: true, 
        //markers: true,
    }
})
// .story.a 내용들이 올라가며 사라지게 해줌
.to(".story.b .opacity",{opacity: '0', y:'-20'},0)

    
 gsap.timeline({
    scrollTrigger: {
        trigger: '.story.c',
        pin: true,
        end: "250%",
        scrub: true,
        //markers: true,
    }
})    
.fromTo(".story.c",{opacity: '0'}, {opacity: '1'}) // 전체 투명도 0 줬다가 배경색 먼저 보이도록 투명도 1   
.fromTo(".story.c img",{opacity: '0'}, {opacity: '1'}) // 그다음 img 애니 진행
.to(".story.c img",{opacity: '0'})  // 나타났다가 img 사라지도록
.to(".story.c .text.a",{opacity: '1', y:'-10'}) // 텍스트 순차적으로 올라오도록 진행
.to(".story.c .text.b",{opacity: '1', y:'-10'})
.to(".story.c .textBox",{opacity: '0', y:'-20'}) // 전체 텍스트 사라짐


//// ! 설명_9: 여기까지 작성 후 story.d , footer 영역 html, css 작성 시작 !  
  
    
// [ 스크립트 8 - .story.d ]    
 gsap.timeline({
    scrollTrigger: {
        trigger: '.story.d',
        pin: true,
        scrub: true,
        end:'40%',
        //markers: true,
    }
})    
.fromTo(".story.d .text",{opacity: '0', y:'30'}, {opacity: '1', y:'0'},0)
.to("footer",{marginTop: '-10vh'},0)
 
//// ! 설명_10: 여기까지 작성 후 .wrap 마진보톰 없애준 후 최종 확인
//// ! 설명_11: responsive.css 반응형 작성 시작   
    
// [ 스크립트 9 - gnb 애니메이션 ] 
let open = document.querySelector(".open");   
let header = document.querySelector("header");
    
open.addEventListener("click",() => { 
        header.classList.toggle("on"); 
})
    
//// ! 설명_13: header .on 클래스 붙는지 확인 후 css 작성
    
    
} // 스크립트 끝







