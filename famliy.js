/**
 * Created by xsy on 2018/5/18.
 */


  //最新活动=====================================
var one = document.getElementById('one');
var two = document.getElementById('two');
var ul1 = document.getElementById('ul1');
var ul2 = document.getElementById('ul2');
var xian = document.getElementById('xian');

var timeid;
two.onclick = function() {
  ul2.style.display = 'block';
  ul1.style.display = 'none';
  two.style.color = '#f60';
  one.style.color = '#999';
  if (timeid) {
    clearInterval(timeid);
  }
  timeid = setInterval(function(){
    var current = xian.offsetLeft;
    var target = current + 5;
    xian.style.left = target + 'px';

    var maxX = 165 - xian.offsetWidth;

    if (target >= maxX) {
      xian.style.left = maxX + 'px';
      clearInterval(timeid);
      //console.log(xian.offsetLeft);
    }

  },15);
  return false;
}

var timeid1
one.onclick = function() {
  ul2.style.display = 'none';
  ul1.style.display = 'block';
  one.style.color = '#f60';
  two.style.color = '#999';
  if(timeid1) {
    clearInterval(timeid1);
  }
  timeid1 = setInterval(function(){
    var current = xian.offsetLeft;
    var target = current - 5;
    xian.style.left = target + 'px';

    var minX = 0;

    if (target <= minX) {
      xian.style.left = minX + 'px';
      clearInterval(timeid1);
    }

  },15);
  return false;
}



//周末趣玩==========================================
  var ul3 = document.getElementById('ul3');
  var li = ul3.getElementsByTagName('li');
  var em = ul3.getElementsByTagName('em');

  var counted = document.getElementById('counted');
  var span = counted.getElementsByTagName('span');


for (var i = 0;i < li.length;i++) {
  em[i].index = i;
  em[i].setAttribute('index', i);

  em[i].onclick = function (){
    for (var i = 0;i < li.length;i++) {
      li[i].style.background = 'url(images/index.png) no-repeat -250px 0px';
      em[i].style.background = 'url(images/index.png) no-repeat 0px -80px';
      em[i].style.color = '#666';
    }

    li[this.index].style.background = 'url(images/index.png) no-repeat -290px 0px';
    em[this.index].style.background = 'url(images/index.png) no-repeat 0px -160px';
    em[this.index].style.color = '#fff';
    var xiaBiao = this.getAttribute('index');

    for(var i = 0;i < span.length;i++) {
      span[i].style.display = 'none';
    }

    span[xiaBiao].style.display = 'block';

  }

  }



//欢乐度假============================================================================



  var tian = document.getElementsByClassName('tian');
  var wang = document.getElementById('siChuan');
  var gai = wang.getElementsByTagName('em');
  var di = wang.getElementsByTagName('li');

  for (var i = 0;i < gai.length;i++){
    gai[i].index = i;

    gai[i].onclick = function(){
      for (var i = 0;i < gai.length;i++) {
        gai[i].style.background = 'url(images/index.png) no-repeat -150px -80px';
        di[i].style.background = 'url(images/index.png) no-repeat -250px -15px';
        gai[i].style.color = '#666';
      }
      gai[this.index].style.background = 'url(images/index.png) no-repeat -150px -160px';
      di[this.index].style.background = 'url(images/index.png) no-repeat -290px -15px';
      this.style.color = '#fff';

      for (var i = 0;i < tian.length;i++) {
        tian[i].style.display = 'none';
      }
      tian[this.index].style.display = 'block';
    }
  }



