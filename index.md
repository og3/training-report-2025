# AI・IoT科 卒業制作まとめ
　2025年1月～6月の職業訓練校で学んだことや、制作物、就職活動の記録をまとめています。
## 訓練期間
- 2025年1月6日～6月30日
## 訓練内容
- 主に以下の書籍を読んで実際に動かしてみる、という内容。
### 読んだ本
- [『やさしいPython』：高橋麻奈　著](https://www.sbcr.jp/product/4797396027/)
- [『スッキリわかるPythonによる機械学習入門 第2版』：須藤 秋良　著/株式会社フレアリンク　監修](https://book.impress.co.jp/books/1124101073)
- [『新しいLinuxの教科書　第２版』：三宅英明　著 / 大角 祐介　著](https://www.sbcr.jp/product/4815624316/)
- [『カラー図解　Raspberry Piではじめる機械学習　基礎からディープラーニングまで』：金丸 隆志　著](https://gendai.media/list/books/bluebacks/9784065020524)
- [『これ1冊でできる！ラズベリー･パイ 超入門 改訂第8版 Raspberry Pi 1+/2/3/4/400/5/Zero/Zero W/Zero 2 W 対応』：福田和宏　著](http://www.sotechsha.co.jp/pc/html/1333.htm)
### 作ったモノ
- [『study_timer：職業訓練校での9:30~15:30までの時間を素敵に過ごすためのヤツ（時間はカスタム可）』](https://github.com/og3/study_timer)
- [『speedtest：30分に一度speedtest-cli --secureを実行してGoogleSpreadSheetに結果を記録するスクリプト』](https://github.com/og3/speedtest)
- [『find_kuso_restaurant_from_tabelog：食べログから評価の低い店を探して、そのリストを作るスクリプト』](https://github.com/og3/find_kuso_restaurant_from_tabelog)
- [『find_kuso_review_from_tabelog：『食べログ』に掲載されている店のURLを渡すとその店の口コミを取得するスクリプト』](https://github.com/og3/find_kuso_review_from_tabelog)
- [『denkiyohou：日次の気象情報から電気消費量を予測するモデル』](https://github.com/og3/denkiyohou)
- [『qrcode_in_out_management_with_Raspberry_Pi：ラズパイで動くQRコード入退室管理システム』](https://github.com/og3/qrcode_in_out_management_with_Raspberry_Pi)
## やったことのタイムライン（メイン）
- 1月14～17日：pythonを使って初めて自作のコードを書く。＠『study_timer』
- 1月22～28日：クラスやオブジェクトを使ってみるために、「カードゲーム「ブラックジャック」を題材にしたCUIゲーム」を作る。ここでテストコードの『pytest』、フォーマッターの『black』を使って保守性の高いコードができるようになる。＠『21』
- 1月29日～2月7日：『21』のCPUを強化するために、「ランダムフォレスト」で学習モデルを作ってみた。が、モデルを積んだCPUが打つ手の結果をうまく検証できなかったので、モヤモヤする。＠『21』
- 2月6～7日：引っ越し先のインターネット環境調査のためのスクリプトを書く。=>結論：日中のレオネットの回線速度はまとも。＠『speedtest』
- 2月8日～：sklearn等のライブラリの使い方はわかったが、機械学習の概念はほとんどわからなかったので、『ヨビノリ』などで、数学的なところを勉強してみる。が、数学の抽象概念から実データ（じゃんけんの手など）の橋渡しができずに、実装に生かすまでは至らず。
- 2月17~27日：結局のところ、「数字だからよくわからない」という問題に気づき、文字列を扱ってみるアプローチを思いつく。「世直し」も込みで『食べログ』における「クソレビュー」を排除してリスコアリングするプログラムを作ろうとする。=>結論：『sudachi』や『mecab』といった形態素解析ツールでは、『食べログ』のレビューを十分にデータ化することができずに諦めた。あと、ナゾのハマり方をして『sudachi』や『mecab』を動かすだけでも大変苦労した。。
- 3月24日～4月4日：そのモデルが出す値が正解かどうか、が実際に観測できるデータとして、「気温と電気の使用量」があると思い付いた。実際の過去2年分の電気使用量のデータがあったのでそれを取得してモデルを作ってみた。結論：「特徴量エンジニアリング」がうまくできず、モデルの予測と実際の電気使用量が大きく乖離した。- [『苦労の過程＠denkiyohou』](https://github.com/og3/denkiyohou/issues)
- 6月4～5日：ラズパイ関連で習ったモノを組み合わせたら、「QRコードを読み取るためのカメラが起動しすぎてCPUがアツアツになる問題」が解決できたし、音を出してユーザーフレンドリーさを付けることもできた。＠qrcode_in_out_management_with_Raspberry_Pi
