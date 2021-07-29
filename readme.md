fitPgage.js
===========
# Demo
[Demo](http://dev.dohyeon.kr/fitpage/test/)

# Usage

## start

\<head\>에 아래 코드를 삽입

    <script src="{fitPage 경로}/dist/fitpage.js"></script>
    <link rel="stylesheet" href="{fitPage 경로}/dist/fitpage.css">

## html

    <div id="fitpage-container">
        <!-- fitpage-slide안의 내용 및 스타일을 원하는대로 바꾸어도 됨 -->
        <div class="fitpage-slide"
            style="font-size:150%; text-align: center; background-color: red; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>Lorem</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat deserunt aliquid?<br>
            Iste rerum fugiat, laudantium error soluta quo molestiae consequuntur<br>
            qui eius libero sequi quia delectus at enim ullam!<br>
        </div>
        <div class="fitpage-slide"
            style="font-size:150%; text-align: center; background-color: green; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>Lorem</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat deserunt aliquid?<br>
            Iste rerum fugiat, laudantium error soluta quo molestiae consequuntur<br>
            qui eius libero sequi quia delectus at enim ullam!<br>
        </div>
        <div class="fitpage-slide"
            style="font-size:150%; text-align: center; background-color: blue; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>Lorem</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat deserunt aliquid?<br>
            Iste rerum fugiat, laudantium error soluta quo molestiae consequuntur<br>
            qui eius libero sequi quia delectus at enim ullam!<br>
        </div>
        <div class="fitpage-slide"
            style="font-size:150%; text-align: center; background-color: purple; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>Lorem</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat deserunt aliquid?<br>
            Iste rerum fugiat, laudantium error soluta quo molestiae consequuntur<br>
            qui eius libero sequi quia delectus at enim ullam!<br>
        </div>
    </div>

## javascript

    const fp = new fitPage({
        //컨테이너의 클래스 또는 아이디 셀렉터 (필수값)
        //반드시 지정해서 넘겨주어야함
        containerSelector: "#fitpage-container"
        //슬라이드의 클래스 기본값은 .fitpage-slide지만 
        //fitPage 인스턴스를 만들때 넘겨주는 오브젝트 안에 slideSelector를 별도로 정의하면 변경할 수 있음.
        slideSeletor: ".fitpage-slide",   
    });
