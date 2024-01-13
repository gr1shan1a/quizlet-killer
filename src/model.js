import image from './assets/image.png'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock, addCardBlock} from './classes/blocks'

const text = `
Всем привет, С Вами <a href="https://www.youtube.com/watch?v=tneGZ6hM76c" target="_blank">Груша
`

export const model = [
    new TitleBlock('Quizlet-Killer', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),



    new ColumnsBlock(
            [
            'Посмотреть свои курсы',
            'Создать тест',
            'Мои тесты',
            'Написать в поддержку'
        ], {
                styles:
                    {
                        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                        padding: '2rem',
                        color: '#fff',
                        'font-weight': 'bold'
                    }
            }
    ),



    new TextBlock(text, {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #34e512)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    ),

    new addCardBlock(text, {
            styles: {
                padding: '2rem',
                'font-weight': 'bold'
            }
        }
    ),

    // new ImageBlock(image, {
    //         styles: {
    //             padding: '2rem 0',
    //             display: 'flex',
    //             'justify-content': 'center'
    //         },
    //         imageStyles: {
    //             width: '500px',
    //             height: 'auto'
    //         },
    //         alt: 'Its a picture'
    //     }
    // ),// '.assets/image.png'



]

// document.getElementById('addCardButton').addEventListener('click', function () {
//     // Assuming your `newcard` is a function that adds a card
//     newcard();
// });