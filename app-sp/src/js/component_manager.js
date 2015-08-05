(function(global){
    "use strict";

    /*------------------------------------------------------------------
        コンポーネントの設定
    ------------------------------------------------------------------*/
    var COMPONENT_DEFS = {
        galleryModal : {
            view     : "galleryModal",
            query    : ".js-gallery-modal-wrapper",
            settings : {}
        },
        slider : {
            view     : "slider",
            query    : ".js-slider",
            settings : {}
        },
        categorySwiper: {
            view     : "categorySwiper",
            query    : ".js-category-swiper",
            settings : {}
        },
        offCanvas: {
            view     : "offCanvas",
            query    : "body",
            settings : {}
        },
        searchBox: {
            view     : "searchBox",
            query    : ".js-search-box",
            settings : {}
        },
        galleryCarousel: {
            view     : "galleryCarousel",
            query    : ".js-gallery-carousel",
            settings : {}
        },
        cateLinebreak: {
            view     : "cateLinebreak",
            query    : ".l-contents",
            settings : {}
        },
        articleTab: {
            view     : "articleTab",
            query    : ".js-article-tab-box",
            settings : {}
        },
        sliderOpacity: {
            view     : "sliderOpacity",
            query    : ".js-sliderOpacity-box",
            settings : {}
        },
        photoVisual: {
            view     : "photoVisual",
            query    : ".js-photo-box",
            settings : {}
        },
        languageMode: {
            view     : "languageMode",
            query    : ".box-brand-index-flagship",
            settings : {}
        },
        heightFix : {
            view     : "heightFix",
            query    : ".l-wrapper",
            settings : {}
        },
        sliderArticle : {
            view     : "sliderArticle",
            query    : ".entry",
            settings : {}
        },
        shortcodeStyling : {
            view     : "shortcodeStyling",
            query    : ".box-shortcode",
            settings : {}
        },
        smoothScroll: {
            view     : "smoothScroll",
            query    : ".l-wrapper",
            settings : {}
        },
        pageinnerScroll : {
            view     : "pageinnerScroll",
            query    : ".js-contents-shoplist",
            settings : {}
        },
        "lazyload" : {
            view     : "lazyload",
            query    : ".js-lazyload",
            settings : {}
        }
    };

    /*------------------------------------------------------------------
        COMPONENT_DEFSを元にviewインスタンスを生成
    ------------------------------------------------------------------*/
    function ComponentsRun(){
        _.each(COMPONENT_DEFS, function(val, name){

            _.each(document.querySelectorAll(val.query), function(element, i){
                new global.openers.view[val.view]({
                    el: element,
                    options: val.settings
                });
            });

        });
    }

    if(global.openers === undefined){
        global.openers = {};
    }

    global.openers.componentsRun = ComponentsRun;

})(window);
