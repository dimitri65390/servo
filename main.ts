let angle = 0
servos.P0.setRange(0, 170)
basic.forever(function on_forever() {
    
    for (let index = 0; index < 17; index++) {
        if (index < 15) {
            angle = index * 10 + 10
            servos.P0.setAngle(angle)
            basic.pause(100)
        } else {
            for (let index2 = 0; index2 < 16; index2++) {
                angle += -5
                servos.P0.setAngle(angle)
                basic.pause(100)
            }
        }
        
    }
})
