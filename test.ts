basic.forever(function () {
    STEAMDIY.prenderLED(DigitalPin.P0)
    basic.pause(500)
    STEAMDIY.apagarLED(DigitalPin.P0)
    basic.pause(500)
})
