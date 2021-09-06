namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Emeny3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Emeny3, function (sprite, otherSprite) {
    game.over(false)
})
function Alien2Spawn () {
    Alien2_list = [
    sprites.create(assets.image`Alien2`, SpriteKind.Enemy2),
    sprites.create(img`
        . . 1 . . . . . 1 . . 
        . . . 1 . . . 1 . . . 
        . . 1 1 1 1 1 1 1 . . 
        . 1 1 . 1 1 1 . 1 1 . 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 . . . . . 1 . 1 
        . . . 1 1 . 1 1 . . . 
        `, SpriteKind.Enemy2),
    sprites.create(img`
        . . 1 . . . . . 1 . . 
        . . . 1 . . . 1 . . . 
        . . 1 1 1 1 1 1 1 . . 
        . 1 1 . 1 1 1 . 1 1 . 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 . . . . . 1 . 1 
        . . . 1 1 . 1 1 . . . 
        `, SpriteKind.Enemy2),
    sprites.create(img`
        . . 1 . . . . . 1 . . 
        . . . 1 . . . 1 . . . 
        . . 1 1 1 1 1 1 1 . . 
        . 1 1 . 1 1 1 . 1 1 . 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 . . . . . 1 . 1 
        . . . 1 1 . 1 1 . . . 
        `, SpriteKind.Enemy2),
    sprites.create(img`
        . . 1 . . . . . 1 . . 
        . . . 1 . . . 1 . . . 
        . . 1 1 1 1 1 1 1 . . 
        . 1 1 . 1 1 1 . 1 1 . 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 . . . . . 1 . 1 
        . . . 1 1 . 1 1 . . . 
        `, SpriteKind.Enemy2),
    sprites.create(img`
        . . 1 . . . . . 1 . . 
        . . . 1 . . . 1 . . . 
        . . 1 1 1 1 1 1 1 . . 
        . 1 1 . 1 1 1 . 1 1 . 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 . . . . . 1 . 1 
        . . . 1 1 . 1 1 . . . 
        `, SpriteKind.Enemy2),
    sprites.create(img`
        . . 1 . . . . . 1 . . 
        . . . 1 . . . 1 . . . 
        . . 1 1 1 1 1 1 1 . . 
        . 1 1 . 1 1 1 . 1 1 . 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 1 1 1 1 1 1 . 1 
        1 . 1 . . . . . 1 . 1 
        . . . 1 1 . 1 1 . . . 
        `, SpriteKind.Enemy2)
    ]
    for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
        Alien2Pos = Alien2Pos + 14
        value.setPosition(5 + Alien2Pos, 32)
    }
}
function Alien1Spawn () {
    Alien1_list = [
    sprites.create(assets.image`Alien1`, SpriteKind.Enemy),
    sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 . 1 1 . 1 1 
        1 1 1 1 1 1 1 1 
        . 1 . 1 1 . 1 . 
        1 . . . . . . 1 
        . 1 . . . . 1 . 
        `, SpriteKind.Enemy),
    sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 . 1 1 . 1 1 
        1 1 1 1 1 1 1 1 
        . 1 . 1 1 . 1 . 
        1 . . . . . . 1 
        . 1 . . . . 1 . 
        `, SpriteKind.Enemy),
    sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 . 1 1 . 1 1 
        1 1 1 1 1 1 1 1 
        . 1 . 1 1 . 1 . 
        1 . . . . . . 1 
        . 1 . . . . 1 . 
        `, SpriteKind.Enemy),
    sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 . 1 1 . 1 1 
        1 1 1 1 1 1 1 1 
        . 1 . 1 1 . 1 . 
        1 . . . . . . 1 
        . 1 . . . . 1 . 
        `, SpriteKind.Enemy),
    sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 . 1 1 . 1 1 
        1 1 1 1 1 1 1 1 
        . 1 . 1 1 . 1 . 
        1 . . . . . . 1 
        . 1 . . . . 1 . 
        `, SpriteKind.Enemy),
    sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 . 1 1 . 1 1 
        1 1 1 1 1 1 1 1 
        . 1 . 1 1 . 1 . 
        1 . . . . . . 1 
        . 1 . . . . 1 . 
        `, SpriteKind.Enemy)
    ]
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        alien1Pos = alien1Pos + 14
        value.setPosition(alien1Pos, 20)
    }
}
function Alien3Spawn () {
    Alien3_list = [
    sprites.create(assets.image`Alien3`, SpriteKind.Emeny3),
    sprites.create(img`
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 . . 1 1 . . . 
        . . 1 1 . 1 1 . 1 1 . . 
        1 1 . . . . . . . . 1 1 
        `, SpriteKind.Emeny3),
    sprites.create(img`
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 . . 1 1 . . . 
        . . 1 1 . 1 1 . 1 1 . . 
        1 1 . . . . . . . . 1 1 
        `, SpriteKind.Emeny3),
    sprites.create(img`
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 . . 1 1 . . . 
        . . 1 1 . 1 1 . 1 1 . . 
        1 1 . . . . . . . . 1 1 
        `, SpriteKind.Emeny3),
    sprites.create(img`
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 . . 1 1 . . . 
        . . 1 1 . 1 1 . 1 1 . . 
        1 1 . . . . . . . . 1 1 
        `, SpriteKind.Emeny3),
    sprites.create(img`
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 . . 1 1 . . . 
        . . 1 1 . 1 1 . 1 1 . . 
        1 1 . . . . . . . . 1 1 
        `, SpriteKind.Emeny3),
    sprites.create(img`
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 . . 1 1 . . . 
        . . 1 1 . 1 1 . 1 1 . . 
        1 1 . . . . . . . . 1 1 
        `, SpriteKind.Emeny3)
    ]
    for (let value of sprites.allOfKind(SpriteKind.Emeny3)) {
        Alien3Pos = Alien3Pos + 14
        value.setPosition(0 + Alien3Pos, 44)
    }
}
function ShootCount () {
    ShootAvaliable += 1
    if (ShootAvaliable <= 1) {
        ShootNow = true
    } else {
        ShootNow = false
    }
    if (ShootAvaliable >= 2) {
        ShootAvaliable = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(20)
    LiveEnemies += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Emeny3, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(10)
    LiveEnemies += -1
})
function EnemiesMovement () {
    alienMovePos += 1
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.x += MoveValue
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
        value.x += MoveValue
    }
    for (let value of sprites.allOfKind(SpriteKind.Emeny3)) {
        value.x += MoveValue
    }
    if (alienMovePos == 0 || alienMovePos == 15) {
        MoveValue = MoveValue * -1
        alienMovePos = alienMovePos * -1
    }
    if (alienMovePos == 0) {
        for (let value of sprites.allOfKind(SpriteKind.Emeny3)) {
            value.y += 5
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
            value.y += 5
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.y += 5
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(30)
    LiveEnemies += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let PlayerShot: Sprite = null
let alienMovePos = 0
let ShootNow = false
let ShootAvaliable = 0
let Alien3Pos = 0
let Alien3_list: Sprite[] = []
let alien1Pos = 0
let Alien1_list: Sprite[] = []
let Alien2Pos = 0
let Alien2_list: Sprite[] = []
let MoveValue = 0
let spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
spaceShip.setPosition(80, 110)
spaceShip.setStayInScreen(true)
Alien1Spawn()
Alien2Spawn()
Alien3Spawn()
MoveValue = 3
let LiveEnemies = 21
info.setScore(0)
let EnemySpeed = 1000
game.onUpdateInterval(5000, function () {
    EnemySpeed += -100
})
forever(function () {
    spaceShip.x += controller.dx(100)
    if (controller.A.isPressed() && ShootNow == true) {
        PlayerShot = sprites.createProjectileFromSprite(img`
            7 
            7 
            7 
            7 
            7 
            `, spaceShip, 0, -50)
        ShootNow = false
        PlayerShot.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (LiveEnemies == 0) {
        game.over(true)
    }
})
game.onUpdateInterval(500, function () {
    ShootCount()
})
game.onUpdateInterval(100, function () {
    EnemiesMovement()
})
