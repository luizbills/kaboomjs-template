export default function big() {
    return {
        id: 'big',
        require: ['scale'],
        add() {
            this.scale = 10
        },
    }
}
