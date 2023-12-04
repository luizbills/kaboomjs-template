import kaboom from 'kaboom'
import HelloScene from './scene/hello'
import loadAssets from './assets'

kaboom({})

loadAssets()

scene('hello', HelloScene)

go('hello')
