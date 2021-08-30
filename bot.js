const { Telegraf } = require('telegraf')

const bot = new Telegraf('') //сюда помещается токен, который дал botFather

bot.start((ctx) => ctx.reply('Привет, это бот-расписание для ККЭП в групе (ну я напишу), просто напиши нужный день недели и я пришлю тебе все предметы на этот день')) 

bot.help((ctx) => ctx.reply('Чо тут не понятно, я же всё написал ?')) 

bot.on('sticker', (ctx) => ctx.reply('Ты придурок ? Я не понимаю стикеры.'))

bot.hears('Понедельник', (ctx) => ctx.reply('1.Математика   ')) 

bot.hears('Вторник', (ctx) => ctx.reply('1.Математика   ')) 

bot.hears('Среда', (ctx) => ctx.reply('1.Математика   ')) 

bot.hears('Четверг', (ctx) => ctx.reply('1.Математика   ')) 

bot.hears('Пятница', (ctx) => ctx.reply('1.Математика   ')) 

bot.hears('Суббота', (ctx) => ctx.reply('1.Математика   ')) 

bot.hears('Воскресенье', (ctx) => ctx.reply('Ты что дурак ?')) 

bot.launch() 