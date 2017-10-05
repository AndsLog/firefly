<?php
session_start();
if(isset($_POST['restroom'])){
    $_SESSION['restroom']=$_POST['restroom'];
    $_SESSION['chen']=$_POST['chen'];
    $_SESSION['play']=$_POST['play'];
    $_SESSION['garden']=$_POST['garden'];
    $_SESSION['tin']=$_POST['tin'];
    $_SESSION['fly_num']=$_POST['fly_num'];
    header("Location: firefly_show.php");
}
?>
<!DOCTYPE html>
<html>
<head>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<style>
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
</style>
<script>
</script>

</head>
<body>
<form id="form" method="post">
<table id="table" name="table">

<tr>
<td>場所權重</td>
</tr>

<tr>
<td>廁所</td><td>(91,32)：</td>
<td><input type="number" id="restroom" name="restroom" min="0" max="10"></td>
</tr>

<tr>
<td>噴泉</td><td>(62,93)：</td>
<td><input type="number" id="chen" name="chen" min="0" max="10"></td>
</tr>

<tr>
<td>遊樂區</td><td>(16,69)：</td>
<td><input type="number" id="play" name="play" min="0" max="10"></td>
</tr>

<tr>
<td>花園</td><td>(18,31)：</td>
<td><input type="number" id="garden" name="garden" min="0" max="10"></td>
</tr>

<tr>
<td>涼亭</td><td>(65,41)：</td>
<td><input type="number" id="tin" name="tin" min="0" max="10"></td>
</tr>
<tr>
<td colspan="2">-------------------------------------</td>
</tr>
<tr>
<td>螢火蟲數量：</td>
<td><input type="number" id="fly_num" name="fly_num" min="20" max="100"></td>
</tr>

<tr>
<td><input type="submit" value="submit"/></td>
</tr>
</table>
</form>

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
