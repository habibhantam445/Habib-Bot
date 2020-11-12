const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.


Instagram: X
Whatsapp : wa.me/6285156321170

Best regards, HabibHantam.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hy, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

_Creator:_
1. *${prefix}sticker*
2. *${prefix}stickergif*
3. *${prefix}stickergiphy*
4. *${prefix}meme*
5. *${prefix}quotemaker*
6. *${prefix}nulis*

_Islam:_
1. *${prefix}infosurah*
2. *${prefix}surah*
3. *${prefix}tafsir*
4. *${prefix}ALaudio*
5. *${prefix}jsolat*

_18+:_
1. *${prefix}nekopoi*

_Download:_
1. *${prefix}instagram*
2. *${prefix}ytmp3*
3. *${prefix}ytmp4*

_Search Any:_
1. *${prefix}images*
2. *${prefix}sreddit*
3. *${prefix}resep*
4. *${prefix}stalkig*
5. *${prefix}wiki*
6. *${prefix}cuaca*
7. *${prefix}chord*
8. *${prefix}ss*
9. *${prefix}play*
10. *${prefix}whatanime*

_Random Teks:_
1. *${prefix}fakta*
2. *${prefix}pantun*
3. *${prefix}katabijak*
4. *${prefix}quote*

_Random Images:_
1. *${prefix}anime*
2. *${prefix}kpop*
3. *${prefix}memes*

_Lain-lain:_
1. *${prefix}tts*
2. *${prefix}translate*
3. *${prefix}resi*
4. *${prefix}ceklokasi*
5. *${prefix}shortlink*

Tentang Bot:
1. *${prefix}tnc*
2. *${prefix}donasi*
3. *${prefix}ownerbot*
4. *${prefix}join*

XXXXXXXXXXXXXXXXXXXXXXXXXXX
Owner Bot:
. *${prefix}ban* - banned
. *${prefix}bc* - promosi
. *${prefix}leaveall* - keluar semua grup
. *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih,HabibHantam.`
}
