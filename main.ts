let distancia = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
soundExpression.giggle.play()
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
    basic.pause(1200)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    basic.pause(1500)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    basic.pause(1200)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    if (distancia < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        soundExpression.spring.play()
        basic.pause(1500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 35)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
