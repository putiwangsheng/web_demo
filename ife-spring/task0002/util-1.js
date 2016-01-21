function $(id) {
    return document.getElementById(id);
}

function getResult() {
    //首先调用showError,即要先判断输入是否正确，达到输入正确提示消失的效果
    showError();
    //获取input元素，去掉首尾空字符存入数组
    var input = ($('hobbies').value).trim();
    if(!input){
        showError("输入不能为空");
        return;
    }
    //正则表达式匹配。允许以这些字符分隔
    var array = input.split(/\n|\s|\ |\，|\,|\、|;/);

    array = uniqArray(array);
    array = filterArray(array);

    if(array.length > 10){
        showError("输入的爱好不能超过10个");
        return;
    }
    var newNode = document.createElement('p');

    // newNode.innerHTML = array.toString();
    //以上一句和下面两句等效，即将新的元素追加到创建的新节点上
    // var textNode = document.createTextNode(array.toString());
    // newNode.appendChild(textNode);

    //以复选框显示
    for (var i = 0; i < array.length; i++) {
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checkboxid' + i);
        var label = document.createElement('label');
        label.setAttribute('for', 'checkboxid' + i);
        label.innerHTML = array[i];
        newNode.appendChild(checkbox);
        newNode.appendChild(label);
    }

    var element = $('body');
    element.appendChild(newNode);
}

//去除重复元素
function uniqArray(arr) {
    var result = arr;

    for (var i = result.length - 1; i >= 0; i--) {
        var baseElement = result[i];
        for (var j = i - 1; j >= 0; j--) {
            if(baseElement === result[j]){
                result.splice(i, 1);
            }
        }
    }
    return result;
}
//去除空元素
function filterArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] !== " " && arr[i] !== ""){
            result.push(arr[i]);
        }
    }
    return result;
}

function addEvent() {
    $('button').addEventListener('click', getResult);
}

function showError(warning) {
    if (warning) {
        $('warning').innerHTML = warning;
    } else {
        $('warning').innerHTML = '';
    }
}

addEvent();
