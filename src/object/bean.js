import big from '../component/big'

export default function Bean({ x = 0, y = 0 }) {
    const object = add([
        pos(x, y),
        area(),
        sprite('bean'),
        anchor('center'),
        scale(),
        big(),
    ])
    return object
}
