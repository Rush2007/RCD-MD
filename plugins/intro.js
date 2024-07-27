/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                       


*/















// Fork And Edit AS You Wish //

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/DEXTER-BOT-1/RCD-MD' // Source URL
const number = '94789958225'
var name = 'ＴＩＧＥＲ ＭＩＮＤ '
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/9407d0a5c79daa6424f20.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 ᵀᴵᴳᴱᴿ ᴹᴵᴺᴰ 𝗜𝗡𝗧𝗥𝗢  」
│ Name      : ᵀᴵᴳᴱᴿ ᴹᴵᴺᴰ  
│ Place       : 𝗦𝗥𝗜𝗟𝗔𝗡𝗞𝗔
│ Gender    :  𝐌𝐀𝐋𝐄
│ Age          : 17
│ education : 𝗡𝗨𝗟𝗟
│ good vibes : 𝗡𝗨𝗟𝗟
│ Phone     : wa.me/94753335072
│ Youtube   : https://youtube.com/@white_tiger_yt2024?si=meZVOBihH16QXyB6
│ GitHub    : https://github.com

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["wasi","waso"],
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
