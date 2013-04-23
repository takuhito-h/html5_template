/**
 *  myLibrary.js
 *  --------------
 *  @author: Takuhito Hihara
 *  @since: 2012
 *  @url https://github.com/takuhito-h/myLibrary.js
 *  --------------
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
        log : function(){}
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

                var resultVal  = null,
                    zeroString = "";

                originInt = parseInt(originInt, 10);

                // 指定した桁数のゼロと元の数字を足した後、sliceで不要なゼロを削る
                for(var i = 1; i < zeroVolume; i++){
                    zeroString = "0" + zeroString;
                }

                resultVal = (zeroString + originInt).slice(-1 * zeroVolume);

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
            var fadeThis = this;

            if(!$.support.opacity){
                $.when($(this).show(0, func)).then(function(){
                    fadeThis.style.removeAttribute("filter");
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

    /*--------------------------------------------------------------------------------------
        jQueryプラグイン：リンクのフォーカス時、リンク要素を沈ませるようにする。
        $.setLinkFocusSink();
    --------------------------------------------------------------------------------------*/
    $.setLinkFocusSink = function(){

        $("body").on("mousedown", "a", function(){
            var $this = $(this);

            /*--------------------------------------------------------------------------------------
                positionがstaticか、top or bottomの値が設定されてないか判定
            --------------------------------------------------------------------------------------*/
            if($this.css("position") === "static" || ($this.css("top") === "auto" && $this.css("bottom") === "auto")){
                $this.addClass("focusLink");
            }else{

                /*--------------------------------------------------------------------------------------
                    topが設定されてなかったらbottomが設定されているのでbottomの値を変更、
                    bottomが設定されてなかったらtopが設定されているのでtopの値を設定
                --------------------------------------------------------------------------------------*/
                if($this.css("top") === "auto"){
                    $.data($this, "linkFocusChangeVal", "bottom");
                    $this.css("bottom", "-=1");
                }else{
                    $.data($this, "linkFocusChangeVal", "top");
                    $this.css("top", "+=1");
                }

            }
        }).on("mouseup", "a", function(){
            var $this = $(this);

            if($this.hasClass("focusLink")){
                $this.removeClass("focusLink");
            }else{

                /*--------------------------------------------------------------------------------------
                    data属性のlinkFocusChangeValがtopの値になっているか判定
                --------------------------------------------------------------------------------------*/
                if($.data($this, "linkFocusChangeVal") === "top"){
                    $this.css("top", "");
                }else{
                    $this.css("bottom", "");
                }
                
            }
        });

    };

    /*----------------------------------------------------------------------
        backgroundPositionを取得したり、設定したりする。
    ----------------------------------------------------------------------*/
    var bgPosMethods = {

        // 取得メソッド
        get: {
            $ele     : null,
            bgPosDef : null,
            bgPos    : [],

            _getVal: function(){

                this.bgPosDef = $(this.$ele).css("backgroundPosition");

                // firefoxの場合backgroundPositionで取得する。
                if(this.bgPosDef){
                    this.bgPosDef = this.bgPosDef.split(" ");
                    this.bgPos.x  = this.bgPosDef[0];
                    this.bgPos.y  = this.bgPosDef[1];  
                }else{
                    this.bgPos.x = $(this.$ele).css("backgroundPositionX");
                    this.bgPos.y = $(this.$ele).css("backgroundPositionY"); 
                }
                
            },

            run: function($ele){
                this.$ele = $ele;
                this._getVal();

                return this.bgPos;
            }
            
        },

        // 設定メソッド
        set: {
            $ele           : null,
            data           : null,
            dataEnableFlag : "",

            // データに単位を追加する
            _dataAddUnit: function(){
                var self = this;

                $.each(this.data, $.proxy(function(i, num){
                    // データに単位がついてない場合、単位をpxに
                    if(String(num).match(/^\d+$/)){
                        this.data[i] = num + "px";
                    }
                }, this));
            },

            _judgeXY: function(){
                if(this.data.x !== undefined){
                    this.dataEnableFlag += "x";
                }

                if(this.data.y !== undefined){
                    this.dataEnableFlag += "y";
                }
            },

            _setVal: function(){
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
                            self.data.y = $(this).bgPos().y;
                            this.posPoint = this.data.x + " " + this.data.y;

                            $(this).css("backgroundPosition", self.posPoint);
                        });
                        break;
                    case "y":
                        this.$ele.each(function(){
                            self.data.x = $(this).bgPos().x;
                            this.posPoint = this.data.x + " " + this.data.y;

                            $(this).css("backgroundPosition", self.posPoint);
                        });
                        break;
                }
            },

            run: function($ele, data){
                this.$ele = $ele;
                this.data = data;
                this.dataEnableFlag = "";

                this._dataAddUnit();
                this._judgeXY();
                this._setVal();
            }
        }

    };

    /*----------------------------------------------------------------------
        $.fnにbgPosを追加してjQueryプラグインとして使えるようにする
        $(ele).bgPos() or $(ele).bgPos({ x: Number, y: Number });
    ----------------------------------------------------------------------*/
    $.fn.bgPos = function(data){

        if(arguments.length === 0){
            return bgPosMethods.get.run(this);
        }else{
            bgPosMethods.set.run(this, data);
            return this;
        }

    };

    /*----------------------------------------------------------------------
        スムーススクロール
        $(ele).scrollAnchors({
            speed [int]: 【スクロール速度】,
            easing [string]: 【イージング関数】
        });
    ----------------------------------------------------------------------*/
    $.ScrollAnchors = function(element, options){
        this.settings = $.extend({}, this.settings, options);
        this.$element = $(element);

        this.$element.click($.proxy(this.clickEvent, this));
    };

    $.ScrollAnchors.prototype = {
        settings: {
            speed  : "normal",
            easing : "easeInOutCirc"
        },

        targetOffset : null,
        targetTop    : null,

        $element     : null,

        clickEvent: function(ev){
            ev.preventDefault();

            this.targetOffset = $("#" + this.$element[0].hash.slice(1)).offset();
            this.targetTop    = this.targetOffset.top;
            
            this.scrollAnimate();
        },

        scrollAnimate: function(){

            $("html, body").animate({
                scrollTop: this.targetTop
            }, this.settings.speed, this.settings.easing, function(){
                if($.iOSJudge())
                    $(window).trigger("scroll");
            });
            
        }
    };

    $.fn.scrollAnchors = function(options){

        return this.each(function(){
           new $.ScrollAnchors(this, options);
        });
        
    };

    // easeInOutQuartが存在しない場合設定する。
    if(!$.easing.easeInOutQuart)
        $.easing.easeInOutCirc = function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a};

    /*----------------------------------------------------------------------
        ロールオーバーやクリックなどのイベントでの画像変更(_onを画像末尾に付与)
        $(ele).onImgChange({
            setEvent [string]: 【イベント名】,
            suffix [string]: 【接尾子】
        });
    ----------------------------------------------------------------------*/
    $.OnImgChange = function(element, options){
        this.settings = $.extend({}, this.settings, options);
        this.$element = $(element);

        this._init();
    };

    $.OnImgChange.prototype = {

        settings: {
            setEvent : "mouseenter mouseleave",
            suffix   : "_on"            
        },

        $element  : null,

        imgChache : new Image(),
        imgSrc    : null,
        imgOnSrc  : null,
        fileType  : null,

        matchRe   : null,

        _setImgChache: function(){                  
            this.imgSrc   = this.$element.attr("src");
            this.fileType = this.imgSrc.substring(this.imgSrc.lastIndexOf("."), this.imgSrc.length);
            this.imgOnSrc = this.imgSrc.replace(this.fileType, this.settings.suffix + this.fileType);

            this.imgChache.src = this.imgOnSrc;
            this.matchRe       = new RegExp(this.imgOnSrc + "$");
        },

        _init: function(){

            this.$element.on(this.settings.setEvent, $.proxy(this.setEvent, this));
            this._setImgChache();
            
        },

        setEvent: function(){
            if(this.$element.attr("src").match(this.matchRe)){
                this.$element.attr("src", this.imgSrc);
            }else{
                this.$element.attr("src", this.imgOnSrc);
            }            
        }
    };

    $.fn.onImgChange = function(options){

        return this.each(function(){
            new $.OnImgChange(this, options);
        });

    };

    /*--------------------------------------------------------------------------------------
        子要素の高さを揃える
        $(fooBox).heightLine();
    --------------------------------------------------------------------------------------*/
    $.fn.heightLine = function(){

        return this.each(function(){
            var $childrenEle = $(this).children(),
                parentHeight = $(this).height();

            $childrenEle.each(function(){
                var $childEle = $(this),
                    childInnerHeight = $childEle.innerHeight(),
                    paddingTB = childInnerHeight - $childEle.height();

                // 親要素の高さと子要素の内側の高さを比較して、
                // 親要素の方が高ければ子要素を親要素の内側の高さと同じにする
                if(parentHeight > childInnerHeight){
                    $childEle.height(parentHeight - paddingTB);
                }

            });
            
        });

    };

    /*--------------------------------------------------------------------------------------
        文字列を文字コードにして配列として返す
    --------------------------------------------------------------------------------------*/
    $.returnCharCodeArray = function(convertString){
        var charCodeStringArray = [];

        $.each(convertString, function(val){
            charCodeStringArray.push(convertString.charCodeAt(val));
        });

        return charCodeStringArray;
    };

    /*--------------------------------------------------------------------------------------
        文字コードの配列にしたメールアドレスを要素のhrefに設定する
    --------------------------------------------------------------------------------------*/
    $.fn.setRevertMailAddressLink = function(charCodeMailAddress, textInsertFlag){
        var mailAddress = "";

        $.each(charCodeMailAddress, function(i, val){
            mailAddress += String.fromCharCode(val);
        });
        
        this.attr("href", "mai" + "lto:" + mailAddress);

        if(textInsertFlag)
            this.text(mailAddress);
    };

})(jQuery);

/*----------------------------------------------------------------------
    URLによって実行するスクリプトを切り分ける(カヤック製)

    1. 各URLごとに実行するスクリプトを設定する。
       dispatcher(/url/, function());

    2. location.pathnameを最後に突っ込む。
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