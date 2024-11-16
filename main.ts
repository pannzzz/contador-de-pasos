input.onButtonPressed(Button.A, function () {
    pasos = 0
    basic.showNumber(pasos)
})
let pasos = 0
pasos = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 1500) {
        pasos += 1
        basic.showNumber(pasos)
        basic.pause(300)
    }
})
