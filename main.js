// 数字または演算子ボタンがクリックされたらボタンのvalueを追加して表示
$('.button').on('click', function () {
    var formula = $('#content').val();
    // error表示の場合は一回リセットしてからvalue追加
    if (formula == 'error') {
        $('content').val('');
        formula = '';
    }
    $('#content').val(formula + $(this).val());
})

// =ボタンが押されたらフォーム内を計算して表示
$('.calc').on('click', function () {
    try {
        var ans = eval($('#content').val());
        $('#content').val(ans);
    }
    // 計算エラーの場合はフォームにerrorと表示
    catch (e) {
        $('#content').val('error');
    }

})

// CLRボタンが押されたらフォーム内をクリア
$('.clr').on('click', function () {
    $('#content').val("");
})
