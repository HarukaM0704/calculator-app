// ボタンがクリックされたらボタンのvalueを表示
$('#number-button').on('click', function(){
  $('#content').val($(this).val());
})
