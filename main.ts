input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.pause(100)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        for (let index = 0; index < 2; index++) {
            led.setBrightness(62)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            led.setBrightness(146)
            basic.showIcon(IconNames.SmallDiamond)
            led.setBrightness(228)
            basic.showIcon(IconNames.Diamond)
        }
        led.setBrightness(255)
        basic.showIcon(IconNames.Diamond)
        for (let index = 0; index < 2; index++) {
            led.setBrightness(179)
            basic.showLeds(`
                . # . . .
                # # # . .
                . # . . .
                . . . . .
                . . . . .
                `)
            led.setBrightness(212)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            led.setBrightness(241)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                . . # # #
                . . . # .
                `)
            led.setBrightness(255)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                # . # . .
                `)
        }
        led.setBrightness(187)
        images.createBigImage(`
            . # . . . . . . . .
            # # # . . . . . . .
            . # . . . . # . # .
            . . . . . . . # . .
            . . . . . . # . # .
            `).scrollImage(1, 290)
        led.setBrightness(165)
        images.createBigImage(`
            . # . # . . . . . .
            . . # . . . . . . .
            . # . # . . . . # .
            . . . . . . . # # #
            . . . . . . . . # .
            `).scrollImage(1, 290)
        led.setBrightness(255)
        images.createBigImage(`
            . . # . . . . . . .
            . # # # . . # . # .
            . . # . . . . # . .
            . . . . . . # . # .
            . . . . . . . . . .
            `).scrollImage(1, 290)
        basic.showIcon(IconNames.Diamond)
    }
})
