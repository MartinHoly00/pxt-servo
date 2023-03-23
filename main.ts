let servol = servoPWM.createServo(AnalogPin.P1)

input.onButtonPressed(Button.A, function() {
    servol.setPulseBy(-1000)
})

input.onButtonPressed(Button.B, function () {
    servol.setPulseBy(1000)
})

input.onButtonPressed(Button.AB, function () {
    servol.stop()
})