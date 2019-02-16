# rgbled-microbit
---
This extension supports RGB LED Display board in MakeCode

## Method
---
* Set RGB LED Output data 
```
rgbled.SetLed(r, g, b)
```
* Set Color data
```
rgbled.SetColor(Color)
```
Red
Green
Blue
Yellow
Magenta
Cyan
White
Black

## Example
---
```
basic.forever(function () {
    rgbled.SetColor(Color.Red)
    basic.pause(2000)
    rgbled.SetColor(Color.Green)
    basic.pause(2000)
    rgbled.SetColor(Color.Blue)
    basic.pause(2000)
    rgbled.SetColor(Color.Yellow)
    basic.pause(2000)
    rgbled.SetColor(Color.Magenta)
    basic.pause(2000)
    rgbled.SetColor(Color.Cyan)
    basic.pause(2000)
    rgbled.SetColor(Color.White)
    basic.pause(2000)
    rgbled.SetColor(Color.Black)
    basic.pause(4000)
})
```

## License
MIT

## Supported targets

* for PXT/microbit

