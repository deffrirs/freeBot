exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

π°  Nama : ${pushname}
#οΈβ£  Nomor : ${sender.split("@")[0]}
β  Waktu : ${time}
π  Serial : ${serialUser}
π₯  Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`*Scraping metadata . . .*`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`JANGAN LUPA INTRO :

β *Ι΄α΄α΄α΄ :*
β *α΄α΄α΄Κ :*
β *Κα΄ΚΚΚ :*
β *Ι’α΄Ι΄α΄α΄Κ :*
β *α΄κ±α΄Κ α΄α΄α΄α΄ :*


ππππππΌ ππΌππΌπ π½πππΌπ ππΌ 
πΏπ ππππ πππ`
      }
exports.leave = () =>{
	return`
 _Akhirnya Beban Group Berkurang Satu_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­ββ¬£ *List Menu*
ββΈγ ${prefix}menu
ββΈγ ${prefix}help
β
β *Download*
ββΈγ ${prefix}play [query]
ββΈγ ${prefix}song [judul lagu]
ββΈγ ${prefix}pinterest [query]
ββΈγ ${prefix}ytmp3 [url]
ββΈγ ${prefix}ytmp4 [url]
ββΈγ ${prefix}tiktok [url]
ββΈγ ${prefix}tiktoknowm [url]
ββΈγ ${prefix}tiktokwm [url]
ββΈγ ${prefix}tiktokaudio [url]
ββΈγ ${prefix}soundcloud [url]
ββΈγ ${prefix}telesticker [url]
β
β *Convert*
ββΈγ ${prefix}tomp3
ββΈγ ${prefix}stiker [video/image]
ββΈγ ${prefix}semoji π
ββΈγ ${prefix}smeme [text]
ββΈγ ${prefix}memegen [text|text2]
ββΈγ ${prefix}fast [video/vn]
ββΈγ ${prefix}tupai [video/vn]
ββΈγ ${prefix}vibra [video/vn]
ββΈγ ${prefix}robot [video/vn]
ββΈγ ${prefix}slow [video/vn]
ββΈγ ${prefix}bass [video/vn]
ββΈγ ${prefix}nightcore [video/vn]
β
β *Education*
ββΈγ ${prefix}nuliskiri [text]
ββΈγ ${prefix}nuliskanan [text]
ββΈγ ${prefix}foliokiri [text]
ββΈγ ${prefix}foliokanan [text]
β
β *Kerang Menu*
ββΈγ ${prefix}apakah [query]
ββΈγ ${prefix}kapankah [query]
ββΈγ ${prefix}bisakah [query]
β
β *Game*
ββΈγ ${prefix}tebakgambar 
β
β *Info*
ββΈγ ${prefix}owner
ββΈγ ${prefix}infobot
ββΈγ ${prefix}sc
β
β *Sound*
ββΈγ ${prefix}sound1
ββΈγ ${prefix}sound2
ββΈγ ${prefix}sound3
ββΈγ ${prefix}sound4
ββΈγ ${prefix}sound5
ββΈγ ${prefix}sound6
ββΈγ ${prefix}sound7
ββΈγ ${prefix}sound8
ββΈγ ${prefix}sound9
ββΈγ ${prefix}sound10
ββΈγ ${prefix}sound11
ββΈγ ${prefix}sound12
ββΈγ ${prefix}sound13
ββΈγ ${prefix}sound14
ββΈγ ${prefix}sound15
ββΈγ ${prefix}sound16
ββΈγ ${prefix}sound17
ββΈγ ${prefix}sound18
ββΈγ ${prefix}sound19
ββΈγ ${prefix}sound20
ββΈγ ${prefix}sound21
ββΈγ ${prefix}sound22
ββΈγ ${prefix}sound23
ββΈγ ${prefix}sound24
ββΈγ ${prefix}sound25
ββΈγ ${prefix}sound26
ββΈγ ${prefix}sound27
ββΈγ ${prefix}sound28
ββΈγ ${prefix}sound29
ββΈγ ${prefix}sound30
ββΈγ ${prefix}sound31
ββΈγ ${prefix}sound32
ββΈγ ${prefix}sound33
ββΈγ ${prefix}sound34
ββΈγ ${prefix}sound35
ββΈγ ${prefix}sound36
ββΈγ ${prefix}sound37
ββΈγ ${prefix}sound38
ββΈγ ${prefix}sound39
ββΈγ ${prefix}sound40
ββΈγ ${prefix}sound41
ββΈγ ${prefix}sound42
ββΈγ ${prefix}sound43
ββΈγ ${prefix}sound44
ββΈγ ${prefix}sound45
ββΈγ ${prefix}sound46
ββΈγ ${prefix}sound47
ββΈγ ${prefix}sound48
ββΈγ ${prefix}sound49
ββΈγ ${prefix}sound50
β
β *Hewan*
ββΈγ ${prefix}fox
ββΈγ ${prefix}dog
ββΈγ ${prefix}cat
ββΈγ ${prefix}panda
ββΈγ ${prefix}panda2
ββΈγ ${prefix}bird
ββΈγ ${prefix}koala
β
β *Owner*
ββΈγ ${prefix}broadcast [text]
ββΈγ ${prefix}leave
ββΈγ >
ββΈγ $
ββΈγ  => 
β
β *Group*
ββΈγ ${prefix}antilink 1 / 0
ββΈγ ${prefix}hidetag [text]
ββΈγ ${prefix}linkgrup
ββΈγ ${prefix}tagall
ββΈγ ${prefix}add @tag
ββΈγ ${prefix}kick @tag
ββΈγ ${prefix}setdesc [text] 
ββΈγ ${prefix}setname [text] 
β°ββ¬£
`
	}
	exports.down = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Download Menu* γ
