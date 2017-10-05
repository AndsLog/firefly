var firefly_x = [];  //螢火蟲x座標
var firefly_y = [];  //螢火蟲y座標
var light = [];  //亮度
var init_light = []; //原始亮度
var area_x = [91,62,16,18,65]; //區域x座標
var area_y = [32,93,69,31,41]; //區域y座標
var number = [];   //半徑內
var generation=20; //最大演化代數
var current_g=1; //目前代數
//areaPriority = []; 區域權重
var change = [];  //陣列儲存半徑r內的點
function randomNumber(n){
	for(var i=0 ; i<n ; i++){
		firefly_x[i] = Math.floor(Math.random()*100); //隨機產生螢火蟲X座標
		firefly_y[i] = Math.floor(Math.random()*100); //隨機產生螢火蟲Y座標
		light[i] = 0; //螢火蟲亮度初始化
	}
}
function searchFirefly(r){	//半徑搜尋
    var fk=0
	var fc=0;
	var n = 0;  //在半徑內的螢火蟲數量總和
	for(var i=0 ; i<firefly_x.length ; i++){		//每一隻螢火蟲
		for(var j=0 ; j<firefly_x.length ; j++){  //與每一隻做比較
			var length= Math.sqrt((firefly_x[i]-firefly_x[j])*(firefly_x[i]-firefly_x[j])+(firefly_y[i]-firefly_y[j])*(firefly_y[i]-firefly_y[j]));
				if(length<r){
					change[n] = j;      //將在半徑範圍內的螢火蟲編號存入change陣列 ex:編號2,編號5,編號7
					number[i] = n;		//在半徑內的螢火蟲數目存入陣列 ex:3隻
					n++;
				}
		}
		if(i==0){
			if(number[i]>=3)
				changePlace(i);	
			else{  //附近都沒有點
				//需討論
				//alert("oh~no nothing"+fc);
				//fc++;
			}
		}
		else{
			if(number[i]- number[i-1] >= 3){
				//換位置
				changePlace(i);	
			}
			else{  //附近都沒有點
				//需討論
				//alert("oh~no nothing"+fk);
				//fk++;
			}
		}
	}
}
function changePlace(i){
	//alert("hi there changePlace");
	var n = number[i]; //第i隻螢火蟲半徑內搜尋到的點數量總和
	var light_index1=-1;//紀錄最亮的螢火蟲是哪隻
	var light_index2=-1;//紀錄最亮的螢火蟲是哪隻
	var good =[]; //比i好的半徑範圍亮度
	if(i==0)
		var j=-1;
	else
		var j = number[i-1];
	for(var k=j+1;k<=n;k++){
		var a=0;
		if(light[i]<light[change[k]]){
		    good[a]=light[change[k]];
	        a++;
		}
	}
	//good.sort();  //排序比自己亮的點
	//alert("X:"+firefly_x[i]+"Y"+firefly_y[i]);
	//for(var i=0;i<good.length;i++)
	    //alert(i+":"+good[i]);
	var qq=Math.random();  //機率
	if(good.length!=0){  //當找到有比自己還亮的點時
		if(qq<0.7){
			for(var h=0;h<=n;h++){  //把
				if(light[change[h]] == good[0])
					light_index1=change[h];
			}		
			good[0]=good[0]+light[i]*0.2;//更新亮度
			light[light_index1]=good[0];
			var com =Math.random()*10; //產生一個1~10的隨機數
			if(com>=8){
				firefly_x[i] = Math.floor(Math.random()*100); //隨機產生螢火蟲X座標
				firefly_y[i] = Math.floor(Math.random()*100); //隨機產生螢火蟲Y座標
				light[i]=f(firefly_x[i],firefly_y[i]);
			}
			else
				light[i]=0;//將暗的螢火蟲亮度設為0
		}
		else{
			for(var h=0;h<=n;h++){
				if(light[change[h]] == good[1])
					light_index2=change[h];
			}		
			good[1]=good[1]+light[i]*0.2;
			light[light_index2]=good[1];
			light[i]=0;
		}
	}
	else{
		/*
		var com =Math.random()*10; //產生一個1~10的隨機數
			if(com>=9){
				firefly_x[i] = Math.floor(Math.random()*100); //隨機產生螢火蟲X座標
				firefly_y[i] = Math.floor(Math.random()*100); //隨機產生螢火蟲Y座標
				light[i]=f(firefly_x[i],firefly_y[i]);
			}*/
		//do nothing
		//討論
	}
	//alert("最亮"+light[light_index1]);
	//alert("X:"+firefly_x[i]+"Y:"+firefly_y[i]+"light:"+light[i]);
	//alert("X: "+firefly_x[light_index1]+" Y: "+firefly_y[light_index1]+" good: "+good[0]+" light[light_index1]:"+light[light_index1]);
	//alert("Danny");
}
function renew(){
    window.location.href = 'firefly_show.php';
}
function back(){
    window.location.href = 'firefly.php';
}
function f(fly_x,fly_y){ //螢火蟲亮度
	var light=0;
	for(var i=0;i<areaPriority.length;i++)
	    light=light+areaPriority[i]*(1/Math.sqrt((fly_x-area_x[i])*(fly_x-area_x[i])+(fly_y-area_y[i])*(fly_y-area_y[i])));
	return light*10;
}
function init(){
    var t=document.getElementById("table");
	for(var i=n-1;i>=0;i--){
	    var row=t.insertRow(1);
		var cell0=row.insertCell(0);
		var cell1=row.insertCell(1);
		var cell2=row.insertCell(2);
		var cell3=row.insertCell(3);
		var cell4=row.insertCell(4);
		var newDiv=document.createElement("div");
		var park=document.getElementById("park");
		cell0.innerHTML=0;
		cell0.setAttribute("id","cell0["+i+"]");
		cell1.innerHTML=0;
		cell1.setAttribute("id","cell1["+i+"]");
		cell2.innerHTML=0;
		cell2.setAttribute("id","cell2["+i+"]");
		cell3.innerHTML=0;
		cell3.setAttribute("id","cell3["+i+"]");
		cell4.innerHTML=0;
		cell4.setAttribute("id","cell4["+i+"]");
		//newDiv.setAttribute("position","absolute");
		newDiv.setAttribute("id","point"+i);
		$("#point"+i).css({"left":0+"%","top":0+"%"});
		//newDiv.setAttribute("width","10px");
		//newDiv.setAttribute("height","10px");
		//newDiv.setAttribute("border-radius","99em");
		//newDiv.setAttribute("left","0%");
		//newDiv.setAttribute("top","0%");
		//newDiv.setAttribute("background-color:","#00ffff");
		park.appendChild(newDiv);
	}
}
function createfly(){
    randomNumber(n);//產生螢火蟲
	for(var i=0;i<firefly_x.length;i++){//計算亮度
        light[i]=f(firefly_x[i],firefly_y[i]);
        init_light[i]=f(firefly_x[i],firefly_y[i]);
	}
    for(var i=firefly_x.length-1;i>=0;i--){
        var cell0=document.getElementById("cell0["+i+"]");
		var cell1=document.getElementById("cell1["+i+"]");
		var cell2=document.getElementById("cell2["+i+"]");
		var cell3=document.getElementById("cell3["+i+"]");
		var cell4=document.getElementById("cell4["+i+"]");
		cell0.innerHTML=i;
		cell1.innerHTML=firefly_x[i];
		cell2.innerHTML=firefly_y[i];
		cell3.innerHTML=light[i];
		cell4.innerHTML=0;
		$("#point"+i).css({"left":firefly_x[i]+"%","top":firefly_y[i]+"%"});
	}
}
function main(){
	var t=document.getElementById("table");
	//while(current_g<=generation){
        searchFirefly(50);  //半徑
		for(var i=firefly_x.length-1;i>=0;i--){
			var cell0=document.getElementById("cell0["+i+"]");
		    var cell1=document.getElementById("cell1["+i+"]");
		    var cell2=document.getElementById("cell2["+i+"]");
            var cell4=document.getElementById("cell4["+i+"]");
			var min_lig=0;
			var size=0;
			cell0.innerHTML=i;
		    cell1.innerHTML=firefly_x[i];
		    cell2.innerHTML=firefly_y[i];
	        cell4.innerHTML=light[i];
			if(light[i]<=0){
			    $("#point"+i).css({"opacity":"0"});
			}
			else{
				if(light[i]>init_light[i]){
					min_lig=light[i]/5;
					size=10+(min_lig*5);
					$("#point"+i).css({"left":firefly_x[i]+"%","top":firefly_y[i]+"%","opacity":"1","width":size+"px","height":size+"px"});
				}
				else{
					$("#point"+i).css({"left":firefly_x[i]+"%","top":firefly_y[i]+"%","opacity":"1"});
				}

			}
	    }
		alert("第"+current_g+"代");
		current_g++;
	//}
}
