// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`100010000101010101010101010101010101010101010101010404040404010901060801020a0a0a010101010101010a010808010101010a0a0a0a0a0a0a0a0a000808010107010a010101010101010101010a010107010a0a0a0a010a0a0a010a010a01010701010101010101010a010a010a0101070a010a0a0a0a09010a0a0a010a0101010a010a01010101010a010a010a0101010a010a0a0a0a0a0a0a010a010a0101010a010101010101010a010a010a0101010a0a0a0a0a0a0a0a0a0a0a010a010101010101010101010a010a010100010101010101010101010a010a01090a0101090a0a0a0a0a0a0a0a010a050a0a0301010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . 2 . 2 . . 2 
. . . . 2 . 2 2 2 2 2 . 2 . . 2 
2 2 2 . . . . . . . . . 2 . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . 2 . . . 2 
2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 . . . . . . . . 2 . 2 . 2 . 2 
2 2 . 2 . 2 2 2 2 2 . 2 . 2 . 2 
2 2 . 2 . . . . . . . 2 . 2 . 2 
2 2 . 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 2 . . . . . . 2 . . . . 2 . 2 
2 2 2 2 2 . 2 2 2 . 2 . 2 2 2 2 
2 2 2 2 2 . 2 2 2 . 2 . 2 . . 2 
2 . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile5,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.collectibleBlueCrystal,myTiles.tile6,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