ββΈγ ${prefix}play [query]
ββΈγ ${prefix}song [judul lagu]
ββΈγ ${prefix}pinterest [query]
ββΈγ ${prefix}ytmp3 [url]
ββΈγ ${prefix}ytmp4 [url]
ββΈγ ${prefix}tiktok [url]
ββΈγ ${prefix}tiktoknowm [url]
ββΈγ ${prefix}tiktokwm [url]
ββΈγ ${prefix}tiktokaudio [url]
ββΈγ ${prefix}soundcloud [url]
ββΈγ ${prefix}telesticker [url]
β°ββ¬£
`
	}
	exports.cov = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Convert Menu* γ
ββΈγ ${prefix}tomp3
ββΈγ ${prefix}stiker [video/image]
ββΈγ ${prefix}semoji π
ββΈγ ${prefix}smeme [text]
ββΈγ ${prefix}memegen [text|text2]
ββΈγ ${prefix}fast [video/vn]
ββΈγ ${prefix}tupai [video/vn]
ββΈγ ${prefix}vibra [video/vn]
ββΈγ ${prefix}robot [video/vn]
ββΈγ ${prefix}slow [video/vn]
ββΈγ ${prefix}bass [video/vn]
ββΈγ ${prefix}nightcore [video/vn]
β°ββ¬£
`
	}
exports.edu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Education Menu* γ
ββΈγ ${prefix}nuliskiri [text]
ββΈγ ${prefix}nuliskanan [text]
ββΈγ ${prefix}foliokiri [text]
ββΈγ ${prefix}foliokanan [text]
β°ββ¬£
`
	}
	exports.game = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Game Menu* γ
ββΈγ ${prefix}tebakgambar
β°ββ¬£
`
	}
exports.inf = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Information Menu* γ
ββΈγ ${prefix}owner
ββΈγ ${prefix}infobot
ββΈγ ${prefix}sc
β°ββ¬£
`
	}
	exports.own = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Owner Menu* γ
ββΈγ ${prefix}broadcast [text]
ββΈγ ${prefix}leave
ββΈγ >
ββΈγ $
ββΈγ  => 
β°ββ¬£
`
	}
	exports.grup = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Group Menu* γ
ββΈγ ${prefix}antilink 1 / 0
ββΈγ ${prefix}hidetag [text]
ββΈγ ${prefix}linkgrup
ββΈγ ${prefix}tagall
ββΈγ ${prefix}add @tag
ββΈγ ${prefix}kick @tag
ββΈγ ${prefix}setdesc [text] 
ββΈγ ${prefix}setname [text] 
β°ββ¬£`
	}
	exports.hwn = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Hewan Menu* γ
ββΈγ ${prefix}fox
ββΈγ ${prefix}dog
ββΈγ ${prefix}cat
ββΈγ ${prefix}panda
ββΈγ ${prefix}panda2
ββΈγ ${prefix}bird
ββΈγ ${prefix}koala
ββ¬£`
	}
	exports.snd = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Sound Menu* γ
ββΈγ ${prefix}sound1
ββΈγ ${prefix}sound2
ββΈγ ${prefix}sound3
ββΈγ ${prefix}sound4
ββΈγ ${prefix}sound5
ββΈγ ${prefix}sound6
ββΈγ ${prefix}sound7
ββΈγ ${prefix}sound8
ββΈγ ${prefix}sound9
ββΈγ ${prefix}sound10
ββΈγ ${prefix}sound11
ββΈγ ${prefix}sound12
ββΈγ ${prefix}sound13
ββΈγ ${prefix}sound14
ββΈγ ${prefix}sound15
ββΈγ ${prefix}sound16
ββΈγ ${prefix}sound17
ββΈγ ${prefix}sound18
ββΈγ ${prefix}sound19
ββΈγ ${prefix}sound20
ββΈγ ${prefix}sound21
ββΈγ ${prefix}sound22
ββΈγ ${prefix}sound23
ββΈγ ${prefix}sound24
ββΈγ ${prefix}sound25
ββΈγ ${prefix}sound26
ββΈγ ${prefix}sound27
ββΈγ ${prefix}sound28
ββΈγ ${prefix}sound29
ββΈγ ${prefix}sound30
ββΈγ ${prefix}sound31
ββΈγ ${prefix}sound32
ββΈγ ${prefix}sound33
ββΈγ ${prefix}sound34
ββΈγ ${prefix}sound35
ββΈγ ${prefix}sound36
ββΈγ ${prefix}sound37
ββΈγ ${prefix}sound38
ββΈγ ${prefix}sound39
ββΈγ ${prefix}sound40
ββΈγ ${prefix}sound41
ββΈγ ${prefix}sound42
ββΈγ ${prefix}sound43
ββΈγ ${prefix}sound44
ββΈγ ${prefix}sound45
ββΈγ ${prefix}sound46
ββΈγ ${prefix}sound47
ββΈγ ${prefix}sound48
ββΈγ ${prefix}sound49
ββΈγ ${prefix}sound50
β°ββ¬£`
	}
	exports.ker = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­βͺγ *Kerang Menu* γ
ββΈγ ${prefix}apakah
ββΈγ ${prefix}kapankah
ββΈγ ${prefix}bisakah
β°ββ¬£
`
	}