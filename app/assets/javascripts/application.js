// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require Chart.min
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require moment
//= require fullcalendar
//= require cocoon
//= require bootstrap-sprockets
//= require_tree .

// トップ画面のスライドショーの設定
$(window).load(function() {
  $('.bg-slider').bgSwitcher({
    images: [ 'assets/dread.jpg', 'assets/santoukin.jpg', 'assets/sideraise.jpg',  'assets/buttleroap.jpg', 'assets/burbel.jpg'], // 切り替える背景画像を指定
    interval: 4000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間を指定します。
    easing: "swing" // エフェクトのイージングをlinear,swingから指定

  });

});


// 詳細画面と編集画面の切り替え
$(function(){
  $('.edit-display-btn').on('click', function(){
    $('.edit-display-btn').toggleClass('switch');

    //wrapがswitchを持っていれば
    if($('.edit-display-btn').hasClass('switch')){

      //要素の表示を切り替える
      $('.base-display').hide(500);
      $('.edit-hide-display').show(500);
      $('#my_supplement-title').html('マイサプリメント編集');
      $('#event_template-title').html('メニューテンプレート編集');
      $('#admin-customer-title').html('会員編集');
      $('#event-title').html('筋トレログ編集');

    //wrapがswitchを持っていなければ
    }else{

      //要素の表示を切り替える
      $('.base-display').show(500);
      $('.edit-hide-display').hide(500);
      $('#my_supplement-title').html('マイサプリメント詳細');
      $('#event_template-title').html('メニューテンプレート詳細');
      $('#admin-customer-title').html('会員詳細');
      $('#event-title').html('筋トレログ詳細');

    }
  });
})