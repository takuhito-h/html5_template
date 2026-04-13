export class Drawer {
    private readonly switchClass = 'is-drawer-active';

    constructor() {
        document.querySelectorAll<HTMLElement>('.js-drawer-show')
            .forEach(el => el.addEventListener('click', e => this.show(e)));

        document.querySelectorAll<HTMLElement>('.js-drawer-hide')
            .forEach(el => el.addEventListener('click', e => this.hide(e)));
    }

    private show(e: Event): void {
        e.preventDefault();
        document.body.classList.add(this.switchClass);
    }

    private hide(e: Event): void {
        e.preventDefault();
        document.body.classList.remove(this.switchClass);
    }
}
