page("*", function(ctx, next){
    assoview.modules_run();

    next();
});