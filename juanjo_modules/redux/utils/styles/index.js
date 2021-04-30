export const styles = {
    fonstSize: 20,
    color: {
        prevState: 'lightgray',
        action: 'yellow',
        nextState: 'lightgreen'
    },
    getStyle: function (key) {
        return `font-size: ${this.fonstSize}px; color: ${this.color[key]};`;
    }
}