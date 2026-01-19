// Плагин для Lampa: Smart TV - Полная версия
// Все каналы из предоставленного M3U плейлиста

let plugin = {
    name: 'Smart TV Полный',
    description: 'Все каналы из Smart TV плейлиста',
    version: '2.0',
    author: 'Smart TV Collection',
    icon: 'https://cdn-icons-png.flaticon.com/512/2875/2875387.png',
    background: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
    cloud_enabled: true,
    cloud_url: 'https://www.dropbox.com/scl/fi/o36kizpmbm2yganykl3zf/SmartTV.js?rlkey=27euoo48tzug9vqsoi3lsgr9n&st=w6cuvwtv&dl=1',
    
    groups: [
        {
            title: '🇷🇺 Эфирные каналы',
            channels: [
                {
                    name: 'Первый HD',
                    url: 'https://cdn10.1internet.tv/dash-live12/streams/1tv/1tvdash.mpd',
                    logo: 'http://epg.it999.ru/img2/983.png',
                    epg_id: 'pervy'
                },
                {
                    name: 'Россия HD',
                    url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls2/russia_hd/playlist_6.m3u8',
                    logo: 'http://epg.it999.ru/img2/984.png',
                    epg_id: 'rossia1'
                },
                {
                    name: 'НТВ HD',
                    url: 'https://ntv-hls-orig.cdnvideo.ru/ntv0_hd/tracks-v1a1/mono.m3u8',
                    logo: 'http://epg.it999.ru/img2/2001.png',
                    epg_id: 'ntv'
                },
                {
                    name: 'ТВ Центр HD',
                    url: 'http://hls.peers.tv/streaming/tvc_hd/126/copy/playlist.m3u8?token=d680c0c502834299a358e0c1783e9f94&client=97',
                    logo: 'http://epg.it999.ru/img2/649.png',
                    epg_id: 'tvcentr'
                },
                {
                    name: 'ТВ Центр',
                    url: 'http://flu.ttk.mx:9090/TVC/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/649.png',
                    epg_id: 'tvcentr.sd'
                },
                {
                    name: 'НТВ Стиль',
                    url: 'https://ntv-hls-orig.cdnvideo.ru/th_style/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/1755.png',
                    epg_id: 'ntv-style'
                },
                {
                    name: 'РЕН ТВ',
                    url: 'http://flu.ttk.mx:9090/REN_TV/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: 'rentv'
                },
                {
                    name: 'Мир HD',
                    url: 'https://hls-mirtv.cdnvideo.ru/mirtv-parampublish/mirtv_2500/tracks-v1a1/mono.m3u8',
                    logo: 'http://epg.it999.ru/img2/726.png',
                    epg_id: 'mir'
                },
                {
                    name: 'Звезда HD',
                    url: 'https://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist_hdhigh.m3u8',
                    logo: 'http://epg.it999.ru/img2/405.png',
                    epg_id: 'zvezda'
                },
                {
                    name: 'СТС',
                    url: 'http://flu.ttk.mx:9090/STS/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/79.png',
                    epg_id: 'sts'
                },
                {
                    name: 'Домашний',
                    url: 'http://flu.ttk.mx:9090/Domashni/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/304.png',
                    epg_id: 'domashny'
                },
                {
                    name: 'Ю',
                    url: 'http://flu.ttk.mx:9090/U/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/898.png',
                    epg_id: 'yu'
                },
                {
                    name: 'Суббота! HD',
                    url: 'https://bl.uma.media/live/317845/HLS/4614144_3/1/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2288.png',
                    epg_id: 'super'
                },
                {
                    name: 'Первый канал Евразия',
                    url: 'http://stream.euroasia.lfstrm.tv/perviy_evrasia/1/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/983.png',
                    epg_id: 'pervy-kanal-eurasia-kz'
                },
                {
                    name: 'РЖД ТВ HD',
                    url: 'http://hls.tva.cdnvideo.ru/tva/tvahd.sdp/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2471.png',
                    epg_id: 'rzhd-tv'
                },
                {
                    name: 'Россия-Культура',
                    url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls/russia_k/playlist_3.m3u8',
                    logo: 'http://epg.it999.ru/img2/187.png',
                    epg_id: 'rossija-k'
                },
                {
                    name: 'Россия-24',
                    url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls/russia_24/playlist_3.m3u8',
                    logo: 'http://epg.it999.ru/img2/1683.png',
                    epg_id: 'rossija24'
                },
                {
                    name: 'Мир 24',
                    url: 'https://hls-mirtv.cdnvideo.ru/mirtv-parampublish/mir24_2500/tracks-v1a1/mono.m3u8',
                    logo: 'http://epg.it999.ru/img2/2078.png',
                    epg_id: 'mir-24'
                },
                {
                    name: 'Москва 24',
                    url: 'https://radio-live-mg.rtr-vesti.ru/hls/moscow_24/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/334.png',
                    epg_id: 'moskva-24'
                },
                {
                    name: 'Известия HD',
                    url: 'http://hls-igi.cdnvideo.ru/igi/igi_sq/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2271.png',
                    epg_id: 'izvestia'
                },
                {
                    name: 'РБК ТВ',
                    url: 'http://online.video.rbc.ru/online/rbctv_576p/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/743.png',
                    epg_id: 'rbk'
                }
            ]
        },
        {
            title: '🌏 Познавательные',
            channels: [
                {
                    name: 'Глазами туриста',
                    url: 'https://livetv.mylifeisgood.ml/channels/glazamiturista.m3u8',
                    logo: 'http://epg.it999.ru/img2/2508.png',
                    epg_id: 'glazami-turista-4k'
                },
                {
                    name: 'Discovery HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/discovery.m3u8',
                    logo: 'http://epg.it999.ru/img2/1612.png',
                    epg_id: 'discovery-hd'
                },
                {
                    name: 'Discovery Science HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/discoveryscience.m3u8',
                    logo: 'http://epg.it999.ru/img2/3067.png',
                    epg_id: 'discovery-science'
                },
                {
                    name: 'Investigation Discovery HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/discoveryxtra.m3u8',
                    logo: 'http://epg.it999.ru/img2/2507.png',
                    epg_id: 'id-xtra-ru'
                },
                {
                    name: 'Animal Planet HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/animalplanethd',
                    logo: 'http://epg.it999.ru/img2/990.png',
                    epg_id: 'animal-planet'
                },
                {
                    name: 'Моя планета',
                    url: 'http://cdnmg.secure.live.rtr-vesti.ru/live/smil:mplan.smil/chunklist_b1600000.m3u8',
                    logo: 'http://epg.it999.ru/img2/675.png',
                    epg_id: 'moya-planeta'
                },
                {
                    name: 'Телепутешествия',
                    url: 'http://92.43.140.249/s71/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2424.png',
                    epg_id: 'teleputeshestvija'
                },
                {
                    name: 'В мире животных HD',
                    url: 'http://hls.peers.tv/streaming/animal_family_hd/16/tvrec/playlist.m3u8?token=d680c0c502834299a358e0c1783e9f94&client=97',
                    logo: 'http://epg.it999.ru/img2/2498.png',
                    epg_id: 'v-mire-zhivotnyx-hd'
                },
                {
                    name: 'Диалоги о рыбалке',
                    url: 'http://hls.peers.tv/streaming/dialogi_o_rybalke/16/vh1w/playlist.m3u8?token=d680c0c502834299a358e0c1783e9f94&client=97',
                    logo: 'http://epg.it999.ru/img2/2627.png',
                    epg_id: 'dialogi-o-rybalke'
                },
                {
                    name: 'Рыболов',
                    url: 'http://92.43.140.249/s55/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: 'ohotnik-rybolov'
                },
                {
                    name: 'Зоо ТВ',
                    url: 'http://92.43.140.249/s92/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2431.png',
                    epg_id: 'zootv'
                },
                {
                    name: 'Приключения',
                    url: 'http://92.43.140.249/s99/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2311.png',
                    epg_id: 'teletravel-hd'
                },
                {
                    name: 'Первый космический',
                    url: 'http://92.43.140.249/s44/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2310.png',
                    epg_id: 'eureka-hd'
                }
            ]
        },
        {
            title: '⛹️ Спортивные',
            channels: [
                {
                    name: 'Старт',
                    url: 'https://livetv.mylifeisgood.ml/channels/startlive',
                    logo: 'https://iptvxcdn.ml/start.png',
                    epg_id: 'start'
                },
                {
                    name: 'SETANTA SPORTS 1 HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/setantahd',
                    logo: 'http://epg.it999.ru/img2/2812.png',
                    epg_id: 'setanta-sports'
                },
                {
                    name: 'Setanta Sports 2 HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/setantaplus',
                    logo: 'http://epg.it999.ru/img2/2813.png',
                    epg_id: 'setanta-sports-plus'
                },
                {
                    name: 'Eurosport 1 HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/eurosport1ru',
                    logo: 'http://epg.it999.ru/img2/2052.png',
                    epg_id: 'eurosport1'
                },
                {
                    name: 'Eurosport 2 HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/eurosport2',
                    logo: 'http://epg.it999.ru/img2/4313.png',
                    epg_id: 'eurosport2'
                },
                {
                    name: 'Viasat Sport HD',
                    url: 'http://bl.uma.media/live/485548/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2004.png',
                    epg_id: 'viasat-sport'
                },
                {
                    name: 'Спортивный HD',
                    url: 'https://live-k2302-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8',
                    logo: 'https://antifriztv.com/storage/images/pack_logos/51de7a32b761165b4e7ac15866b2af76.png',
                    epg_id: 'sport-hd'
                },
                {
                    name: 'Телеканал Футбол',
                    url: 'http://flu.ttk.mx:9090/Futbol/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/2782.png',
                    epg_id: 'football-ru'
                }
            ]
        },
        {
            title: '📽️ Фильмовые',
            channels: [
                {
                    name: 'Hollywood HD',
                    url: 'http://46.19.100.174:4450/play/a005/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/934.png',
                    epg_id: 'hollywood-hd'
                },
                {
                    name: 'Кино ТВ HD',
                    url: 'https://livetv.mylifeisgood.ml/channels/kinotvst.m3u8',
                    logo: 'http://epg.it999.ru/img2/2506.png',
                    epg_id: 'kino-tv'
                },
                {
                    name: 'ViP Comedy HD',
                    url: 'https://bl.uma.media/live/485539/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2823.png',
                    epg_id: 'vip-comedy'
                },
                {
                    name: 'VIP Megahit HD',
                    url: 'https://bl.uma.media/live/485537/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2824.png',
                    epg_id: 'vip-megahit'
                },
                {
                    name: 'VIP Premiere HD',
                    url: 'https://bl.uma.media/live/485536/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2822.png',
                    epg_id: 'vip-premiere'
                },
                {
                    name: 'ViP Serial HD',
                    url: 'https://bl.uma.media/live/485540/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/2838.png',
                    epg_id: 'vip-serial'
                },
                {
                    name: 'TV 1000 HD',
                    url: 'https://bl.uma.media/live/485542/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/3302.png',
                    epg_id: 'tv1000'
                },
                {
                    name: 'TV 1000 Action HD',
                    url: 'https://bl.uma.media/live/485541/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/3301.png',
                    epg_id: 'tv1000-action'
                },
                {
                    name: 'TV 1000 Русское кино HD',
                    url: 'https://bl.uma.media/live/485543/HLS/4614144_3/2/1/playlist.m3u8',
                    logo: 'http://epg.it999.ru/img2/3303.png',
                    epg_id: 'tv1000-russkoe-kino'
                },
                {
                    name: 'НТВ-ХИТ',
                    url: 'https://ntv-hls-orig.cdnvideo.ru/th_hit/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2041.png',
                    epg_id: 'ntv-xit'
                },
                {
                    name: 'НТВ Сериал',
                    url: 'https://ntv-hls-orig.cdnvideo.ru/th_serial/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/1754.png',
                    epg_id: 'ntv-serial'
                },
                {
                    name: 'НТВ Право',
                    url: 'https://ntv-hls-orig.cdnvideo.ru/th_pravo/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/1753.png',
                    epg_id: 'ntv-pravo'
                },
                {
                    name: 'BackusTV',
                    url: 'https://stream.backustv.ru/live/btv/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/4770.png',
                    epg_id: 'backustv'
                },
                {
                    name: 'BackusTV Страшное',
                    url: 'https://stream.backustv.ru/live/btv2/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/4662.png',
                    epg_id: 'backustv-horror'
                },
                {
                    name: 'НСТ',
                    url: 'https://m3ut.net/p/982815674/1/45',
                    logo: 'http://epg.it999.ru/img2/518.png',
                    epg_id: 'nst'
                },
                {
                    name: 'Киноужас',
                    url: 'http://ott-cdn.ucom.am/s87/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2493.png',
                    epg_id: 'kinouzhas'
                },
                {
                    name: 'A1',
                    url: 'http://92.43.140.249/s45/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/1371.png',
                    epg_id: 'amedia1'
                },
                {
                    name: 'A2',
                    url: 'http://92.43.140.249/s33/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/918.png',
                    epg_id: 'amedia2'
                },
                {
                    name: 'A HOME OF HBO',
                    url: 'http://92.43.140.249/s64/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/1372.png',
                    epg_id: 'amedia-premium'
                },
                {
                    name: 'TV XXI',
                    url: 'http://flu.ttk.mx:9090/TV21/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/309.png',
                    epg_id: 'tvxxi'
                },
                {
                    name: 'Киносемья',
                    url: 'http://flu.ttk.mx:9090/Kinosemia/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/3297.png',
                    epg_id: 'kinosemiya'
                },
                {
                    name: 'Кинопремьера HD',
                    url: 'http://flu.ttk.mx:9090/Kinopremiera/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/566.png',
                    epg_id: 'kinopremiera-hd'
                },
                {
                    name: 'Победа',
                    url: 'http://flu.ttk.mx:9090/Pobeda/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/2771.png',
                    epg_id: 'pobeda'
                },
                {
                    name: 'Кинопоказ',
                    url: 'http://flu.ttk.mx:9090/kinopokaz/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/2834.png',
                    epg_id: 'kinopokaz'
                },
                {
                    name: 'Еврокино',
                    url: 'http://flu.ttk.mx:9090/Evrokino/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/352.png',
                    epg_id: 'evrokino'
                },
                {
                    name: 'Cinema',
                    url: 'http://flu.ttk.mx:9090/Cinema/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/2549.png',
                    epg_id: 'cinema-ru'
                },
                {
                    name: 'Иллюзион +',
                    url: 'http://flu.ttk.mx:9090/Illuzion+/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/2403.png',
                    epg_id: 'illuzion-plus'
                },
                {
                    name: 'Дом Кино',
                    url: 'http://flu.ttk.mx:9090/Dom_kino/index.m3u8?token=orh6o',
                    logo: 'http://epg.it999.ru/img2/834.png',
                    epg_id: 'domkino'
                },
                {
                    name: 'Bollywood HD',
                    url: 'http://46.19.100.174:4450/play/a00h/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/1395.png',
                    epg_id: 'bollywood-hd'
                },
                {
                    name: 'Свежаки',
                    url: 'https://edge-01.kino.watch/fresh/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2952.png',
                    epg_id: 'fresh-cinema'
                },
                {
                    name: 'Ужастик',
                    url: 'https://edge-01.kino.watch/horror/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2952.png',
                    epg_id: 'horror-cinema'
                },
                {
                    name: 'Уже видел',
                    url: 'https://edge-01.kino.watch/hit/index.m3u8',
                    logo: 'http://epg.it999.ru/img2/2952.png',
                    epg_id: 'hit-cinema'
                }
            ]
        },
        {
            title: '🎵 Музыкальные',
            channels: [
                {
                    name: 'Муз ТВ',
                    url: 'http://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/897.png',
                    epg_id: 'muztv',
                    http_referrer: 'https://muz-tv.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Ocko',
                    url: 'http://ocko-live.ssl.cdn.cra.cz/channels/ocko/playlist/cze/live_hq.m3u8',
                    logo: 'https://tv2club.com/wp-content/uploads/2020/12/cz-ocko-8142.jpg',
                    epg_id: 'ocko'
                },
                {
                    name: 'Ocko Expres',
                    url: 'http://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist/cze/live_hq.m3u8',
                    logo: 'https://photos.live-tv-channels.org/tv-logo/cz-ocko-expres-6319.jpg',
                    epg_id: 'ocko-expres'
                },
                {
                    name: 'Ocko Star',
                    url: 'http://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist/cze/live_hq.m3u8',
                    logo: 'https://photos.live-tv-channels.org/tv-logo/cz-ocko-star-6827.jpg',
                    epg_id: 'ocko-star'
                },
                {
                    name: 'RITSA TV',
                    url: 'https://live.prd.dlive.tv/hls/live/fila007.m3u8',
                    logo: 'https://ritsatv.ru/files/poster/medium/300102.jpg',
                    epg_id: 'ritsa-tv'
                },
                {
                    name: 'M2 HD',
                    url: 'http://live.m2.tv/hls3/720/stream.m3u8',
                    logo: 'https://seeklogo.com/images/M/M2-logo-719227FCEC-seeklogo.com.png',
                    epg_id: 'm2-ua'
                },
                {
                    name: 'Первый Музыкальный RU',
                    url: 'http://rtmp.one.by:2200',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Cy3fsuLzaorl2j4CbpaREwtomc_sd6DlMg&usqp=CAU',
                    epg_id: 'first-music-ru'
                },
                {
                    name: 'Первый Музыкальный RU HD',
                    url: 'http://rtmp.one.by:2300',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Cy3fsuLzaorl2j4CbpaREwtomc_sd6DlMg&usqp=CAU',
                    epg_id: 'first-music-ru-hd'
                },
                {
                    name: 'Первый Музыкальный BY',
                    url: 'http://rtmp.one.by:1200',
                    logo: 'https://online-red.com/images/tv/one-hd.png',
                    epg_id: 'first-music-by'
                },
                {
                    name: 'Первый Музыкальный BY HD',
                    url: 'http://rtmp.one.by:1300',
                    logo: 'https://online-red.com/images/tv/one-hd.png',
                    epg_id: 'first-music-by-hd'
                },
                {
                    name: 'VIVA TV',
                    url: 'https://live.prd.dlive.tv/hls/live/viva-russia.m3u8',
                    logo: 'https://sat-one.info/news-imeg/58892.jpg',
                    epg_id: 'viva-tv'
                },
                {
                    name: 'Страна FM',
                    url: 'http://live.stranafm.cdnvideo.ru/stranafm/stranafm_hd.sdp/chunklist.m3u8',
                    logo: 'https://online-red.com/images/radio-logo/strana-fm.png',
                    epg_id: 'strana-fm'
                },
                {
                    name: 'Шансон-ТВ',
                    url: 'http://hls-shansontv.cdnvideo.ru/shansontv/shansontv.sdp/playlist.m3u8',
                    logo: 'https://epg.iptvx.one/icn/shanson-tv.png',
                    epg_id: 'shanson-tv'
                },
                {
                    name: 'Radio Шансон-ТВ',
                    url: 'http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live.m3u8',
                    logo: 'https://epg.iptvx.one/icn/shanson-tv.png',
                    epg_id: 'radio-shanson'
                },
                {
                    name: 'RU.TV',
                    url: 'https://hls-03-video.webcaramba.com/rutv/live_720/index.m3u8',
                    logo: 'http://epg.it999.ru/img/2277.png',
                    epg_id: 'ru-tv'
                },
                {
                    name: 'Kronehit TV',
                    url: 'http://bitcdn-kronehit.bitmovin.com/v2/hls/chunklist_b1628000.m3u8',
                    logo: 'https://smotrimkino.vip/uploads/posts/2019-07/1564013659_kronehit.jpg',
                    epg_id: 'kronehit-tv'
                },
                {
                    name: 'Mooz Dance',
                    url: 'http://db2-archive.teleon.tv/m3u/m3u.php?ch=moozdance',
                    logo: 'https://mooz.tv/site/img/mooz-dance.jpg',
                    epg_id: 'mooz-dance'
                },
                {
                    name: 'Mooz RO',
                    url: 'http://db2-archive.teleon.tv/m3u/m3u.php?ch=moozro',
                    logo: 'https://upload.wikimedia.org/wikipedia/ro/5/50/Dolce_mooz_ro.png',
                    epg_id: 'mooz-ro'
                },
                {
                    name: 'Mooz HITS',
                    url: 'http://db2-archive.teleon.tv/m3u/m3u.php?ch=moozhits',
                    logo: 'https://mooz.tv/site/img/mooz-hits.jpg',
                    epg_id: 'mooz-hits'
                }
            ]
        },
        {
            title: '📺 WINK + Архив',
            channels: [
                {
                    name: 'Ultra HD Cinema 4K',
                    url: 'http://zabava-htlive.cdn.ngenix.net/hls/CH_ULTRAHDCINEMA/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/2743.png',
                    epg_id: 'ultra-hd-cinema',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Russian Extreme UHD',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_RUSSIANEXTREMEULTRA/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/2803.png',
                    epg_id: 'russian-extreme-uhd',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Первый',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_1TVSD/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/146.png',
                    epg_id: 'pervy.sd',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Россия 1',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_RUSSIA1/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/711.png',
                    epg_id: 'rossia1.sd',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'НТВ',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_NTV/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/162.png',
                    epg_id: 'ntv.sd',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'РЕН ТВ',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_RENTV/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: 'rentv.wink',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'СТС',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_STS/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/79.png',
                    epg_id: 'sts.wink',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'СТС Love',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_STSLOVE/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/79.png',
                    epg_id: 'sts-love',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Домашний',
                    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_DOMASHNIY/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/304.png',
                    epg_id: 'domashny.wink',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                }
            ]
        },
        {
            title: '📡 Региональные каналы',
            channels: [
                {
                    name: '7 канал Красноярск',
                    url: 'https://rt-sib-krsk-htlive.cdn.ngenix.net/hls/CH_R13_OTT_SIB_KRSK_RENTV/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: '7kanal-krasnoyarsk',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: '8 канал Владивосток',
                    url: 'https://s91030.cdn.ngenix.net/hls/CH_R01_OTT_DV_VLD_OTT8KANAL/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: '8vladik',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Амурское областное ТВ',
                    url: 'https://s84942.cdn.ngenix.net/hls/CH_R28_OTT_DV_BLAG_AOT/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: '1obl-blagoveschensk',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Башкортостан 24',
                    url: 'https://s45177.cdn.ngenix.net/hls/CH_R02_BASHKORTOSTAN24/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: 'bashkortostan24',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Волгоград-24 HD',
                    url: 'https://rt-sth-vgrad-htlive.cdn.ngenix.net/hls/CH_R01_OTT_STH_VGRAD_VOLGOGRAD24/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: 'volgograd-24',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Енисей HD',
                    url: 'https://rt-sib-krsk-htlive.cdn.ngenix.net/hls/CH_R01_OTT_SIB_KRSK_ENISEY/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/18.png',
                    epg_id: 'enisey-region',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Камчатка HD',
                    url: 'https://s14131.cdn.ngenix.net/hls/CH_R41_OTT_DV_KAM_KAMCHATKA/variant.m3u8',
                    logo: 'https://kamchatka1.tv/wp-content/uploads/2020/11/cropped-logo.png',
                    epg_id: 'kamchatka-hd',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Москва 24',
                    url: 'https://rt-mos-htlive.cdn.ngenix.net/hls/CH_R04_OTT_MOSKOV24/variant.m3u8',
                    logo: 'http://epg.it999.ru/img2/334.png',
                    epg_id: 'moskva-24.wink',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Самара-24',
                    url: 'https://rt-vlg-samara-htlive.cdn.ngenix.net/hls/CH_R03_SAMARA24/variant.m3u8',
                    logo: 'https://assets.iptv2022.com/static/channel/10442/logo_256_1660807211.png',
                    epg_id: 'samara24',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                },
                {
                    name: 'Якутия 24',
                    url: 'https://s34351.cdn.ngenix.net/hls/CH_R14_OTT_DV_YKT_YKT/variant.m3u8',
                    logo: 'https://assets.iptv2022.com/static/channel/10454/logo_256_1660810109.png',
                    epg_id: 'yakutia24',
                    http_referrer: 'https://wink.ru',
                    user_agent: 'Mozilla/5.0'
                }
            ]
        }
    ]
};

