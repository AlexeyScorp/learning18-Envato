/**
 * Created by lezar on 29.03.2018.
 */
var main_header_timer_wrap = document.getElementById('main_header_timer_wrap'),
    import_timer = main_header_timer_wrap.getElementsByClassName('import_timer'),
    past_event_cell = document.createElement('div'),
    past_event_parent = document.getElementById('past_event-table'),
    no_active_map = document.getElementById('contact_map-map_no_active'),
    no_active_map_info = document.getElementById('contact_map-information'),
    active_map_button = document.getElementById('contact_map-button'),
    arrow_up = document.getElementById('arrow_up'),
    scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ),
    temp,
    date_timer_arr = [30, 23, 60, 60],
    date_days_arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    date_more_days = 2016,
    date = new Date (), //Получили текущую дату
    time = {
        days: date.getDate(),
        month: date.getMonth(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }; //получили дни, часы, минуты и секунды

function timer () {

    date = new Date ();
    time.days = date.getDate();
    time.hours = date_timer_arr[1] - date.getHours();
    time.minutes = date_timer_arr[2] - date.getMinutes();
    time.seconds = date_timer_arr[3] - date.getSeconds();

    temp = date_days_arr[time.month] - time.days;
    time.days = temp;
    temp = undefined;
    temp = String(time.days);
    if (temp.length < 2) {
        time.days = '0' + time.days;
    }

    temp = undefined;
    temp = String(time.hours);
    if (temp.length < 2) {
        time.hours = '0' + time.hours;
    }

    temp = undefined;
    temp = String(time.minutes);
    if (temp.length < 2) {
        time.minutes = '0' + time.minutes;
    }

    temp = undefined;
    temp = String(time.seconds);
    if (temp.length < 2) {
        time.seconds = '0' + time.seconds;
    }

    import_timer[0].innerHTML = time.days;
    import_timer[1].innerHTML = time.hours;
    import_timer[2].innerHTML = time.minutes;
    import_timer[3].innerHTML = time.seconds;

}

setInterval(timer,1000);

function past_event_cell_more(cell) {
    past_event_cell.className = "past_event-cell";
    for (var i = cell; i > 0; i--) {
        var copy_cell = past_event_cell.cloneNode(true);
        past_event_parent.appendChild(copy_cell);
    }
}

function view_map () {

    var s = document.getElementsByClassName('contact_map-map_active');
    if (s.length == 0) {
        no_active_map.className = 'contact_map-map_active';
        no_active_map_info.className = 'contact_map-map_active';
        active_map_button.className = 'active_map_button';
        active_map_button.innerText = 'View Info';
    }
    else {
        no_active_map.classList.remove('contact_map-map_active');
        no_active_map_info.classList.remove('contact_map-map_active');
        active_map_button.classList.remove('active_map_button');
        active_map_button.innerText = 'View Map';
    }
}

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //alert(scrollHeight)
    if (scrolled > 800 & scrolled < scrollHeight-800) {
        arrow_up.classList.remove('arrow_up-footer');
        arrow_up.className = 'arrow_up-fixed';
    }
    else {
        arrow_up.classList.remove('arrow_up-fixed');
        arrow_up.className = 'arrow_up-footer';
    }
}
