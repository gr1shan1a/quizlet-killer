import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class SideBar {
    constructor(selector, updateCallBack) {
        this.$el = document.querySelector(selector)
        this.update = updateCallBack

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)

        this.$el.addEventListener('submit', this.add.bind(this)) // привязать контекст
    }


    get template() { // шаблон
        return [
        block('text'),
        block('title')
    ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        // debugger

        let newBlock = type === 'text'
        ? new TextBlock(value, {styles})
        : new TitleBlock(value, {styles})


        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }


}