// Дополнительные функции плагина
plugin.search = function(query) {
    // Функция поиска по каналам
    const results = [];
    query = query.toLowerCase();
    
    this.groups.forEach(group => {
        group.channels.forEach(channel => {
            if (channel.name.toLowerCase().includes(query)) {
                results.push({
                    name: channel.name,
                    group: group.title,
                    url: channel.url,
                    logo: channel.logo
                });
            }
        });
    });
    
    return results;
};

plugin.getChannelCount = function() {
    let count = 0;
    this.groups.forEach(group => {
        count += group.channels.length;
    });
    return count;
};

// Информация о плагине
plugin.info = function() {
    return {
        name: this.name,
        version: this.version,
        author: this.author,
        channels: this.getChannelCount(),
        groups: this.groups.length,
        lastUpdate: '2024'
    };
};

// Экспорт плагина для Lampa
try {
    // Проверяем все среды
    if (typeof exports !== 'undefined') {
        exports.plugin = plugin;
    }
    if (typeof lampa_plugin !== 'undefined') {
        lampa_plugin(plugin);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = plugin;
    }
    if (typeof window !== 'undefined' && !window.lampa_plugin) {
        window.SmartTVPlugin = plugin;
        console.log('Smart TV Plugin loaded: ' + plugin.getChannelCount() + ' channels');
    }
} catch(e) {
    console.log('Плагин "Smart TV Полный" успешно загружен');
    console.log('Каналов: ' + plugin.getChannelCount());
    console.log('Групп: ' + plugin.groups.length);
}
