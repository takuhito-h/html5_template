/*
 *  myLibrary.js
 *  
 *  Copyright(c) 2012, Takuhito Hihara
 *  https://github.com/takuhito-h/myLibrary.js
 *  
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/MIT
 */

/*----------------------------------------------------------------------
    console.logが無いブラウザーの場合に、
    エラーが発生しない様にconsole.logに空の関数を設定。
----------------------------------------------------------------------*/
if(!window.console){
    window.console = {
        log: function(){}
    };
}

(function($){

    /*----------------------------------------------------------------------------------

        ユーティリティー

    ----------------------------------------------------------------------------------*/
    $.extend({

        /*----------------------------------------------------------------------
            計算系
        ----------------------------------------------------------------------*/
        oMath: {

            /*----------------------------------------------------------------------
                正の値だと1を返して、負の値だと−1を返す
            ----------------------------------------------------------------------*/
            sgn: function(num){
                return Number(num > 0) - Number(num < 0);
            },

            /*----------------------------------------------------------------------
                先頭にゼロを追加して指定した桁数にする
            ----------------------------------------------------------------------*/
            zeroPadding: function(originInt, zeroVolume){

                var resultVal = null,
                    zeroString = "",
                    originInt = parseInt(originInt, 10);

                for(var i = 1; i < zeroVolume; i++){
                    zeroString = "0" + zeroString;
                }

                // 指定した桁数のゼロと元の数字を足した後、sliceで不要なゼロを削る
                resultVal = (zeroString + originInt).slice(-1 * zeroVolume)

                return resultVal;
                
            }

        },

        /*----------------------------------------------------------------------
            ブラウザ判定系
        ----------------------------------------------------------------------*/
        ieJudge: function(){
            if(!$.support.noCloneEvent && $.support.opacity){
                return 9;
            }else{
                if(!$.support.tbody){
                    if (typeof document.documentElement.style.maxHeight === "undefined"){
                        return 6;
                    }
                    return 7;
                }
                return 8;
            }
            return false;
        },

        iOSJudge: function(){
            var ua = navigator.userAgent;

            if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod')  > -1){
                return true;
            }else{
                return false;
            }
        },

        androidJudge: function(){
            var ua = navigator.userAgent;

            if(ua.indexOf('Android') > -1){
                return true;
            }else{
                return false;
            }
        }

    });

    /*----------------------------------------------------------------------------------

        プラグイン

    ----------------------------------------------------------------------------------*/
    /*----------------------------------------------------------------------
        fadeInのIEバグを修正
    ----------------------------------------------------------------------*/
    $.fn.fadeInDispatch = function(speed, func){
        return this.each(function(){
            var self = this;
            if(!$.support.opacity){
                $.when($(this).show(0, func)).then(function(){
                    self.style.removeAttribute("filter");
                });
            }else if($.iOSJudge()){
                $(this).show(0, func);
            }else{
                $(this).fadeIn(speed, func);
            }
        });
    };

    /*----------------------------------------------------------------------
        fadeOutのIEバグを修正
    ----------------------------------------------------------------------*/
    $.fn.fadeOutDispatch = function(speed, func){
        return this.each(function(){
            if(!$.support.opacity || $.iOSJudge()){
                $(this).hide(0, func);
            }else{
                $(this).fadeOut(speed, func);
            }
        });
    };

    /*----------------------------------------------------------------------
        backgroundPositionを取得したり、設定したりする。
    ----------------------------------------------------------------------*/
    var bgPosMethods = {

        // 取得メソッド
        get: {
            $ele: null,
            bgPosDef: null,
            bgPos: [],

            getVal: function(){

                this.bgPosDef = $(this.$ele).css("backgroundPosition");

                // firefoxの場合backgroundPositionで取得する。
                if(this.bgPosDef){
                    this.bgPosDef = this.bgPosDef.split(" ");
                    this.bgPos["x"] = this.bgPosDef[0];
                    this.bgPos["y"] = this.bgPosDef[1];  
                }else{
                    this.bgPos["x"] = $(this.$ele).css("backgroundPositionX");
                    this.bgPos["y"] = $(this.$ele).css("backgroundPositionY"); 
                }
                
            },

            run: function($ele){
                this.$ele = $ele;

                this.getVal();

                return this.bgPos;
            }
            
        },

        // 設定メソッド
        set: {
            $ele: null,
            data: null,
            dataEnableFlag: "",

            // データに単位を追加する
            dataAddUnit: function(){
                var self = this;

                $.each(this.data, function(i, num){
                    // データに単位がついてない場合、単位をpxに
                    if(String(num).match(/^\d+$/)){
                        self.data[i] = num + "px";
                    }
                });
            },

            judgeXY: function(){
                if(this.data.x !== undefined){
                    this.dataEnableFlag += "x";
                }

                if(this.data.y !== undefined){
                    this.dataEnableFlag += "y";
                }
            },

            setVal: function(){
                var self = this;

                switch(this.dataEnableFlag){
                    case "xy":
                        this.posPoint = this.data.x + " " + this.data.y;
                        this.$ele.each(function(){
                            $(this).css("backgroundPosition", self.posPoint);
                        });
                        break;
                    case "x":
                        this.$ele.each(function(){
                            var yVal = $(this).bgPos().y;
                            self.posPoint = self.data.x + "px " + yVal;

                            $(this).css("backgroundPosition", self.posPoint);
                        });
                        break;
                    case "y":
                        this.$ele.each(function(){
                            var xVal = $(this).bgPos().x;
                            self.posPoint = xVal + " " + self.data.y + "px";

                            $(this).css("backgroundPosition", self.posPoint);
                        });
                        break;
                }
            },

            run: function(data, $ele){
                this.$ele = $ele;
                this.data = data;
                this.dataEnableFlag = "";

                this.dataAddUnit();
                this.judgeXY();
                this.setVal();
            }
        }

    };

    $.fn.bgPos = function(data){

        if(arguments.length === 0){
            return bgPosMethods.get.run(this);
        }else{
            bgPosMethods.set.run(data, this);
            return this;
        }

    };

    /*----------------------------------------------------------------------
        スムーススクロール
        $(ele).scrollAnchors({
            duration [int]: 【スクロール速度】,
            easing [string]: 【イージング関数】
        });
    ----------------------------------------------------------------------*/
    $.fn.scrollAnchors = function(options){

        if(!$.easing.easeInOutQuart)
            $.easing.easeInOutCirc = function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a};

        var settings = {
            duration: "normal",
            easing: "easeInOutCirc"
        };

        if (options)
            $.extend(settings, options);

        return $(this).click(function(eve) {
            eve.preventDefault();

            var targetOffset = $("#" + this.hash.slice(1)).offset(),
                targetTop = targetOffset.top;

            $("html, body").animate({
                scrollTop: targetTop
            }, settings.duration, settings.easing, function(){
                if($.iOSJudge())
                    $(window).trigger("scroll");
            });

        });
    }

    /*----------------------------------------------------------------------
        ロールオーバーやクリックなどのイベントでの画像変更(_onを画像末尾に付与)
        hoverとして使う場合：$(ele).onImgChange("mouseenter mouseleave");
    ----------------------------------------------------------------------*/
    $.fn.onImgChange = function(eventType){

        return this.each(function(){

            var preloadImgMethod = {

                chache: new Image(),
                src: null,
                onSrc: null,
                fileType: null,

                run: function(ele){                  
                    this.src = $(ele).attr("src");
                    this.fileType = this.src.substring(this.src.lastIndexOf("."), this.src.length);
                    this.onSrc = this.src.replace(this.fileType, "_on" + this.fileType);

                    this.chache = this.onSrc;
                }

            };

            $(this).on(eventType, function(){
                var re = new RegExp("_on" + preloadImgMethod.fileType + "$");

                if($(this).attr("src").match(re)){
                    $(this).attr("src", preloadImgMethod.src);
                }else{
                    $(this).attr("src", preloadImgMethod.onSrc);
                }
            });

            preloadImgMethod.run(this);

        });

    };

    /*--------------------------------------------------------------------------------------
        子要素の高さを揃える
        $(fooBox).heightLine();
    --------------------------------------------------------------------------------------*/
    $.fn.heightLine = function(){

        return this.each(function(){
            var $childrenEle = $(this).children(),
                $parentHeight = $(this).height();

            $childrenEle.each(function(){
                var $this = $(this),
                    paddingTB = $this.innerHeight() - $this.height();

                if($parentHeight > $(this).innerHeight()){
                    $(this).height($parentHeight - paddingTB);
                }

            });
            
        });

    };

})(jQuery);

/*----------------------------------------------------------------------
    URLによって実行するスクリプトを切り分ける(カヤック製)

        各URLごとに実行するスクリプトを設定する。
        dispatcher(/url/, function());

        location.pathnameを最後に突っ込む。
        dispatcher(location.pathname);

----------------------------------------------------------------------*/
function dispatcher(path, func){
    dispatcher.path_func = dispatcher.path_func || [];
    if (func) return dispatcher.path_func.push([path, func]);
    for(var i = 0, l = dispatcher.path_func.length; i < l; ++i) { // >
        var func = dispatcher.path_func[i];
        var match = path.match(func[0]);
        match && func[1](match);
    }
}