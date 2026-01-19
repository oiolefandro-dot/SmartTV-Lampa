(function() {
    'use strict';

    function SmartTV_Plugin() {
        // --- НАСТРОЙКИ И ДАННЫЕ ПЛАГИНА ---
        var manifest = {
            name: 'Smart TV Полный',
            version: '2.0',
            description: 'Все каналы из Smart TV плейлиста',
            component: 'smart_tv_plugin', // ID компонента для меню
        };

        // Ваш список каналов
        var data_groups = [
            {
                title: '🇷🇺 Эфирные каналы',
                channels: [
                    { name: 'Первый HD', url: 'https://cdn10.1internet.tv/dash-live12/streams/1tv/1tvdash.mpd', logo: 'http://epg.it999.ru/img2/983.png' },
                    { name: 'Россия HD', url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls2/russia_hd/playlist_6.m3u8', logo: 'http://epg.it999.ru/img2/984.png' },
                    { name: 'НТВ HD', url: 'https://ntv-hls-orig.cdnvideo.ru/ntv0_hd/tracks-v1a1/mono.m3u8', logo: 'http://epg.it999.ru/img2/2001.png' },
                    { name: 'ТВ Центр HD', url: 'http://hls.peers.tv/streaming/tvc_hd/126/copy/playlist.m3u8?token=d680c0c502834299a358e0c1783e9f94&client=97', logo: 'http://epg.it999.ru/img2/649.png' },
                    { name: 'ТВ Центр', url: 'http://flu.ttk.mx:9090/TVC/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/649.png' },
                    { name: 'НТВ Стиль', url: 'https://ntv-hls-orig.cdnvideo.ru/th_style/index.m3u8', logo: 'http://epg.it999.ru/img2/1755.png' },
                    { name: 'РЕН ТВ', url: 'http://flu.ttk.mx:9090/REN_TV/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Мир HD', url: 'https://hls-mirtv.cdnvideo.ru/mirtv-parampublish/mirtv_2500/tracks-v1a1/mono.m3u8', logo: 'http://epg.it999.ru/img2/726.png' },
                    { name: 'Звезда HD', url: 'https://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist_hdhigh.m3u8', logo: 'http://epg.it999.ru/img2/405.png' },
                    { name: 'СТС', url: 'http://flu.ttk.mx:9090/STS/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/79.png' },
                    { name: 'Домашний', url: 'http://flu.ttk.mx:9090/Domashni/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/304.png' },
                    { name: 'Ю', url: 'http://flu.ttk.mx:9090/U/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/898.png' },
                    { name: 'Суббота! HD', url: 'https://bl.uma.media/live/317845/HLS/4614144_3/1/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2288.png' },
                    { name: 'Первый канал Евразия', url: 'http://stream.euroasia.lfstrm.tv/perviy_evrasia/1/index.m3u8', logo: 'http://epg.it999.ru/img2/983.png' },
                    { name: 'РЖД ТВ HD', url: 'http://hls.tva.cdnvideo.ru/tva/tvahd.sdp/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2471.png' },
                    { name: 'Россия-Культура', url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls/russia_k/playlist_3.m3u8', logo: 'http://epg.it999.ru/img2/187.png' },
                    { name: 'Россия-24', url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls/russia_24/playlist_3.m3u8', logo: 'http://epg.it999.ru/img2/1683.png' },
                    { name: 'Мир 24', url: 'https://hls-mirtv.cdnvideo.ru/mirtv-parampublish/mir24_2500/tracks-v1a1/mono.m3u8', logo: 'http://epg.it999.ru/img2/2078.png' },
                    { name: 'Москва 24', url: 'https://radio-live-mg.rtr-vesti.ru/hls/moscow_24/playlist.m3u8', logo: 'http://epg.it999.ru/img2/334.png' },
                    { name: 'Известия HD', url: 'http://hls-igi.cdnvideo.ru/igi/igi_sq/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2271.png' },
                    { name: 'РБК ТВ', url: 'http://online.video.rbc.ru/online/rbctv_576p/index.m3u8', logo: 'http://epg.it999.ru/img2/743.png' }
                ]
            },
            {
                title: '🌏 Познавательные',
                channels: [
                    { name: 'Глазами туриста', url: 'https://livetv.mylifeisgood.ml/channels/glazamiturista.m3u8', logo: 'http://epg.it999.ru/img2/2508.png' },
                    { name: 'Discovery HD', url: 'https://livetv.mylifeisgood.ml/channels/discovery.m3u8', logo: 'http://epg.it999.ru/img2/1612.png' },
                    { name: 'Discovery Science HD', url: 'https://livetv.mylifeisgood.ml/channels/discoveryscience.m3u8', logo: 'http://epg.it999.ru/img2/3067.png' },
                    { name: 'Investigation Discovery HD', url: 'https://livetv.mylifeisgood.ml/channels/discoveryxtra.m3u8', logo: 'http://epg.it999.ru/img2/2507.png' },
                    { name: 'Animal Planet HD', url: 'https://livetv.mylifeisgood.ml/channels/animalplanethd', logo: 'http://epg.it999.ru/img2/990.png' },
                    { name: 'Моя планета', url: 'http://cdnmg.secure.live.rtr-vesti.ru/live/smil:mplan.smil/chunklist_b1600000.m3u8', logo: 'http://epg.it999.ru/img2/675.png' },
                    { name: 'Телепутешествия', url: 'http://92.43.140.249/s71/index.m3u8', logo: 'http://epg.it999.ru/img2/2424.png' },
                    { name: 'В мире животных HD', url: 'http://hls.peers.tv/streaming/animal_family_hd/16/tvrec/playlist.m3u8?token=d680c0c502834299a358e0c1783e9f94&client=97', logo: 'http://epg.it999.ru/img2/2498.png' },
                    { name: 'Диалоги о рыбалке', url: 'http://hls.peers.tv/streaming/dialogi_o_rybalke/16/vh1w/playlist.m3u8?token=d680c0c502834299a358e0c1783e9f94&client=97', logo: 'http://epg.it999.ru/img2/2627.png' },
                    { name: 'Рыболов', url: 'http://92.43.140.249/s55/index.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Зоо ТВ', url: 'http://92.43.140.249/s92/index.m3u8', logo: 'http://epg.it999.ru/img2/2431.png' },
                    { name: 'Приключения', url: 'http://92.43.140.249/s99/index.m3u8', logo: 'http://epg.it999.ru/img2/2311.png' },
                    { name: 'Первый космический', url: 'http://92.43.140.249/s44/index.m3u8', logo: 'http://epg.it999.ru/img2/2310.png' }
                ]
            },
            {
                title: '⛹️ Спортивные',
                channels: [
                    { name: 'Старт', url: 'https://livetv.mylifeisgood.ml/channels/startlive', logo: 'https://iptvxcdn.ml/start.png' },
                    { name: 'SETANTA SPORTS 1 HD', url: 'https://livetv.mylifeisgood.ml/channels/setantahd', logo: 'http://epg.it999.ru/img2/2812.png' },
                    { name: 'Setanta Sports 2 HD', url: 'https://livetv.mylifeisgood.ml/channels/setantaplus', logo: 'http://epg.it999.ru/img2/2813.png' },
                    { name: 'Eurosport 1 HD', url: 'https://livetv.mylifeisgood.ml/channels/eurosport1ru', logo: 'http://epg.it999.ru/img2/2052.png' },
                    { name: 'Eurosport 2 HD', url: 'https://livetv.mylifeisgood.ml/channels/eurosport2', logo: 'http://epg.it999.ru/img2/4313.png' },
                    { name: 'Viasat Sport HD', url: 'http://bl.uma.media/live/485548/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2004.png' },
                    { name: 'Спортивный HD', url: 'https://live-k2302-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8', logo: 'https://antifriztv.com/storage/images/pack_logos/51de7a32b761165b4e7ac15866b2af76.png' },
                    { name: 'Телеканал Футбол', url: 'http://flu.ttk.mx:9090/Futbol/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/2782.png' }
                ]
            },
            {
                title: '📽️ Фильмовые',
                channels: [
                    { name: 'Hollywood HD', url: 'http://46.19.100.174:4450/play/a005/index.m3u8', logo: 'http://epg.it999.ru/img2/934.png' },
                    { name: 'Кино ТВ HD', url: 'https://livetv.mylifeisgood.ml/channels/kinotvst.m3u8', logo: 'http://epg.it999.ru/img2/2506.png' },
                    { name: 'ViP Comedy HD', url: 'https://bl.uma.media/live/485539/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2823.png' },
                    { name: 'VIP Megahit HD', url: 'https://bl.uma.media/live/485537/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2824.png' },
                    { name: 'VIP Premiere HD', url: 'https://bl.uma.media/live/485536/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2822.png' },
                    { name: 'ViP Serial HD', url: 'https://bl.uma.media/live/485540/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/2838.png' },
                    { name: 'TV 1000 HD', url: 'https://bl.uma.media/live/485542/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/3302.png' },
                    { name: 'TV 1000 Action HD', url: 'https://bl.uma.media/live/485541/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/3301.png' },
                    { name: 'TV 1000 Русское кино HD', url: 'https://bl.uma.media/live/485543/HLS/4614144_3/2/1/playlist.m3u8', logo: 'http://epg.it999.ru/img2/3303.png' },
                    { name: 'НТВ-ХИТ', url: 'https://ntv-hls-orig.cdnvideo.ru/th_hit/index.m3u8', logo: 'http://epg.it999.ru/img2/2041.png' },
                    { name: 'НТВ Сериал', url: 'https://ntv-hls-orig.cdnvideo.ru/th_serial/index.m3u8', logo: 'http://epg.it999.ru/img2/1754.png' },
                    { name: 'НТВ Право', url: 'https://ntv-hls-orig.cdnvideo.ru/th_pravo/index.m3u8', logo: 'http://epg.it999.ru/img2/1753.png' },
                    { name: 'BackusTV', url: 'https://stream.backustv.ru/live/btv/index.m3u8', logo: 'http://epg.it999.ru/img2/4770.png' },
                    { name: 'BackusTV Страшное', url: 'https://stream.backustv.ru/live/btv2/index.m3u8', logo: 'http://epg.it999.ru/img2/4662.png' },
                    { name: 'НСТ', url: 'https://m3ut.net/p/982815674/1/45', logo: 'http://epg.it999.ru/img2/518.png' },
                    { name: 'Киноужас', url: 'http://ott-cdn.ucom.am/s87/index.m3u8', logo: 'http://epg.it999.ru/img2/2493.png' },
                    { name: 'A1', url: 'http://92.43.140.249/s45/index.m3u8', logo: 'http://epg.it999.ru/img2/1371.png' },
                    { name: 'A2', url: 'http://92.43.140.249/s33/index.m3u8', logo: 'http://epg.it999.ru/img2/918.png' },
                    { name: 'A HOME OF HBO', url: 'http://92.43.140.249/s64/index.m3u8', logo: 'http://epg.it999.ru/img2/1372.png' },
                    { name: 'TV XXI', url: 'http://flu.ttk.mx:9090/TV21/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/309.png' },
                    { name: 'Киносемья', url: 'http://flu.ttk.mx:9090/Kinosemia/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/3297.png' },
                    { name: 'Кинопремьера HD', url: 'http://flu.ttk.mx:9090/Kinopremiera/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/566.png' },
                    { name: 'Победа', url: 'http://flu.ttk.mx:9090/Pobeda/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/2771.png' },
                    { name: 'Кинопоказ', url: 'http://flu.ttk.mx:9090/kinopokaz/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/2834.png' },
                    { name: 'Еврокино', url: 'http://flu.ttk.mx:9090/Evrokino/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/352.png' },
                    { name: 'Cinema', url: 'http://flu.ttk.mx:9090/Cinema/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/2549.png' },
                    { name: 'Иллюзион +', url: 'http://flu.ttk.mx:9090/Illuzion+/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/2403.png' },
                    { name: 'Дом Кино', url: 'http://flu.ttk.mx:9090/Dom_kino/index.m3u8?token=orh6o', logo: 'http://epg.it999.ru/img2/834.png' },
                    { name: 'Bollywood HD', url: 'http://46.19.100.174:4450/play/a00h/index.m3u8', logo: 'http://epg.it999.ru/img2/1395.png' },
                    { name: 'Свежаки', url: 'https://edge-01.kino.watch/fresh/index.m3u8', logo: 'http://epg.it999.ru/img2/2952.png' },
                    { name: 'Ужастик', url: 'https://edge-01.kino.watch/horror/index.m3u8', logo: 'http://epg.it999.ru/img2/2952.png' },
                    { name: 'Уже видел', url: 'https://edge-01.kino.watch/hit/index.m3u8', logo: 'http://epg.it999.ru/img2/2952.png' }
                ]
            },
            {
                title: '🎵 Музыкальные',
                channels: [
                    { name: 'Муз ТВ', url: 'http://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8', logo: 'http://epg.it999.ru/img2/897.png' },
                    { name: 'Ocko', url: 'http://ocko-live.ssl.cdn.cra.cz/channels/ocko/playlist/cze/live_hq.m3u8', logo: 'https://tv2club.com/wp-content/uploads/2020/12/cz-ocko-8142.jpg' },
                    { name: 'Ocko Expres', url: 'http://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist/cze/live_hq.m3u8', logo: 'https://photos.live-tv-channels.org/tv-logo/cz-ocko-expres-6319.jpg' },
                    { name: 'Ocko Star', url: 'http://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist/cze/live_hq.m3u8', logo: 'https://photos.live-tv-channels.org/tv-logo/cz-ocko-star-6827.jpg' },
                    { name: 'RITSA TV', url: 'https://live.prd.dlive.tv/hls/live/fila007.m3u8', logo: 'https://ritsatv.ru/files/poster/medium/300102.jpg' },
                    { name: 'M2 HD', url: 'http://live.m2.tv/hls3/720/stream.m3u8', logo: 'https://seeklogo.com/images/M/M2-logo-719227FCEC-seeklogo.com.png' },
                    { name: 'Первый Музыкальный RU', url: 'http://rtmp.one.by:2200', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Cy3fsuLzaorl2j4CbpaREwtomc_sd6DlMg&usqp=CAU' },
                    { name: 'Первый Музыкальный RU HD', url: 'http://rtmp.one.by:2300', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Cy3fsuLzaorl2j4CbpaREwtomc_sd6DlMg&usqp=CAU' },
                    { name: 'Первый Музыкальный BY', url: 'http://rtmp.one.by:1200', logo: 'https://online-red.com/images/tv/one-hd.png' },
                    { name: 'Первый Музыкальный BY HD', url: 'http://rtmp.one.by:1300', logo: 'https://online-red.com/images/tv/one-hd.png' },
                    { name: 'VIVA TV', url: 'https://live.prd.dlive.tv/hls/live/viva-russia.m3u8', logo: 'https://sat-one.info/news-imeg/58892.jpg' },
                    { name: 'Страна FM', url: 'http://live.stranafm.cdnvideo.ru/stranafm/stranafm_hd.sdp/chunklist.m3u8', logo: 'https://online-red.com/images/radio-logo/strana-fm.png' },
                    { name: 'Шансон-ТВ', url: 'http://hls-shansontv.cdnvideo.ru/shansontv/shansontv.sdp/playlist.m3u8', logo: 'https://epg.iptvx.one/icn/shanson-tv.png' },
                    { name: 'Radio Шансон-ТВ', url: 'http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live.m3u8', logo: 'https://epg.iptvx.one/icn/shanson-tv.png' },
                    { name: 'RU.TV', url: 'https://hls-03-video.webcaramba.com/rutv/live_720/index.m3u8', logo: 'http://epg.it999.ru/img/2277.png' },
                    { name: 'Kronehit TV', url: 'http://bitcdn-kronehit.bitmovin.com/v2/hls/chunklist_b1628000.m3u8', logo: 'https://smotrimkino.vip/uploads/posts/2019-07/1564013659_kronehit.jpg' },
                    { name: 'Mooz Dance', url: 'http://db2-archive.teleon.tv/m3u/m3u.php?ch=moozdance', logo: 'https://mooz.tv/site/img/mooz-dance.jpg' },
                    { name: 'Mooz RO', url: 'http://db2-archive.teleon.tv/m3u/m3u.php?ch=moozro', logo: 'https://upload.wikimedia.org/wikipedia/ro/5/50/Dolce_mooz_ro.png' },
                    { name: 'Mooz HITS', url: 'http://db2-archive.teleon.tv/m3u/m3u.php?ch=moozhits', logo: 'https://mooz.tv/site/img/mooz-hits.jpg' }
                ]
            },
            {
                title: '📺 WINK + Архив',
                channels: [
                    { name: 'Ultra HD Cinema 4K', url: 'http://zabava-htlive.cdn.ngenix.net/hls/CH_ULTRAHDCINEMA/variant.m3u8', logo: 'http://epg.it999.ru/img2/2743.png' },
                    { name: 'Russian Extreme UHD', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_RUSSIANEXTREMEULTRA/variant.m3u8', logo: 'http://epg.it999.ru/img2/2803.png' },
                    { name: 'Первый', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_1TVSD/variant.m3u8', logo: 'http://epg.it999.ru/img2/146.png' },
                    { name: 'Россия 1', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_RUSSIA1/variant.m3u8', logo: 'http://epg.it999.ru/img2/711.png' },
                    { name: 'НТВ', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_NTV/variant.m3u8', logo: 'http://epg.it999.ru/img2/162.png' },
                    { name: 'РЕН ТВ', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_RENTV/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'СТС', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_STS/variant.m3u8', logo: 'http://epg.it999.ru/img2/79.png' },
                    { name: 'СТС Love', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_STSLOVE/variant.m3u8', logo: 'http://epg.it999.ru/img2/79.png' },
                    { name: 'Домашний', url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_DOMASHNIY/variant.m3u8', logo: 'http://epg.it999.ru/img2/304.png' }
                ]
            },
            {
                title: '📡 Региональные каналы',
                channels: [
                    { name: '7 канал Красноярск', url: 'https://rt-sib-krsk-htlive.cdn.ngenix.net/hls/CH_R13_OTT_SIB_KRSK_RENTV/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: '8 канал Владивосток', url: 'https://s91030.cdn.ngenix.net/hls/CH_R01_OTT_DV_VLD_OTT8KANAL/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Амурское областное ТВ', url: 'https://s84942.cdn.ngenix.net/hls/CH_R28_OTT_DV_BLAG_AOT/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Башкортостан 24', url: 'https://s45177.cdn.ngenix.net/hls/CH_R02_BASHKORTOSTAN24/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Волгоград-24 HD', url: 'https://rt-sth-vgrad-htlive.cdn.ngenix.net/hls/CH_R01_OTT_STH_VGRAD_VOLGOGRAD24/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Енисей HD', url: 'https://rt-sib-krsk-htlive.cdn.ngenix.net/hls/CH_R01_OTT_SIB_KRSK_ENISEY/variant.m3u8', logo: 'http://epg.it999.ru/img2/18.png' },
                    { name: 'Камчатка HD', url: 'https://s14131.cdn.ngenix.net/hls/CH_R41_OTT_DV_KAM_KAMCHATKA/variant.m3u8', logo: 'https://kamchatka1.tv/wp-content/uploads/2020/11/cropped-logo.png' },
                    { name: 'Москва 24', url: 'https://rt-mos-htlive.cdn.ngenix.net/hls/CH_R04_OTT_MOSKOV24/variant.m3u8', logo: 'http://epg.it999.ru/img2/334.png' },
                    { name: 'Самара-24', url: 'https://rt-vlg-samara-htlive.cdn.ngenix.net/hls/CH_R03_SAMARA24/variant.m3u8', logo: 'https://assets.iptv2022.com/static/channel/10442/logo_256_1660807211.png' },
                    { name: 'Якутия 24', url: 'https://s34351.cdn.ngenix.net/hls/CH_R14_OTT_DV_YKT_YKT/variant.m3u8', logo: 'https://assets.iptv2022.com/static/channel/10454/logo_256_1660810109.png' }
                ]
            }
        ];

        // --- ЛОГИКА РАБОТЫ ПЛАГИНА ---

        this.create = function() {
            // Добавляем пункт в главное меню
            Lampa.Settings.main_menu_items.push({
                title: 'Smart TV',
                icon: 'tv',
                id: 'smart_tv_main',
                component: manifest.component
            });

            // Регистрируем компонент, который будет открываться при клике
            Lampa.Component.add(manifest.component, function() {
                var component = new Lampa.Component();
                
                component.create = function() {
                    // Очистка при создании
                    this.activity.loader(false);
                    
                    var groups_html = [];
                    
                    // Перебираем группы и создаем линии каналов
                    data_groups.forEach(function(group){
                        var items = [];
                        
                        group.channels.forEach(function(channel){
                            // Создаем карточку канала
                            var card_data = {
                                title: channel.name,
                                img: channel.logo || '',
                                url: channel.url
                            };

                            // Отрисовка элемента
                            var item = Lampa.Template.get('card', {
                                title: card_data.title,
                                release_year: '' 
                            });
                            
                            // Задаем картинку
                            item.find('.card__img').attr('src', card_data.img);
                            item.find('.card__view').remove(); // Убираем лишние элементы
                            
                            // Действие при клике на канал
                            item.on('hover:enter', function(){
                                var video = {
                                    title: card_data.title,
                                    url: card_data.url
                                };
                                Lampa.Player.play(video);
                                Lampa.Player.playlist([video]);
                            });

                            items.push(item[0]);
                        });

                        // Создаем горизонтальную линию
                        var line = Lampa.Template.get('items_line',{
                            title: group.title
                        });
                        
                        // Заполняем линию карточками
                        items.forEach(function(item){
                            line.find('.items-line__body').append(item);
                        });
                        
                        groups_html.push(line[0]);
                    });
                    
                    // Добавляем все линии в интерфейс
                    groups_html.forEach(function(line){
                        component.interaction.append(line);
                    });
                };
                
                return component;
            });
            
            // Сообщение об успешной загрузке
            console.log('Smart TV плагин успешно загружен');
        };
    }

    // Регистрация плагина в системе Lampa
    if(window.Lampa) {
        Lampa.Plugins.add('smart_tv_full', SmartTV_Plugin);
    }
})();
