(function () {
    'use strict';

    function SmartTV_Plugin(object) {
        var scroll = new Lampa.Scroll({mask: true, over: true});
        var items = [];
        var html = $('<div></div>');
        var body = $('<div class="category-full"></div>');
        
        var data_groups = [
            {
                title: '📺 Эфирные каналы',
                channels: [
                    { name: 'Первый HD', url: 'https://cdn10.1internet.tv/dash-live12/streams/1tv/1tvdash.mpd', logo: 'https://vsetv.com/pic/channel_1.gif' },
                    { name: 'НТВ HD', url: 'https://ntv-hls-orig.cdnvideo.ru/ntv0_hd/tracks-v1a1/mono.m3u8', logo: 'https://vsetv.com/pic/channel_8.gif' }
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
        this.destroy = function () { scroll.destroy(); items = []; };
    }

    if (window.Lampa) {
        Lampa.Component.add('smart_tv', SmartTV_Plugin);

        // ВЫЗЫВАЕМ ПРИНУДИТЕЛЬНО ПРИ ЗАГРУЗКЕ
        setTimeout(function(){
            Lampa.Noty.show('Smart TV Плагин успешно запущен!');
            Lampa.Activity.push({ title: 'Smart TV', component: 'smart_tv' });
        }, 3000);
    }
})();
