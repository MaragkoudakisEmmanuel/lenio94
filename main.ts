input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("G A B C5 C5 B A G ", 120)
    music.playMelody("G F F E E E E A ", 120)
    music.playMelody("G F E D D D D E ", 120)
    music.playMelody("F G A G G A A G ", 120)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("MATOYLA+KOSTAS =GAMOS")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Giraffe)
})
