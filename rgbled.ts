/**
* RGB LED block
*/
enum Color {
    //% block="Red"
    Red,
    //% block="Green"
    Green,
    //% block="Blue"
    Blue,
    //% block="Yellow"
    Yellow,
    //% block="Cyan"
    Cyan,
    //% block="Magenta"
    Magenta,
    //% block="White"
    White,
    //% block="Black"
    Black,
}

//% weight=90 color=#1eb0f0 icon="\uf0eb" block="RGBLED"
namespace rgbled {

    let colors = [[1023, 0, 0],
    [0, 1023, 0],
    [0, 0, 1023],
    [500, 500, 0],
    [500, 0, 500],
    [0, 500, 500],
    [300, 300, 300],
    [0, 0, 0],
    ];

    /**
     * Set RGB LED Output data 
     * @param r describe parameter here, eg: 1023
     * @param g describe parameter here, eg: 0
     * @param b describe parameter here, eg: 0
     */
    //% block="Set LED R %r|G %g|B %b"
    export function SetLed(r: number, g: number, b: number): void {
        pins.analogWritePin(AnalogPin.P0, r)
        pins.analogWritePin(AnalogPin.P1, g)
        pins.analogWritePin(AnalogPin.P2, b)
    }

    /**
     * Set Color data
     * @param c describe parameter here, eg: Red
     */
    //% block="Set Color %c"
    export function SetColor(c: Color): void {
        let col = colors[c]
        pins.analogWritePin(AnalogPin.P0, col[0])
        pins.analogWritePin(AnalogPin.P1, col[1])
        pins.analogWritePin(AnalogPin.P2, col[2])
    }
} 