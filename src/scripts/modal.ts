export class Modal {
    constructor() {
        document.querySelectorAll<HTMLElement>('.js-modal-open')
            .forEach(el => el.addEventListener('click', e => this.open(e)));

        document.querySelectorAll<HTMLElement>('.js-modal-close')
            .forEach(el => el.addEventListener('click', e => this.close(e)));
    }

    private open(e: Event): void {
        e.preventDefault();
        const target = (e.currentTarget as HTMLElement).dataset.modalTarget;
        if (target) {
            document.querySelector(target)?.classList.add('is-show');
        }
    }

    private close(e: Event): void {
        e.preventDefault();
        const target = (e.currentTarget as HTMLElement).dataset.modalTarget;
        if (target) {
            document.querySelector(target)?.classList.remove('is-show');
        }
    }
}
