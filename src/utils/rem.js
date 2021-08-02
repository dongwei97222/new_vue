(function(){
    //用此匿名函数来修改字体大小（根据手机设备大小进行修改
    function resize(){
        var baseFontSize=100; //设计稿100像素相当于1rem,750px--7.5rem---各种屏幕的100%的宽度
        var designWidth=1920;//设计稿的宽度
        var width=window.innerWidth//获取屏幕的宽度
        var currentFontSize=(width/designWidth)*baseFontSize;
        document.querySelector('html').style.fontSize=currentFontSize+'px';

    }



    window.onresize=function(){
        resize()
    }
    // 当文档载入时监听修改文字大小
    document.addEventListener('DOMContentLoaded',resize)
}())
