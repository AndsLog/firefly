<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="firefly.js"></script>
<style>
#tables{
    position:absolute;
    left:55%;
    width:1000px;
    height:800px;
}
div#park{
    position:absolute;
    left:20%;
    top:5%;
    border-style:solid;
    width:500px;
    height:500px;
}
div#restroom{
    position:absolute;
    width:30px;
    height:30px;
    border-radius:99em;
    left:91%;
    top:32%;
    background-color:black;

}
div#chen{
    position:absolute;
    width:30px;
    height:30px;
    border-radius:99em;
    left:62%;
    top:93%;
    background-color:black;
}
div#play{
    position:absolute;
    width:30px;
    height:30px;
    border-radius:99em;
    left:16%;
    top:69%;
    background-color:black;
}
div#garden{
    position:absolute;
    width:30px;
    height:30px;
    border-radius:99em;
    left:18%;
    top:31%;
    background-color:black;
}
div#tin{
    position:absolute;
    width:30px;
    height:30px;
    border-radius:99em;
    left:65%;
    top:41%;
    background-color:black;
}
a{
    position:absolute;
    left:100%;
}
#cir{
    position:absolute;
    left:-8%;
    top:-6%;
}
#onehun{
    position:absolute;
    left:101%;
    top:97%;
}
div[id*=point]{
    position:absolute;
    width:10px;
    height:10px;
    border-radius:99em;
    background-color:#0fff00;
}
</style>
<script>
    var areaPriority=[<?php echo $_SESSION['restroom'] ?>,<?php echo $_SESSION['chen'] ?>,<?php echo $_SESSION['play'] ?>,<?php echo $_SESSION['garden'] ?>,<?php echo $_SESSION['tin'] ?>];
	var n=<?php echo $_SESSION['fly_num'] ?>;
	//document.write("0="+areaPriority[0]+",1="+areaPriority[1]+",2="+areaPriority[2]+",3="+areaPriority[3]+",4="+areaPriority[4]+",n="+n);
</script>

</head>
<body>
<div id="tables">
有<?php echo $_SESSION['fly_num']?> 隻螢火蟲
<table id="table" border="1">
<button onclick="init()">初始化</button><button onclick="createfly()">產生fireflies</button><button onclick="main()">開始</button><button onclick="renew()">renew</button><button onclick="back()">back</button>
<tr>
<td>NO.</td>
<td>x座標</td>
<td>y座標</td>
<td>初始亮度</td>
<td>最終亮度</td>
</tr>
</table>

</div>

<div id="park">
<p id="cir">(0,0)</p>
<div id="restroom" alt="廁所"><a>廁所</a></div>
<div id="chen" alt="噴泉"><a>噴泉</a></div>
<div id="play" alt="遊樂區"><a>遊樂區</a></div>
<div id="garden" alt="花園"><a>花園</a></div>
<div id="tin" alt="涼亭"><a>涼亭</a></div>
<p id="onehun">(100,100)</p>
</div>

</body>
</html>
