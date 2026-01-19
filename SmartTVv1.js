(function () {
    'use strict';

    function SmartTV_Plugin(object) {
        var scroll  = new Lampa.Scroll({mask: true, over: true});
        var items   = [];
        var html    = $('<div></div>');
        var body    = $('<div class="category-full"></div>');
        
        // ВСЕ ВАШИ КАНАЛЫ
        var data_groups = [
            {
                title: '🇷🇺 Эфирные каналы',
                channels: [
                    { name: 'Первый HD', url: 'https://cdn10.1internet.tv/dash-live12/streams/1tv/1tvdash.mpd', logo: 'https://vsetv.com/pic/channel_1.gif' },
                    { name: 'Россия HD', url: 'http://cdnmg.secure.live.rtr-vesti.ru/hls2/russia_hd/playlist_6.m3u8', logo: 'https://vsetv.com/pic/channel_2.gif' },
                    { name: 'НТВ HD', url: 'https://ntv-hls-orig.cdnvideo.ru/ntv0_hd/tracks-v1a1/mono.m3u8', logo: 'https://vsetv.com/pic/channel_8.gif' },
                    { name: 'СТС', url: 'http://flu.ttk.mx:9090/STS/index.m3u8?token=orh6o', logo: 'https://vsetv.com/pic/channel_44.gif' },
                    { name: 'РЕН ТВ', url: 'http://flu.ttk.mx:9090/REN_TV/index.m3u8?token=orh6o', logo: 'https://vsetv.com/pic/channel_31.gif' }
                ]
            },
            {
                title: '📽️ Фильмовые',
                channels: [
                    { name: 'Hollywood HD', url: 'http://46.19.100.174:4450/play/a005/index.m3u8', logo: 'https://vsetv.com/pic/channel_934.gif' },
                    { name: 'TV 1000 HD', url: 'https://bl.uma.media/live/485542/HLS/4614144_3/2/1/playlist.m3u8', logo: 'https://vsetv.com/pic/channel_235.gif' },
                    { name: 'VIP Premiere HD', url: 'https://bl.uma.media/live/485536/HLS/4614144_3/2/1/playlist.m3u8', logo: 'https://vsetv.com/pic/channel_1311.gif' }
                ]
            },
            {
                title: '🌏 Познавательные',
                channels: [
                    { name: 'Discovery HD', url: 'https://livetv.mylifeisgood.ml/channels/discovery.m3u8', logo: 'https://vsetv.com/pic/channel_15.gif' },
                    { name: 'Animal Planet HD', url: 'https://livetv.mylifeisgood.ml/channels/animalplanethd', logo: 'https://vsetv.com/pic/channel_16.gif' },
                    { name: 'Моя планета', url: 'http://cdnmg.secure.live.rtr-vesti.ru/live/smil:mplan.smil/chunklist_b1600000.m3u8', logo: 'https://vsetv.com/pic/channel_613.gif' }
                ]
            }
        ];

        this.create = function () {
            var _this = this;
            this.activity.loader(false);
            
            data_groups.forEach(function(group) {
                var line = $('<div class="items-line"><div class="items-line__title" style="margin: 1.5em 0 0.5em 1.2em; font-size: 1.4em; color: #fff;">'+group.title+'</div><div class="items-line__body"></div></div>');
                
                group.channels.forEach(function(channel) {
                    var item = Lampa.Template.get('card', {title: channel.name, release_year: ''});
                    item.find('.card__img').attr('src', channel.logo);
                    item.find('.card__view, .card__age, .card__type').remove();
                    
                    item.on('hover:enter', function () {
                        Lampa.Player.play({ title: channel.name, url: channel.url });
                    });
                    
                    line.find('.items-line__body').append(item);
                    items.push(item);
                });
                body.append(line);
            });

            scroll.append(body);
            html.append(scroll.render());
        };

        this.render = function () { return html; };
        this.destroy = function () {
            scroll.destroy();
            items = [];
        };
    }

    if (window.Lampa) {
        Lampa.Component.add('smart_tv', SmartTV_Plugin);

        var addBtn = function() {
            var menu = $('.menu__list');
            if (menu.length > 0 && !$('.menu__item[data-action="smart_tv"]').length) {
                var btn = $('<li class="menu__item selector" data-action="smart_tv"><div class="menu__ico"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7L12 3L3 7V17L12 21L21 17V7Z"/></svg></div><div class="menu__text">Smart TV</div></li>');
                btn.on('hover:enter', function() {
                    Lampa.Activity.push({ title: 'Smart TV', component: 'smart_tv' });
                });
                menu.append(btn);
            }
        };
        
        setInterval(addBtn, 1000); // Проверяем наличие меню каждую секунду
    }
})();
