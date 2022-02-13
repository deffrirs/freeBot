exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

🔰  Nama : ${pushname}
#️⃣  Nomor : ${sender.split("@")[0]}
⌚  Waktu : ${time}
🆒  Serial : ${serialUser}
👥  Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`*Scraping metadata . . .*`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`JANGAN LUPA INTRO :

⊛ *ɴᴀᴍᴀ :*
⊛ *ᴜᴍᴜʀ :*
⊛ *ʜᴏʙʙʏ :*
⊛ *ɢᴇɴᴅᴇʀ :*
⊛ *ᴀꜱᴀʟ ᴋᴏᴛᴀ :*


𝙎𝙀𝙈𝙊𝙂𝘼 𝙆𝘼𝙆𝘼𝙆 𝘽𝙀𝙏𝘼𝙃 𝙔𝘼 
𝘿𝙄 𝙂𝙍𝙐𝙋 𝙄𝙉𝙄`
      }
exports.leave = () =>{
	return`
 _Akhirnya Beban Group Berkurang Satu_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│➸ぁ ${prefix}menu
│➸ぁ ${prefix}help
│
├ *Download*
│➸ぁ ${prefix}play [query]
│➸ぁ ${prefix}song [judul lagu]
│➸ぁ ${prefix}pinterest [query]
│➸ぁ ${prefix}ytmp3 [url]
│➸ぁ ${prefix}ytmp4 [url]
│➸ぁ ${prefix}tiktok [url]
│➸ぁ ${prefix}tiktoknowm [url]
│➸ぁ ${prefix}tiktokwm [url]
│➸ぁ ${prefix}tiktokaudio [url]
│➸ぁ ${prefix}soundcloud [url]
│➸ぁ ${prefix}telesticker [url]
│
├ *Convert*
│➸ぁ ${prefix}tomp3
│➸ぁ ${prefix}stiker [video/image]
│➸ぁ ${prefix}semoji 😎
│➸ぁ ${prefix}smeme [text]
│➸ぁ ${prefix}memegen [text|text2]
│➸ぁ ${prefix}fast [video/vn]
│➸ぁ ${prefix}tupai [video/vn]
│➸ぁ ${prefix}vibra [video/vn]
│➸ぁ ${prefix}robot [video/vn]
│➸ぁ ${prefix}slow [video/vn]
│➸ぁ ${prefix}bass [video/vn]
│➸ぁ ${prefix}nightcore [video/vn]
│
├ *Education*
│➸ぁ ${prefix}nuliskiri [text]
│➸ぁ ${prefix}nuliskanan [text]
│➸ぁ ${prefix}foliokiri [text]
│➸ぁ ${prefix}foliokanan [text]
│
├ *Kerang Menu*
│➸ぁ ${prefix}apakah [query]
│➸ぁ ${prefix}kapankah [query]
│➸ぁ ${prefix}bisakah [query]
│
├ *Game*
│➸ぁ ${prefix}tebakgambar 
│
├ *Info*
│➸ぁ ${prefix}owner
│➸ぁ ${prefix}infobot
│➸ぁ ${prefix}sc
│
├ *Sound*
│➸ぁ ${prefix}sound1
│➸ぁ ${prefix}sound2
│➸ぁ ${prefix}sound3
│➸ぁ ${prefix}sound4
│➸ぁ ${prefix}sound5
│➸ぁ ${prefix}sound6
│➸ぁ ${prefix}sound7
│➸ぁ ${prefix}sound8
│➸ぁ ${prefix}sound9
│➸ぁ ${prefix}sound10
│➸ぁ ${prefix}sound11
│➸ぁ ${prefix}sound12
│➸ぁ ${prefix}sound13
│➸ぁ ${prefix}sound14
│➸ぁ ${prefix}sound15
│➸ぁ ${prefix}sound16
│➸ぁ ${prefix}sound17
│➸ぁ ${prefix}sound18
│➸ぁ ${prefix}sound19
│➸ぁ ${prefix}sound20
│➸ぁ ${prefix}sound21
│➸ぁ ${prefix}sound22
│➸ぁ ${prefix}sound23
│➸ぁ ${prefix}sound24
│➸ぁ ${prefix}sound25
│➸ぁ ${prefix}sound26
│➸ぁ ${prefix}sound27
│➸ぁ ${prefix}sound28
│➸ぁ ${prefix}sound29
│➸ぁ ${prefix}sound30
│➸ぁ ${prefix}sound31
│➸ぁ ${prefix}sound32
│➸ぁ ${prefix}sound33
│➸ぁ ${prefix}sound34
│➸ぁ ${prefix}sound35
│➸ぁ ${prefix}sound36
│➸ぁ ${prefix}sound37
│➸ぁ ${prefix}sound38
│➸ぁ ${prefix}sound39
│➸ぁ ${prefix}sound40
│➸ぁ ${prefix}sound41
│➸ぁ ${prefix}sound42
│➸ぁ ${prefix}sound43
│➸ぁ ${prefix}sound44
│➸ぁ ${prefix}sound45
│➸ぁ ${prefix}sound46
│➸ぁ ${prefix}sound47
│➸ぁ ${prefix}sound48
│➸ぁ ${prefix}sound49
│➸ぁ ${prefix}sound50
│
├ *Hewan*
│➸ぁ ${prefix}fox
│➸ぁ ${prefix}dog
│➸ぁ ${prefix}cat
│➸ぁ ${prefix}panda
│➸ぁ ${prefix}panda2
│➸ぁ ${prefix}bird
│➸ぁ ${prefix}koala
│
├ *Owner*
│➸ぁ ${prefix}broadcast [text]
│➸ぁ ${prefix}leave
│➸ぁ >
│➸ぁ $
│➸ぁ  => 
│
├ *Group*
│➸ぁ ${prefix}antilink 1 / 0
│➸ぁ ${prefix}hidetag [text]
│➸ぁ ${prefix}linkgrup
│➸ぁ ${prefix}tagall
│➸ぁ ${prefix}add @tag
│➸ぁ ${prefix}kick @tag
│➸ぁ ${prefix}setdesc [text] 
│➸ぁ ${prefix}setname [text] 
╰─⬣
`
	}
	exports.down = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Download Menu* 」
