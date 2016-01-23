function $(id) {
    return document.getElementById(id);
}

showResult();

function showResult() {
    $('button').addEventListener('click', countDown);
}

function countDown() {
    var timer = setTimeout(countDown, 1000);

    showWarning();

    var input = ($('time').value).trim();
    if (!input) {
        showWarning('请先输入日期');
    }

    var futureTimeArr = input.split('-');
    if (!futureTimeArr || futureTimeArr.length !== 3) {
        showWarning('请按指定格式YYYY-MM-DD输入日期');
        return;
    }

    var currentTime = new Date();
    var futureTime = new Date(futureTimeArr[0], futureTimeArr[1] - 1, futureTimeArr[2]);
    var diffTime = futureTime - currentTime;
    if (diffTime <= 0) {
        showWarning('请输入一个未来时间');
        clearTimeout(timer);
        return;
    }

    var diffDays = diffTime / (24 * 60 * 60 * 1000);
    var days = Math.floor(diffDays);
    var diffHours = (diffDays - days) * 24;
    var hours = Math.floor(diffHours);
    var diffMinutes = (diffHours - hours) * 60;
    var minutes = Math.floor(diffMinutes);
    var diffSeconds = (diffMinutes - minutes) * 60;
    var seconds = Math.floor(diffSeconds);

    var notice = '距离' + futureTimeArr[0] + '年' + futureTimeArr[1] + '月' + futureTimeArr[2] + '日还有' + days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
    $('notice').innerHTML = notice;
}

function showWarning(warning) {
    if (warning) {
        $('warning').innerHTML = warning;
    } else {
        $('warning').innerHTML = '';
    }
}
