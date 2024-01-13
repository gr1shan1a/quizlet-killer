import {col, css, row, link} from "../utils";

class Block {
    constructor(value, options) {
        // this.type = type
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован обязательно')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }

}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {imageStyles: is, alt ='', styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(link).join('')
        return row(html, css(this.options.styles))
    }

}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }

}

export class addCardBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return `
            <div id="quiz-container">
                <h1>Quizlet-like Website</h1>
            
                <!-- Form to add a new course -->
                <form id="course-form">
                    <label for="course-name">Course Name:</label>
                    <input type="text" id="course-name" required>
                    <button type="button" onclick="addCourse()">Add Course</button>
                </form>
            
                <!-- Card container for displaying cards -->
                <div id="card-container"></div>
            </div>
        `
    }

}

