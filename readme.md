fitPgage.js
===========
# Usage
<hr>
start
<heal>에 아래 코드를 삽입
    <script src="../dist/fitpage.js"></script>
    <link rel="stylesheet" href="../dist/fitpage.css">
html
    <div id="fitpage-container">
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
javascript
    const fp = new fitpage({
        containerSelector: "#fitpage-container"
        #클래스 또는 아이디
    });