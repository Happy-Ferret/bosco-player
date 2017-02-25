import {Player} from 'Player'

// class Frodo implements IPlugin {
//     name: string
//     attach(name)  {
//         this.name = name
//         print('attach flintstone, '+this.name)
//     }
//     detach()  {
//         print('detach flintstone, '+this.name)
//     } 
// }

// define.path('share/bosco')
// let plugin = define.plugin('flintstone', new Frodo()) 
// print('version = '+plugin.version)

// print(JSON.stringify(plugin._context, null, 2))
// plugin.detach()

new Player().application.run(ARGV)
