import Bean from '../object/bean'

export default function HelloScene() {
    onKeyPress('escape', () => {
        debug.inspect = !debug.inspect
    })

    // background
    Bean(center())
}
