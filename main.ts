let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let right = strip.range(0, 1)
let left = strip.range(1, 1)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        right.showColor(neopixel.colors(NeoPixelColors.Red))
        left.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 0)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        right.showColor(neopixel.colors(NeoPixelColors.Yellow))
        right.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 50)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        left.showColor(neopixel.colors(NeoPixelColors.Yellow))
        left.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50, 50)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(-50, -50)
    }
})
