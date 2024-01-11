import {model} from './model'
import {templates} from './templates'
import './styles/main.css'


const $site = document.querySelector('#site') // from DOM JQuery selector

model.forEach(block => {


    const toHTML = templates[block.type]
    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})





/*
dolgo
let html = ''
    block.value.forEach(item => {
        html += `
        <div class="col-sm">
            ${item}
        </div>
        `
    })
* */