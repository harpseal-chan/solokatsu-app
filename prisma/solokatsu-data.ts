import { Prisma, Category, Difficulty, Budget } from "@prisma/client";

export const initialSoloKatsuData: Prisma.SoloKatsuCreateInput[] = [
  {
    title: "純喫茶巡り",
    description:
      "レトロな雰囲気の喫茶店で名物のクリームソーダや硬めプリンを味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/junkissa.webp",
  },
  {
    title: "陶芸体験",
    description: "土をこねて自分だけの器を作る、手作りの楽しさと達成感",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/tougei.webp",
  },
  {
    title: "動物カフェ",
    description:
      "猫やうさぎなど、様々な動物たちと間近で触れ合える癒やしのスポット",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/animal_cafe2.webp",
  },
  {
    title: "季節の植物を楽しむ",
    description: "桜、ひまわり、紅葉、梅など、四季折々の花や植物を見に行く",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/flower.webp",
  },
  {
    title: "断捨離",
    description: "不要なモノを手放して部屋も心もスッキリ",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/clothes2.webp",
  },
  {
    title: "世界料理巡り",
    description: "エスニックからヨーロッパまで世界の多彩なグルメを体験する",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/ethnic.webp",
  },
  {
    title: "図書館",
    description:
      "静かな空間で読書や勉強に集中 気が向いたら本棚から興味のある1冊を見つけるのも良し",
    category: Category.CULTURE,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/library.webp",
  },
  {
    title: "聖地巡礼",
    description: "アニメや映画など、舞台となった場所を訪問する",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.LUXURY,
    imageUrl: "/images/tokai_on_air.webp",
  },
  {
    title: "エステ",
    description: "フェイシャルやボディトリートメントで自分へのご褒美",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
  },
  {
    title: "アプリ開発",
    description:
      "自分のアイデアを形にして、プログラミングスキルも磨けるクリエイティブな活動",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.FREE,
  },
  {
    title: "ラーメン屋",
    description: "一人で気軽に入れるラーメン屋で、こだわりの一杯を味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/ramen.webp",
  },
  {
    title: "映画館",
    description: "最新の映画を大画面で楽しむ、非日常のエンターテイメント体験",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "美術館",
    description: "名作から現代アートまで、様々な作品を鑑賞して感性を刺激する",
    category: Category.CULTURE,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/art_museum3.webp",
  },
  {
    title: "ピクニック",
    description: "公園や自然の中でお弁当を広げて、のんびりとした時間を過ごす",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "家庭菜園",
    description: "自宅の庭やベランダで野菜やハーブを育てて、収穫の喜びを味わう",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/shiso.webp",
  },
  {
    title: "もんじゃ",
    description: "できたてのもんじゃをヘラで楽しむ、東京下町グルメの定番",
    category: Category.GOURMET,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/monja.webp",
  },
  {
    title: "コンサート鑑賞",
    description: "生の演奏を聴いて音楽の感動を味わう",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
    imageUrl: "/images/concert.webp",
  },
  {
    title: "料理教室",
    description:
      "プロの講師から料理の技術を学びながら、美味しい料理を作る楽しさを体験する",
    category: Category.CULTURE,
    difficulty: Difficulty.HARD,
    budget: Budget.LUXURY,
  },
  {
    title: "散歩",
    description:
      "近所の公園や街中をゆっくり歩いて、季節の変化や日常の風景を楽しむ",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/walking.webp",
  },
  {
    title: "ネットサーフィン",
    description:
      "興味のあるトピックを調べたり、動画を見たり、SNSをチェックしたりして、インターネットの世界を自由に探索する",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "フルーツパーラー巡り",
    description: "旬のみずみずしいフルーツを使ったパフェやジュースを味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/fruit_parlor.webp",
  },
  {
    title: "ランプ作り体験",
    description:
      "ガラスや紙を使って自分だけのオリジナルランプを作る、創造力を刺激するワークショップ",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
    imageUrl: "/images/lamp.webp",
  },
  {
    title: "乗馬体験",
    description: "馬に乗って動物との触れ合いとアウトドアの楽しさを味わう",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/horse.webp",
  },
  {
    title: "プラネタリウム",
    description:
      "仕事帰りや休日のスキマ時間に、ふらっと手軽に非日常のロマンを満喫できるスポット",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "フリマアプリ活用",
    description: "不要なものを売って小遣い稼ぎ 意外と何でも売れます",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/accessory.webp",
  },
  {
    title: "サイゼリヤ",
    description: "圧倒的コスパでイタリアンを満喫できる、ソロ活の定番スポット",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "メイクレッスン",
    description:
      "トレンドから自分に似合う正解まで、周りに差をつける一生モノの技術が身につく時間",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
  },
  {
    title: "絶景駅",
    description:
      "改札を出た瞬間に広がる圧倒的な美しさに、ただただ心を奪われる奇跡の空間",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/station.webp",
  },
  {
    title: "サービスエリア",
    description:
      "SA限定グルメに舌鼓を打ち、お家で楽しむ自分用のお土産をじっくり吟味する贅沢",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/sa.webp",
  },
  {
    title: "ホットケーキミックスで簡単スイーツ",
    description:
      "不器用でも材料を混ぜる→焼くだけで簡単にできる、まるでお店クオリティの絶品スイーツ",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/cake.webp",
  },
  {
    title: "回転寿司",
    description:
      "食べるネタや順番もすべて自分ルール、一皿ごとに自分の「今食べたい」を叶え続ける贅沢時間",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/sushi.webp",
  },
  {
    title: "裁判傍聴",
    description:
      "一歩足を踏み入れればそこは緊迫の空間、正義とは何かを静かに自分に問いかけるディープな時間",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.FREE,
  },
  {
    title: "川下り",
    description:
      "心地よい風と水しぶきを浴びながら、渓谷の絶景をダイナミックに体感する癒やしの旅",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.HARD,
    budget: Budget.STANDARD,
    imageUrl: "/images/river.webp",
  },
  {
    title: "シーシャバー",
    description:
      "ゆらめく煙と心地よい音楽に身をゆだね、頭を空っぽにして究極の「何もしない」を楽しむ時間",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/shisha.webp",
  },
  {
    title: "部屋の模様替え",
    description:
      "家具の配置を少し変えるだけで、見慣れた部屋の雰囲気ががらっと変わる",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "紅茶専門店",
    description: "香ばしいスコーンを口に運び、淹れ立ての紅茶で流し込む幸せ",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/tea.webp",
  },
  {
    title: "パーソナルカラー/骨格診断",
    description:
      "服やメイクの買い物の失敗が少なくなる、一生使える自分だけのスタイルブックを手に入れる体験",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
    imageUrl: "/images/personal_color.webp",
  },
  {
    title: "金魚釣り堀",
    description:
      "水面をぼんやり眺めながら金魚が釣れるのを待つ、のんびりとした時間の流れに癒やされる",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/fishing.webp",
  },
  {
    title: "会話禁止カフェ",
    description:
      "「話さない」というルールが心地いい、日常のせわしさから完全に切り離された大人のシェルター",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/book_cafe.webp",
  },
  {
    title: "資格の勉強",
    description:
      "自分自身の可能性を広げるために、一歩ずつ理想の未来へ近づく知的な自己投資",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "夜パフェ",
    description:
      "一日の終わりに甘い贅沢を。ちょっとした罪悪感さえも愛おしくなる、自分への最高のご褒美",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/parfait2.webp",
  },
  {
    title: "パン作り体験",
    description:
      "プロのコツを教わりながら真っ白な粉をこね上げ、ふっくら焼き上がった時の感動を味わう",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/bread.webp",
  },
  {
    title: "個室サウナ",
    description:
      "寝そべるのも、ロウリュのタイミングもすべて自由。誰の目も気にせず、自分だけのサウナを完全独占する贅沢",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "自己理解ノートをつくる",
    description:
      "自分の好き嫌いや、やりたいこと/やりたくないことをノートに好きなだけリストアップしてみる",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/notebook.webp",
  },
  {
    title: "物産展巡り",
    description:
      "現地でしか買えないレアなお土産や未知の味に出会える、活気あふれる会場をマイペースに回る気ままな宝探し",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "造幣局見学",
    description:
      "普段使っている500円玉などの貨幣が作られる舞台裏へ。圧倒的な最新技術をのぞき見する大人の社会科見学",
    category: Category.CULTURE,
    difficulty: Difficulty.HARD,
    budget: Budget.FREE,
    imageUrl: "/images/mint.webp",
  },
  {
    title: "海外旅行",
    description:
      "世界の絶景をこの目で見て、本場の美食をマイペースに堪能。がんばる自分に最高の体験をプレゼント",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.HARD,
    budget: Budget.LUXURY,
    imageUrl: "/images/taiwan.webp",
  },
  {
    title: "地元の銭湯",
    description:
      "手軽なワンコインで一日の疲れを大きなお風呂で洗い流す日常のご褒美",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "たこ焼きパーティ",
    description:
      "たこ焼き器さえあれば気軽に始められ、たくさん作って冷凍ストックもできる優秀粉もの",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "焼肉ライク",
    description:
      "仕切りもあるから視線も気にならない。無煙ロースターで匂い移りを気にせず、おひとり様の快適さを100%追求した専用空間",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "独立系書店巡り",
    description: "店主の個性が光る本のセレクトショップをハシゴ",
    category: Category.CULTURE,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/book_store.webp",
  },
  {
    title: "動物園",
    description:
      "お気に入りの動物の前で立ち止まったまま、何時間過ごしても自由。誰にも気兼ねせず動物たちの様子を見守る",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/zoo2.webp",
  },
  {
    title: "ホットヨガ体験",
    description:
      "じんわりとほぐれていく自分の体と呼吸だけに100%意識を向ける。スタジオの心地よい暗闇の中で、静かに自分と向き合うリフレッシュタイム",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "いっぱい寝る",
    description: "予定を入れない贅沢を噛み締めて、気が済むまでぐっすり眠る",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "スマートホーム化",
    description:
      "音声入力やスマホアプリで家電を遠隔操作。自分の部屋を1からハックして理想の秘密基地に育てる",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
  },
  {
    title: "季節限定のお菓子を味わう",
    description:
      "春の桜味、夏のチョコミント、秋のさつまいもなど...味覚で季節の移り変わりを楽しむ",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/chocolate_mint.webp",
  },
  {
    title: "同人誌即売会",
    description:
      "商業誌では絶対に読めない、ニッチで濃すぎる専門知識の宝庫。見本誌を自分のペースでペラペラとめくりながら、未知の教養と出会う知的宝探し",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/bigsight.webp",
  },
  {
    title: "はとバス",
    description:
      "ガイドの解説を聞きながら、知っているようで知らなかった東京の歴史や街の魅力を再発見",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
  },
  {
    title: "レンタサイクル",
    description:
      "電車や車では見落としてしまう街の景色や季節の香りを、ペダルを漕ぎながらダイレクトに楽しむ爽快お散歩",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "大掃除",
    description: "好きな音楽や映像を流しながら、部屋のすみずみまでピカピカに",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "コラボカフェ",
    description:
      "好きな作品の音楽やグッズに囲まれた空間で、キャラクターをイメージしたメニューを味わいながら世界観にどっぷり浸る",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/kirby_cafe.webp",
  },
  {
    title: "餃子の王将",
    description: "パリッと焼けた熱々の餃子をキンキンに冷えたビールで流し込む",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "リース作り",
    description:
      "春のミモザや冬のクリスマスなど、その時期だけの草花や素材に触れながら、世界に一つだけのリースを作る没頭時間",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/wreath.webp",
  },
  {
    title: "骨董市",
    description:
      "レトロな雑貨や海外のヴィンテージ食器など、世界のどこかから集まったものの中から宝物を探し出す",
    category: Category.CULTURE,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "海辺散策",
    description:
      "波の音をBGMに心地よい潮風を感じながら、どこまでも広がる水平線を眺める",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.FREE,
    imageUrl: "/images/beach.webp",
  },
  {
    title: "コーディネート研究",
    description:
      "手持ちの服や小物を何パターンも試着して、自分に一番似合うスタイリングを見つけ出す",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "マルシェ",
    description:
      "キッチンカーで買ったご飯を公園で味わい、可愛いハンドメイドアクセサリーのお店を覗いてみる",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "中華街食べ歩き",
    description:
      "台湾唐揚げ、焼き小龍包など熱々の中華グルメを頬張り旅行気分を味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/chinatown2.webp",
  },
  {
    title: "自宅で筋トレ",
    description:
      "YouTubeの筋トレ動画を見ながらおうちの中でも気軽にトレーニング",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "スーパー銭湯",
    description:
      "露天風呂やサウナなどにじっくり浸かり、風呂上がりは休憩スペースで漫画を読みながらダラダラ過ごす",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/spa.webp",
  },
  {
    title: "スパイスカレー",
    description:
      "お店ごとに異なる盛り付けや味にワクワクしながら、こだわりが詰まった一皿とじっくり味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/curry.webp",
  },
  {
    title: "ワイナリー見学",
    description:
      "一本のワインが生まれるまでのストーリーを学び、試飲で出会ったお気に入りの1本を自分へのお土産に買ってみる",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/winery.webp",
  },
  {
    title: "日帰り旅行",
    description:
      "車窓からの景色を眺めながら移動し、現地のグルメや温泉を好きなペースで満喫してその日のうちにサクッと帰る",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
  },
  {
    title: "凧揚げ",
    description:
      "芝生広場で青空を舞う凧を操ることに集中する ニッチだけどわりと楽しい",
    category: Category.REFRESH,
    difficulty: Difficulty.HARD,
    budget: Budget.LIGHT,
  },
  {
    title: "おうち縁日",
    description:
      "焼きそばや冷やしきゅうりなどの屋台メニューを作って、冷房のきいた涼しい部屋でいただく",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "アクセサリー作り",
    description:
      "必要な材料がすべて揃ったキットを使って手軽に挑戦。世界に一つだけの可愛いアクセサリーを作ってみる",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/brooch.webp",
  },
  {
    title: "お菓子の工場直売所",
    description:
      "直売所ならではの激安アウトレット品や限定スイーツをカゴいっぱいに詰め込む",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "展望タワー",
    description:
      "街のシンボルであるタワーの展望台から広大な絶景を心ゆくまでぼーっと眺める",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/tower2.webp",
  },
  {
    title: "ニードルフェルト",
    description:
      "ふわふわの羊毛を針で刺してつくるマスコット ちょっと歪んだ表情も愛おしく思える",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/purin.webp",
  },
  {
    title: "生成AIの活用",
    description:
      "頭の中にあるユニークなアイデアを言葉にして入力し、自分の理想通りのイラストやストーリーを創る",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "スケート",
    description:
      "他人の滑るスピードや上手さを気にせず、自分のペースで少しずつスムーズに滑れるようになっていく達成感",
    category: Category.REFRESH,
    difficulty: Difficulty.HARD,
    budget: Budget.LIGHT,
  },
  {
    title: "駄菓子パーティ",
    description:
      "実店舗で買うのは勇気がいる駄菓子も、通販であれば人目を気にせずまとめ買い",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/dagashi.webp",
  },
  {
    title: "3DCG制作",
    description:
      "Blenderなどの無料ソフトを使って立体的なキャラクターや世界を創り出す",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.FREE,
    imageUrl: "/images/3dcg.webp",
  },
  {
    title: "お菓子の家づくり",
    description:
      "市販のビスケットやチョコを組み合わせ、絵本で見たような小さくて可愛いお菓子の家をつくる",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/okashi_house.webp",
  },
  {
    title: "カルディでプチ贅沢",
    description:
      "温めるだけでお店の味になる本格レトルトや珍しい調味料を使って、いつもより豪華な食卓を",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "温泉街食べ歩き",
    description:
      "湯けむりが立ち込めるレトロな街並みを歩きながら、名物グルメを満喫する",
    category: Category.GOURMET,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
  },
  {
    title: "植物園",
    description:
      "瑞々しい緑や季節の鮮やかな花々に癒される きれいな花にカメラを向けたり珍しい熱帯植物をじっくり観察するのも良し",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/botanical_garden.webp",
  },
  {
    title: "中国料理店",
    description:
      "贅沢な中華のコースをひと皿ずつ100%の集中力でじっくりと味わい尽くす",
    category: Category.GOURMET,
    difficulty: Difficulty.HARD,
    budget: Budget.LUXURY,
    imageUrl: "/images/chinese_cuisine.webp",
  },
  {
    title: "寝台特急",
    description:
      "明かりを落とした秘密基地のような個室の大きな窓から、どこまでも続く夜の街並みを独り占め",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.HARD,
    budget: Budget.LUXURY,
    imageUrl: "/images/sunrise.webp",
  },
  {
    title: "レトロ建築見学",
    description:
      "どこか懐かしくて美しいノスタルジックな建物で、お気に入りのアングルでカメラを構える",
    category: Category.CULTURE,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/cabaret.webp",
  },
  {
    title: "豪華な朝ごはん",
    description:
      "いつもより少し早起きして、お洒落な洋食モーニングや心に染みる和食の朝御膳を食べに出かける",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/breakfast.webp",
  },
  {
    title: "参議院見学",
    description:
      "普段は立ち入れない特別な場所へと一歩足を踏み入れ、ガイドの説明に耳を傾けながら知識を深めていく",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.FREE,
    imageUrl: "/images/sangiin.webp",
  },
  {
    title: "ガラス館見学",
    description:
      "光を浴びてキラキラと輝く繊細なガラス細工や美しいグラスを観察。帰りにショップでお気に入りの商品を購入",
    category: Category.CULTURE,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/glasskan.webp",
  },
  {
    title: "出前パーティ",
    description:
      "家から一歩も出ずに食べたいものをスマホで注文 頼みすぎて余っても明日のご飯に回せる",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/demae.webp",
  },
  {
    title: "温泉宿",
    description:
      "いつも頑張っている自分にたまにはご褒美を 深夜の星空や朝もやの景色を眺めながら露天風呂にゆっくり浸かる",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LUXURY,
    imageUrl: "/images/onsen.webp",
  },
  {
    title: "ビアホール",
    description:
      "こだわりのクラフトビールやおつまみをマイペースに堪能、休日の昼飲みから仕事帰りのサクッと1杯まで気分に合わせて自由に使える",
    category: Category.GOURMET,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/beer_hall.webp",
  },
  {
    title: "バレンタイン",
    description:
      "自分へのプレゼントに限定スイーツや可愛いパッケージのチョコレートを買う",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/chocolate.webp",
  },
];
