"use strict";

import $ from "jquery";

const Modal = class{
    constructor(element, setting) {
        this.targetClass = {
            open: ".js-modal-open",
            close: ".js-modal-close"
        };
        this.$modalOpen = $(this.targetClass.open);
        this.$modalClose = $(this.targetClass.close);

        this.$modalOpen.on("click", this.open);
        this.$modalClose.on("click", this.close);
    }
    open(ev) {
        const $clickEle = $(ev.currentTarget);
        const targetModalClass = $clickEle.data("modal-target");
        const $targetModal = $(targetModalClass);

        $targetModal.addClass("is-show");
        ev.preventDefault();
    }
    close(ev) {
        const $clickEle = $(ev.currentTarget);
        const targetModalClass = $clickEle.data("modal-target");
        const $targetModal = $(targetModalClass);

        $targetModal.removeClass("is-show");
        ev.preventDefault();
    }
};

module.exports = Modal;
