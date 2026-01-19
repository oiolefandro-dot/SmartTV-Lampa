(function () {
    'use strict';

    function SmartTV_Plugin(object) {
        var network = new Lampa.Reguest();
        var scroll  = new Lampa.Scroll({mask: true, over: true});
        var items   = []; // Массив для хранения элементов
        var html    = $('<div></div>');
        var body    = $('<div class="category-full"></div>');
        
        // Ваши данные
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
            }
        ];

        this.create = function () {
            var _this = this;
            this.activity.loader(false);
            
            data_groups.forEach(function(group) {
                var line = $('<div class="items-line"><div class="items-line__title" style="margin: 1em 0 0.5em 1em; font-size: 1.5em; font-weight: bold;">'+group.title+'</div><div class="items-line__body"></div></div>');
                
                group.channels.forEach(function(channel) {
                    var item = Lampa.Template.get('card', {title: channel.name, release_year: ''});
                    item.find('.card__img').attr('src', channel.logo);
                    item.find('.card__view').remove();
                    
                    item.on('hover:enter', function () {
                        var video = { title: channel.name, url: channel.url };
                        Lampa.Player.play(video);
                        Lampa.Player.playlist([video]);
                    });
                    
                    line.find('.items-line__body').append(item);
                    items.push(item); // Исправлено: используем локальный массив items
                });
                
                body.append(line);
            });

            scroll.append(body);
            html.append(scroll.render());
        };

        this.pause = function () {};
        this.stop = function () {};
        this.render = function () { return html; };
        this.destroy = function () {
            network.clear();
            scroll.destroy();
            html.remove();
            body.remove();
            items = [];
        };
    }

    function startPlugin() {
        if (!window.smart_tv_plugin_installed) {
            window.smart_tv_plugin_installed = true;
            Lampa.Component.add('smart_tv', SmartTV_Plugin);

            var menu_item = $('<li class="menu__item selector" data-action="smart_tv">' +
                '<div class="menu__ico"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7L12 3L3 7V17L12 21L21 17V7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
                '<div class="menu__text">Smart TV</div>' +
                '</li>');

            menu_item.on('hover:enter', function () {
                Lampa.Activity.push({ title: 'Smart TV', component: 'smart_tv', page: 1 });
            });

            $('.menu .menu__list').append(menu_item);
        }
    }

    if (window.appready) startPlugin();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') startPlugin(); });

})();
