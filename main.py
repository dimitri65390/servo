angle = 0
servos.P0.set_range(0, 170)

def on_forever():
    global angle
    for index in range(17):
        if index < 15:
            angle = index * 10 + 10
            servos.P0.set_angle(angle)
            basic.pause(100)
        else:
            for index2 in range(16):
                angle += -5
                servos.P0.set_angle(angle)
                basic.pause(100)
basic.forever(on_forever)
