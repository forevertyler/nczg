//颜色设置
var corA = '#ffffff';//图表标题颜色
var corT = '#ffffff';//图表文字颜色
var corL = '#095e97';//图表线颜色
var corB = '#2de6fb';
var corC = '#cfd327';



//字号设置
var fsA = 14;
var fsB = 16;
var fsC = 18;
var fsD = 20;
var fsE = 22;
var fsF = 24;



//主题颜色
var themes = [
    ['#2fe5fb','#e0e413'],//0 数据1左2饼
    ['#da29fe','#d78357','#ed544e','#009de4','#2e58fc','#cfad41','#11d0c9'],//1 数据1中2进度条
    ['#f7b176','#30aad9'],//2 数据1右2柱
    ['#ed861d','#f05f5a','#c5c903','#1ecfc5'],//3 数据2左1饼
    ['#01a8ec','#f39801','#ed544f','#b192ef'],//4 数据2左2饼
    ['#5592fc','#b32ee9','#ffc001','#05c490','#02cfe4','#ee1317','#ffc001'],//5 数据2右2柱
    ['#cfad41','#a977f2','#ed544f','#009ce6','#2d58fc','#11d0c9','#d98257'],//6 数据3右1柱
    ['#16dff9','#c95150','#dd8f51','#11d0c9','#2d58fc','#a977f2'],//7 数据3右2柱
    ['#ffe55a','#0bf2ea','#f45712','#19ee9c','#1886ff','#d473f4','#6600f9','#f48929','#fd302b'],
    ['#f18d1e','#3dbe7d','#01ffff','#fdc0bf','#b192ef','#0387ec','#fffd1f','#fa6046'],
    ['#009ce6','#775ceb','#4cc1f6','#d98257','#ed5351','#11d0c9','#a977f2','#2d58fc','#ceac40'],
    ['#ffd36a','#82fb72','#64e1fd','#6768fe','#c164fa','#ff6a66','#fb8e67','#feae65'],
    //12
    
    ['#c164fa','#00c6ff','#f19611','#6c51fe','#85fe73','#ff6a66'],
    ['#2bb2f6','#18d2d1','#ffd300','#ff6964'],
];



// 数字滚动
// idName id名
// start 开始值
// end 结束值
// dot 小数点位数
// time 时间秒
// separ 分离器
// suffix 后缀
// countMarch('idName',0,1430,0,2,'','');
function countMarch(idName,start,end,dot,time,separ,suffix){
    var myCountUp = {useEasing : true, useGrouping : true, separator : separ, decimal : '.', prefix : '', suffix : suffix };
    var count = new CountUp(idName, start, end, dot, time, myCountUp);
    count.start();
}



// 饼状图定时自动高亮
function pieAutoMouse(shape,shapeChart,time){
    var index = -1;
    var timer = setInterval(function() {
        var dataLength= shape.series[0].data.length;
        // 取消之前高亮的图形
        shapeChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
        });
        index = (index + 1) % dataLength;
        // 高亮当前图形
        shapeChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index
        });
    }, time);
}

layui.use(['table','element'], function(){
var table = layui.table
    ,$ = layui.$;
    var element = layui.element;
$(".dropcnt").click(function(e){
    var ulel = $(this).find("ul");
    var ulshow = ulel.css("display");
    $(".dropcnt ul").not(ulel).hide();
    if(ulshow == "none"){
        $(this).find("ul").slideDown(300);
    }else{
        $(this).find("ul").slideUp(300);
    }
    e.stopPropagation();
});

$(".dropcnt ul li").click(function(e){
    var txt = $(this).text();
    $(this).parent().siblings("span").text(txt);
    $(".dropcnt ul").hide();
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropcnt ul").hide();
});



$(".dropcnt2").click(function(e){
    var ulel = $(this).find("ul");
    var ulshow = ulel.css("display");
    $(".dropcnt2 ul").not(ulel).hide();
    if(ulshow == "none"){
        $(this).find("ul").slideDown(300);
    }else{
        $(this).find("ul").slideUp(300);
    }
    e.stopPropagation();
});

$(".dropcnt2 ul li").click(function(e){
    var txt = $(this).text();
    $(this).parent().siblings("span").text(txt);
    $(".dropcnt2 ul").hide();
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropcnt2 ul").hide();
});



$(".dropcnt3").click(function(e){
    var ulel = $(this).find("ul");
    var ulshow = ulel.css("display");
    $(".dropcnt3 ul").not(ulel).hide();
    if(ulshow == "none"){
        $(this).find("ul").slideDown(300);
    }else{
        $(this).find("ul").slideUp(300);
    }
    e.stopPropagation();
});

$(".dropcnt3 ul li").click(function(e){
    var txt = $(this).text();
    $(this).parent().siblings("span").text(txt);
    $(".dropcnt3 ul").hide();
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropcnt3 ul").hide();
});



$(".dropcnt4").click(function(e){
    var ulel = $(this).find("ul");
    var ulshow = ulel.css("display");
    $(".dropcnt4 ul").not(ulel).hide();
    if(ulshow == "none"){
        $(this).find("ul").slideDown(300);
    }else{
        $(this).find("ul").slideUp(300);
    }
    e.stopPropagation();
});

$(".dropcnt4 ul li").click(function(e){
    var txt = $(this).text();
    $(this).parent().siblings("span").text(txt);
    $(".dropcnt4 ul").hide();
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropcnt4 ul").hide();
});
})
// echarts重新加载
function chartsReset(myCha){
    var opt = myCha.getOption();
    myCha.clear();
    myCha.setOption(opt);
}

// ------------------------------------------------ end