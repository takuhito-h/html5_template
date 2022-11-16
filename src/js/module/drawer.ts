import $ from "jquery";

export default class{
    private setting: {
        target_query : {
            show: string,
            hide: string
        },
        switch_class: string
    };
    private $root_element: any;
    private $show_drawer: any;
    private $hide_drawer: any;
    constructor(element:string, setting) {
        this.setting = {
            "target_query": {
                show: ".js-drawer-show",
                hide: ".js-drawer-hide"
            },
            "switch_class": "is-drawer-active"
        };

        this.$root_element = $(element);
        this.$show_drawer = $(this.setting.target_query.show);
        this.$hide_drawer = $(this.setting.target_query.hide);

        this.$show_drawer.on("click", ev => this.show(ev));
        this.$hide_drawer.on("click", ev => this.hide(ev));
    }
    show(ev) {
        this.$root_element.addClass(this.setting.switch_class);

        ev.preventDefault();
    }
    hide(ev) {
        this.$root_element.removeClass(this.setting.switch_class);

        ev.preventDefault();
    }
}
