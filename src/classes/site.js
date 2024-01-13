export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        const toHTML = ''
        model.forEach(block => {

        if (block.toHTML()) {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
            }
        })
    }
}