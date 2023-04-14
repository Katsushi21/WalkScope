<script>
  export let title = 'Webページのタイトル';
</script>

<style>
  /* ページ全体のスタイル */
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  /* 上部の検索バー */
  #kensaku {
    height: 100px;
    background-color: #eee;
    text-align: center;
    font-size: 24px;
    line-height: 100px;
  }

  /* 地図表示エリア */
  #map {
    height: calc(100vh - 200px);
    background-color: #ccc;
  }

  /* 下部の保存ボタン */
  #hozon {
    height: 100px;
    background-color: #eee;
    text-align: center;
    font-size: 24px;
    line-height: 100px;
  }

  /* 全体レイアウト */
  #container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 100px;
    grid-template-areas: "kensaku" "map" "hozon";
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    #container {
      grid-template-rows: 50px 1fr 50px;
    }
    #kensaku, #hozon {
      font-size: 16px;
      line-height: 50px;
    }
  }
</style>

<div id="container">
  <div id="kensaku">kensaku</div>
  <div id="map">map</div>
  <div id="hozon">hozon</div>
</div>