│➸ぁ ${prefix}play [query]
│➸ぁ ${prefix}song [judul lagu]
│➸ぁ ${prefix}pinterest [query]
│➸ぁ ${prefix}ytmp3 [url]
│➸ぁ ${prefix}ytmp4 [url]
│➸ぁ ${prefix}tiktok [url]
│➸ぁ ${prefix}tiktoknowm [url]
│➸ぁ ${prefix}tiktokwm [url]
│➸ぁ ${prefix}tiktokaudio [url]
│➸ぁ ${prefix}soundcloud [url]
│➸ぁ ${prefix}telesticker [url]
╰─⬣
`
	}
	exports.cov = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Convert Menu* 」
│➸ぁ ${prefix}tomp3
│➸ぁ ${prefix}stiker [video/image]
│➸ぁ ${prefix}semoji 😎
│➸ぁ ${prefix}smeme [text]
│➸ぁ ${prefix}memegen [text|text2]
│➸ぁ ${prefix}fast [video/vn]
│➸ぁ ${prefix}tupai [video/vn]
│➸ぁ ${prefix}vibra [video/vn]
│➸ぁ ${prefix}robot [video/vn]
│➸ぁ ${prefix}slow [video/vn]
│➸ぁ ${prefix}bass [video/vn]
│➸ぁ ${prefix}nightcore [video/vn]
╰─⬣
`
	}