//热门目的地========================================================================
  var muDi = document.getElementById('muDi');
  var reMen = document.getElementById('reMen');
  var left = document.getElementById('left');
  var right = document.getElementById('right');

  reMen.onmouseenter = function(){
    if (muDi.offsetLeft == 0) {
      right.style.display = 'block';
    }else{
      left.style.display = 'block';
    }
  }

  reMen.onmouseleave = function() {
    right.style.display = 'none';
    left.style.display = 'none';
  }

  right.onmouseenter = function(){
    right.style.display = 'block';
    right.style.background = 'url(images/index.png) no-repeat -360px -50px';
  }
  right.onmouseleave = function(){
    right.style.background = 'url(images/index.png) no-repeat -360px 0px';
  }

  left.onmouseenter = function(){
    left.style.display = 'block';
    left.style.background = 'url(images/index.png) no-repeat -310px -50px';
  }
  left.onmouseleave = function(){
    left.style.background = 'url(images/index.png) no-repeat -310px 0px';
  }

  var timeid;
  right.onclick = function(){
    if (timeid) {
      clearInterval(timeid);
    }
    timeid = setInterval(function(){

        var current = muDi.offsetLeft;
        var target = current - 7;
        //console.log(- target);
        muDi.style.left = target + 'px';

      var minX = - 240;
      if (target < minX) {
        clearInterval(timeid);
        muDi.style.left = minX + 'px';
      }

    },20)
  }

  var timeid1;
  left.onclick = function(){
    if (timeid1){
      clearInterval(timeid1);
    }
    timeid1 = setInterval(function(){

      var current1 = muDi.offsetLeft;
      var target1 = current1 + 7;
      //console.log(- target);
      muDi.style.left = target1 + 'px';

      var manX = 0;
      if (target1 > manX) {
        clearInterval(timeid1);
        muDi.style.left = manX + 'px';
      }

    },20)
  }

//搜索框==================================================================
  var box = document.getElementById('box');
  var box1 = document.getElementById('box1');
  var heZi = document.getElementById('heZi');


  box.onfocus = function(){
    box.style.color = 'rgb(51,51,51)';
    box.style.borderColor = '#f60';
    box.placeholder = '';
    box1.style.backgroundColor = '#f60';
    heZi.style.display = 'none';
  }

  box.onblur = function(){
    box.style.borderColor = '#f90';
    box.placeholder = '输入目的地名称搜索更多亲子周边游产品';
    box1.style.backgroundColor = '';
    heZi.style.display = 'block';
  }


//轮播图=============================================================================


  var lunboTu = document.getElementById('lunboTu');
  var center = document.getElementById('center');
  var liq = center.getElementsByTagName('li');
  var bottom = document.getElementById('bottom');
  var liw = bottom.getElementsByTagName('li');
  var zuo = document.getElementById('zuo');
  var you = document.getElementById('you');

  var timeid;
  var yao = 0;



  lunboTu.onmouseenter = function(){
    zuo.style.display = 'block';
    you.style.display = 'block';
    clearInterval(junJie);
  }
  lunboTu.onmouseleave = function(){
      zuo.style.display = 'none';
      you.style.display = 'none';
    junJie = setInterval(function(){
      you.onclick();
    },3000)
  }

  for(var i = 0; i < liw.length; i++) {
      liw[i].setAttribute('index',i);
      liw[i].onmouseenter = fn;
    fu = setInterval(function(){

    },3000)

    function fn(){
      for(var i = 0; i < liw.length; i++) {
        liw[i].style.background = '';
      }
      this.style.background = 'red';


      var xia = this.getAttribute('index');
      yao = xia;
      //console.log(yao);
      //console.log(xia);
      for(var i = 0; i < liq.length; i++) {
        liq[i].style.display = '';
      }
      liq[xia].style.display = 'block';

      var num = 0;
      if (timeid) clearInterval(timeid);
      timeid = setInterval(function(){
        num += 0.01;
        liq[xia].style.opacity = num;
      },15);
      if (num >= 1){
        clearInterval(timeid);
      }
    }
}

  zuo.onclick = function(){
    if(yao == 0){
      yao = liw.length;
    }
    yao--;
    liw[yao].onmouseenter();
  }

  you.onclick = function(){

    yao++;
    if(yao == liw.length){
      yao = 0;
    }

    liw[yao].onmouseenter();
  }

  var junJie = setInterval(function(){
    you.onclick();
  },3000);




//姚姐======================
  var yaojie = document.getElementById('yaojie');

  window.onscroll = function(){
    var jun = window.innerHeight;
    var bb = jun * 0.9;
    console.log(bb);
    var jie = window.pageYOffset;
    if(jie > bb){
      yaojie.style.display = 'none';
    }else{
      yaojie.style.display = 'block';
    }
  }











