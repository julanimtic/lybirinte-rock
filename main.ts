scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
tiles.setCurrentTilemap(tilemap`niveau1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 2 2 d d d d d d 2 2 . . . . 
    . . 2 2 d 2 d d 2 d 2 2 . . . . 
    . . 2 2 f d d d d f 2 2 . . . . 
    . . 2 2 d f f f f d 2 2 . . . . 
    8 . . . d d d d d d . . . 8 . . 
    8 8 8 8 8 8 8 f 8 8 8 8 8 8 . . 
    . d d 8 8 8 f 8 8 8 8 d d d . . 
    . d d 8 8 f 8 8 8 8 8 b d d . . 
    . d d 8 8 f 8 8 8 8 8 b d d . . 
    . d d 8 8 8 f 8 8 8 8 b d d . . 
    . . . 8 8 8 f 8 8 8 8 b d d . . 
    . . . 8 8 8 f 8 8 8 8 . . . . . 
    . . . 8 8 8 8 f 8 8 8 . . . . . 
    . . . 8 8 8 8 f 8 8 8 . . . . . 
    . . . 8 8 8 8 f 8 8 8 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