exports.edu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Education Menu* 」
│➸ぁ ${prefix}nuliskiri [text]
│➸ぁ ${prefix}nuliskanan [text]
│➸ぁ ${prefix}foliokiri [text]
│➸ぁ ${prefix}foliokanan [text]
╰─⬣
`
	}
	exports.game = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Game Menu* 」
│➸ぁ ${prefix}tebakgambar
╰─⬣
`
	}
exports.inf = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Information Menu* 」
│➸ぁ ${prefix}owner
│➸ぁ ${prefix}infobot
│➸ぁ ${prefix}sc
╰─⬣
`
	}
	exports.own = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Owner Menu* 」
│➸ぁ ${prefix}broadcast [text]
│➸ぁ ${prefix}leave
│➸ぁ >
│➸ぁ $
│➸ぁ  => 
╰─⬣
`
	}
	exports.grup = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Group Menu* 」
│➸ぁ ${prefix}antilink 1 / 0
│➸ぁ ${prefix}hidetag [text]
│➸ぁ ${prefix}linkgrup
│➸ぁ ${prefix}tagall
│➸ぁ ${prefix}add @tag
│➸ぁ ${prefix}kick @tag
│➸ぁ ${prefix}setdesc [text] 
│➸ぁ ${prefix}setname [text] 
╰─⬣`
	}
	exports.hwn = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Hewan Menu* 」
│➸ぁ ${prefix}fox
│➸ぁ ${prefix}dog
│➸ぁ ${prefix}cat
│➸ぁ ${prefix}panda
│➸ぁ ${prefix}panda2
│➸ぁ ${prefix}bird
│➸ぁ ${prefix}koala
└⬣`
	}
	exports.snd = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Sound Menu* 」
│➸ぁ ${prefix}sound1
│➸ぁ ${prefix}sound2
│➸ぁ ${prefix}sound3
│➸ぁ ${prefix}sound4
│➸ぁ ${prefix}sound5
│➸ぁ ${prefix}sound6
│➸ぁ ${prefix}sound7
│➸ぁ ${prefix}sound8
│➸ぁ ${prefix}sound9
│➸ぁ ${prefix}sound10
│➸ぁ ${prefix}sound11
│➸ぁ ${prefix}sound12
│➸ぁ ${prefix}sound13
│➸ぁ ${prefix}sound14
│➸ぁ ${prefix}sound15
│➸ぁ ${prefix}sound16
│➸ぁ ${prefix}sound17
│➸ぁ ${prefix}sound18
│➸ぁ ${prefix}sound19
│➸ぁ ${prefix}sound20
│➸ぁ ${prefix}sound21
│➸ぁ ${prefix}sound22
│➸ぁ ${prefix}sound23
│➸ぁ ${prefix}sound24
│➸ぁ ${prefix}sound25
│➸ぁ ${prefix}sound26
│➸ぁ ${prefix}sound27
│➸ぁ ${prefix}sound28
│➸ぁ ${prefix}sound29
│➸ぁ ${prefix}sound30
│➸ぁ ${prefix}sound31
│➸ぁ ${prefix}sound32
│➸ぁ ${prefix}sound33
│➸ぁ ${prefix}sound34
│➸ぁ ${prefix}sound35
│➸ぁ ${prefix}sound36
│➸ぁ ${prefix}sound37
│➸ぁ ${prefix}sound38
│➸ぁ ${prefix}sound39
│➸ぁ ${prefix}sound40
│➸ぁ ${prefix}sound41
│➸ぁ ${prefix}sound42
│➸ぁ ${prefix}sound43
│➸ぁ ${prefix}sound44
│➸ぁ ${prefix}sound45
│➸ぁ ${prefix}sound46
│➸ぁ ${prefix}sound47
│➸ぁ ${prefix}sound48
│➸ぁ ${prefix}sound49
│➸ぁ ${prefix}sound50
╰─⬣`
	}
	exports.ker = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭◪「 *Kerang Menu* 」
│➸ぁ ${prefix}apakah
│➸ぁ ${prefix}kapankah
│➸ぁ ${prefix}bisakah
╰─⬣
`
	}