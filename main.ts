let Item = game.createSprite(2, 2)
basic.forever(function () {
    Item.set(LedSpriteProperty.X, (input.acceleration(Dimension.X) + 1024) / 410)
    Item.set(LedSpriteProperty.Y, (input.acceleration(Dimension.Y) + 1024) / 410)
})
