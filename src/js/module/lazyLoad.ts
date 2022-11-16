import LazyLoadJs from "vanilla-lazyload";

export default class{
    constructor(element:string, setting) {
        const myLazyLoad = new LazyLoadJs({
            container: element
        });
    }
}
