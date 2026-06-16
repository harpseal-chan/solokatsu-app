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
    impressions:
      "革張りのソファに身を委ねて、珈琲の香りが漂うレトロな空間で読書をしたりアンティークな雑貨を眺めて過ごしています。私のお気に入りは、純喫茶ならではのスイーツを味わうこと。特に、昔ながらの硬めのプリンと鮮やかなクリームソーダの甘い組み合わせは心がときめきます。",
    tips: `
- 現金支払いのみのお店が多いので、事前に現金を準備しておくと安心。
- 店内は喫煙可能な場合もあるので、煙が気になる方は口コミ等で確認しておきましょう。
    `.trim(),
  },
  {
    title: "陶芸体験",
    description: "土をこねて自分だけの器を作る、手作りの楽しさと達成感",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/tougei.webp",
    impressions: `目の前の土の感触と成形に意識を集中させるため、自然とデジタルデトックスになります。
難しい箇所は専門スタッフが丁寧に手伝ってくれるコースを選べば、初心者でも安心して参加できます。
焼き上がった器は後日自宅に届き、食卓に並ぶたびに愛着が湧いてきます`,
    tips: `
- 粘土を触るため、汚れてもいい服装で行くか、エプロンを持参しましょう。
- 土をこねる際に邪魔になるため、爪は事前に短く切っておくのがおすすめです。
    `.trim(),
  },
  {
    title: "動物カフェ",
    description:
      "猫やうさぎなど、様々な動物たちと間近で触れ合える癒やしのスポット",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/animal_cafe2.webp",
    impressions: `私は動物が好きで、猫・フクロウ・ハリネズミなど色んな動物カフェに行きました。
普段はなかなか出会えない珍しい動物たちとも触れ合うことができてとても癒やされます。
周囲の人たちも目の前の動物に夢中なので、一人で来ても目立ちません。`,
    tips: `
- 動物は嗅覚が敏感なので、匂いの強い香水や柔軟剤は使用せずに来店しましょう。
- 服に毛やよだれが付く場合があるため、汚れても良く、引っかかりにくい素材の服を選ぶのがおすすめです。
    `.trim(),
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
    impressions: `国内にいながら異国情緒を感じ、手軽に世界の料理を味わうことができます。
初心者は、店舗数が多くて入りやすいインドカレーなどの身近なジャンルから始めていって、慣れてきたらより本格的で珍しい国のお店に挑戦してみるのもおすすめです。
その国の食文化に触れることで、何が主食なのか、どんなスパイスが使われているのかなども学ぶことができ、まるで旅をしているような知的好奇心も満たされます。`,
    tips: `
- メニュー名だけではどんな料理か想像しにくい場合もあるので、事前にSNSやグルメサイトでレビューをチェックしておくと注文しやすいです。
    `.trim(),
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
    imageUrl: "/images/programming.webp",
  },
  {
    title: "ラーメン屋",
    description: "一人で気軽に入れるラーメン屋で、こだわりの一杯を味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/ramen.webp",
    impressions: `ソロ活の定番スポットで、カウンター席中心のお店が多いのでおひとり様にもやさしいです。
お店ごとに具材やスープに特色があり、こだわりを感じる一杯をじっくりと味わいます。
写真は個人的おすすめのラーメンで、「卍力（まんりき）」の「スパイス・ラー麺」です。複雑なスパイスや酸味の効いたスープ、清涼感のあるパクチーの香り、ほろほろのチャーシューが絶品で、また食べたくなる中毒性のある味です。`,
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
    impressions: `誰かと一緒だと相手のペースを気にしてしまいますが、ソロだとマイペースで鑑賞できるのが魅力です。
    一つの作品を納得いくまでじっくり眺めてもよし、興味のないエリアをスキップしてもよし。
    自分の感性だけに集中してアートと向き合う特別な時間を過ごせます。`,
    tips: `
- 館内は歩いたり立って鑑賞する時間が長いため、足音が響きにくい履き慣れた靴で行きましょう。
- コートや大きな荷物は館内のコインロッカーに預けて、身軽な状態で鑑賞するのがおすすめです。
    `.trim(),
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
    description: "自宅のベランダで野菜やハーブを育てて、収穫の喜びを味わう",
    category: Category.INDOOR,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/shiso.webp",
    impressions: `薬味が好きなので、春からシソの水耕栽培を始めました。
種を植えて数ヶ月が経ち、現在は芽も出て順調に育っており、夏に収穫するのが楽しみです！
省スペースで手軽に始められて、日々の成長を観察する楽しさがあるソロ活です。`,
    tips: `
- 栽培用の容器は専用のものを買わなくても、空いたペットボトルや卵パックなどで代用可能です。
- 藻の発生を防ぐため、ペットボトルなどの透明な容器を使う場合はアルミホイルで周りを覆って遮光しましょう。
    `.trim(),
  },
  {
    title: "もんじゃ",
    description:
      "東京の下町グルメであるもんじゃ焼きを、鉄板を前に自分のペースで味わいつくす",
    category: Category.GOURMET,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/monja.webp",
    impressions: `関西出身でもんじゃを食べたことがなかったので、もんじゃで有名な月島に行ってきました。
焼き方が分からなくても店員さんが焼いてくれて、１対１で話すのが少し緊張しましたが話を振ってくれたおかげで緊張が和らぎました。
一押しはイカ墨チーズもんじゃです。お米が少し入っており洋風リゾットのような味わいでした。
イカ墨は歯が黒くなるので二人以上だと注文に躊躇いますが、一人だとあまり気にしなくていいので楽です。`,
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
    impressions: `お金をかけずに気軽にできるソロ活です。
近所であっても、普段は通らない道をあえて選んで歩いてみると、新しいお店や綺麗な景色などの新鮮な発見があったりします。
お気に入りの音楽やオーディオブックを聴きながら、自分のペースで気の向くままに歩く時間は、いい気分転換になります。`,
    tips: `
- 歩くとのどが渇いて自販機で飲み物を買いがちですが、お気に入りの水筒に好きな飲み物を入れて持っていくと、節約になりテンションもあがります。
    `.trim(),
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
    title: "フルーツパーラー",
    description: "旬のみずみずしいフルーツを使ったパフェやジュースを味わう",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
    imageUrl: "/images/fruit_parlor.webp",
    impressions: `フルーツパーラーとは、新鮮な果物を使ったパフェやフルーツサンド、ジュースなどのスイーツや軽食を楽しめる喫茶店のことです。
季節ごとに旬のフルーツを使ったフェアが開催されている場合も多く、その時期一番の旬のフルーツは非常に甘くて感動する美味しさです。
`,
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
    description: "家にある不用品を売って小遣い稼ぎ 意外と何でも売れます",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/accessory.webp",
    impressions: `使わなくなったモノは捨てずにフリマアプリに出品すると売れるかもしれません。
服や本はもちろん、トイレットペーパーの芯など意外なものも売れます。
商品の写真撮影や説明文の作成、梱包などやることは多く最初は面倒ですが、慣れると簡単です。
家の中がすっきりと片付くだけでなく、臨時収入にもなるので一石二鳥です。`,
    tips: `
- 出品する時は、似た商品をアプリ内で検索して売り切れになっている価格帯を参考にすると、高すぎず安すぎない相場ですぐに売れやすくなります。
- 最近のフリマアプリは、匿名で簡単に発送できるシステムが整っているため、プライバシーを守りながら手軽に利用できます。
    `.trim(),
  },
  {
    title: "サイゼリヤ",
    description: "圧倒的コスパでイタリアンを満喫できる、ソロ活の定番スポット",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/saizeriya.webp",
    impressions: `どのメニューを頼んでもハズレがなく、お腹いっぱい食べてもお財布に優しい、安定して満足度の高いコスパ最強レストランです。
お店によってはカウンター席もあるので一人でも入りやすいです。
いつも注文するお気に入りのメニューは「ミラノ風ドリア」「コーンクリームスープ」「柔らか青豆の温サラダ」の3点。
全部でなんと650円（2026年6月時点）。これほどコスパの良い飲食店はありません。
今度は無料の調味料でメニューのアレンジにも挑戦してみたいです。`,
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
      "電車を降りた瞬間に広がる圧倒的な美しさに、ただただ心を奪われる奇跡の空間",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/station.webp",
    impressions: `徒歩0分で素晴らしい絶景を見ることができます。
神奈川県横浜市にある、海の見える駅として有名なJR鶴見線の海芝浦駅に行きました。
電車を降りてホームの目の前が海というロケーションで、遠くには横浜ベイブリッジを望むことができます。
駅構内には公園が併設されており、折り返しの電車が出発するまでの間、ベンチに座りながら海をぼーっと眺める時間は最高に贅沢なひとときです。`,
    tips: `
- 海芝浦駅は会社の敷地内にある駅のため、一般の乗客は改札を出ることができません。
- 電車の本数が少なく、終電の時間帯は早いため、事前に時刻表をしっかりと確認しておきましょう。
    `.trim(),
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
    impressions: `ホットケーキミックスに牛乳・卵・サラダ油といった基本の材料を混ぜて焼くだけで、様々なスイーツが手軽に作れます。
特にパウンドケーキやスコーンは工程が少なく、チョコやナッツなどの具材で自由にアレンジもできます。`,
    tips: `
- YouTubeチャンネル「べるっぱのホットケーキミックス研究所」で、簡単に作れるスイーツがたくさん紹介されているので参考にしてみてほしいです。
    `.trim(),
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
    impressions: `敷居が高く見えますが、予約不要・無料で入場可能です。玄関ホールの開廷表ファイルを参考に興味のある裁判を選びます。
初めて行く場合は、事件の概要が分かりやすい刑事事件の初公判（開廷表に「新件」と記載されたもの）を傍聴するのがおすすめです。
法廷内は私語厳禁で誰もが裁判の行方に集中しているため、一人で席に座っていても周囲の目は全く気になりません。`,
    tips: `
- 土日祝は休庁のため、平日の開廷時間内に足を運ぶ必要があります。
- 裁判所の敷地内および法廷内での写真動画撮影、録音は一切禁止されています。（紙のメモはOK）`,
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
    impressions: `日々の忙しさから少し離れたいなと思い、癒しを求めてレトロな雰囲気の金魚釣り堀へ行ってみました。
お金を払って釣り竿と餌をもらい、池の周りにある椅子に座ります。
最初は音沙汰なしでしたが、常連っぽい人の動きを真似て竿を揺らしてみると綺麗な金魚がピチピチと釣れました。
ただ浮きの動きだけに集中したり、釣れた金魚の泳ぐ姿を観察する時間は、驚くほど心が静まり、最高の癒やしになりました。`,
  },
  {
    title: "会話禁止カフェ",
    description:
      "「話さない」というルールが心地いい、日常のせわしさから完全に切り離された大人のシェルター",
    category: Category.REFRESH,
    difficulty: Difficulty.NORMAL,
    budget: Budget.LIGHT,
    imageUrl: "/images/book_cafe.webp",
    impressions: `心が疲れたときに、ぜひ立ち寄ってみてほしい場所です。
店内は一人専用の仕切り席が多く、注文以外の会話は禁止されているため、周囲を気にせずほっと落ち着けます。
本をめくる音や水槽の水音に耳をすませながら静寂な空間に浸ったり、各席のノートに綴られた他のお客さんの日記や悩みに共感したり。
ドリンク1杯あたりの滞在時間が決まっているお店も多く、誰にも気を使うことなく、安心して一人の時間を満喫できます。`,
    tips: `
- お店ごとに独自のルールが多いため、事前にSNSや公式サイトでチェックしておくとよいです。
`,
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
    impressions: `「夜パフェ（シメパフェ）」とは、札幌を中心に、はしご酒の後にパフェを食べるという文化が発祥です。
店内はバーのような落ち着いた雰囲気で、繊細なデザインの焼き菓子やアルコールの効いたソルベが使われたパフェが多く、甘すぎない大人な味わいが魅力です。
お酒を飲んだ後ではなくても、仕事帰りに疲れたときのご褒美としてパフェを食べるのはどうでしょう。`,
    tips: `
- 開店してすぐ（17〜18時頃）の時間帯だと比較的空いています。
`,
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
    impressions: `今後やりたい仕事は何なのか悩んでいたときに、『世界一やさしい「やりたいこと」の見つけ方 人生のモヤモヤから解放される自己理解メソッド』（八木 仁平:著）という本に出会いました。
本に書かれている質問に答える形で、自分の「大事なこと（価値観）」「得意なこと（才能）」「好きなこと（情熱）」をノートに書き出していくと、頭の中のモヤモヤがすっきりと整理されていきます。
やりたいことがない場合は「やりたくないこと・嫌いなこと」を書き出すのもいいですよ。`,
    tips: `
- 綺麗に書こうとせず、思い浮かんだ言葉をそのままなぐり書きするくらいの方が、自分の本当の気持ちを引き出しやすいです。
`,
  },
  {
    title: "物産展",
    description:
      "現地でしか買えないレアなお土産や未知の味に出会える、活気あふれる会場をマイペースに回る気ままな宝探し",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.STANDARD,
  },
  {
    title: "造幣局見学",
    description:
      "普段使っている500円玉などの貨幣が作られる舞台裏へ。圧倒的な技術をのぞき見する大人の社会科見学",
    category: Category.CULTURE,
    difficulty: Difficulty.HARD,
    budget: Budget.FREE,
    imageUrl: "/images/mint.webp",
    impressions: `造幣局とは貨幣（1円〜500円玉）や金属工芸品などを製造している日本の行政執行法人のことで、大阪市に本局、さいたま市と広島市に支局があります。
併設の博物館では古銭や勲章の展示を見ることができ、さらに事前申し込みが必要ですが無料で工場見学も行っており、貨幣の製造工程が見られます。
他にも個人的におすすめなのが4月に開催される大阪本局の桜の通り抜け。140品種331本の桜が咲き誇り圧巻の景色です。`,
    tips: `
- 工場見学は平日しか実施していないので注意
- 桜の通り抜け期間中、大阪本局は休館日となります
`,
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
    impressions: `たこ焼き器や具材の用意は少し手間がかかりますが、焼くのは意外と簡単。
タコやネギなどの定番具材以外にはキムチやチーズもおすすめです。ソースマヨに飽きたら味変で出汁で食べると飽きないです。
余っても冷凍できるので、たくさん作っても大丈夫です。
誰の目も気にせず、焼き立て熱々のたこ焼きを頬張り炭酸ジュースで流し込むのが至高です。`,
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
    impressions: `自分の部屋をもっと居心地の良い場所にしたいと思い立ち、自宅のスマートホーム化に挑戦しました。
最初は設定が難しそうに思えましたが、スマホのアプリに従ってデバイスを連携させていくだけで、簡単に導入することができました。
電気の消灯スケジュールを設定しておけば、寝落ちしても自動で電気が消えてくれたり、帰宅前にアプリからエアコンを付けることで、帰ってきたときに部屋を快適な温度にしておくことができるなど、日々のQOLが非常に上がりました。
`,
  },
  {
    title: "季節限定スイーツを味わう",
    description:
      "春の桜味、夏のチョコミント、秋のさつまいもなど...味覚で季節の移り変わりを楽しむ",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
    imageUrl: "/images/chocolate_mint2.webp",
    impressions: `私は季節限定スイーツが好きで、お菓子が販売される時期が近づくとSNSでチェックしています。
特にチョコミントには目がなく、6月頃になるとコンビニや無印良品で販売されるスイーツを買い占めたり、ファミレスやカフェのチョコミントフェアのメニューを楽しんだりしています。`,
  },
  {
    title: "同人誌即売会",
    description:
      "日本最大級の同人誌即売会に足を運び、熱気あふれる会場で一般の書店にはないディープな同人誌を探す",
    category: Category.CULTURE,
    difficulty: Difficulty.HARD,
    budget: Budget.STANDARD,
    imageUrl: "/images/bigsight.webp",
    impressions: `個人が自由に作った同人誌が集まる日本最大級のイベント、コミケにはいつも参加しています。
なかでも評論系（趣味や仕事など幅広い知識が集まる分野）というジャンルが好きで、いつも料理や旅行、面白い体験談などの同人誌を買うことが多いです。
商業誌では絶対に読めないような、個人の並々ならぬ情熱やニッチなこだわりが凝縮された一冊に出会えます。`,
    tips: `
- コミケは8月と12月に開催されるため、熱中症対策や防寒対策などの服装・体調管理は万全にして臨むことが大切です。
- お目当てのサークルをスムーズに回れるよう、事前にWebカタログなどで配置図を確認し、現金を多めに用意していくとよいです。
`,
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
    impressions: `少し目立つので万人にはおすすめできませんが、やってみると割と楽しいので入れてみました。
風が強い日には驚くほど空高くまで上がるので、青空を見上げながら凧を操作するだけで良いリフレッシュになります。
`,
    tips: `
- 必ず木や電線、遮るもののない十分な広さがある芝生広場や河川敷で遊ぶようにしましょう。
- 通販で安価な凧が手に入るため気軽に始められます。
`,
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
    impressions: `なにかクリエイティブなことがしたいけど不器用でセンスもないので、ビーズ刺繍のブローチキットを購入しました。
説明書通りにビーズを一つひとつ縫い付けていくだけで、想像以上にいい作品が出来上がっていく過程がとても楽しいです。
パーツや色合わせが最初から決まっているキットなら、初心者でも迷わず安心して進められます。
縫うのに没頭しているうちに時間が経つのを忘れてしまい、自分で作ったブローチには特別な愛着が湧きました。`,
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
    impressions: `ニードルフェルトは、ふわふわの羊毛を専用の針で刺して形を作っていく手芸のことです。
小さなマスコットを作る場合は市販のキットを購入すれば材料を揃えるのも簡単で、私はサンリオの某キャラのキットを購入して挑戦しました。
最初は慣れていないので手に針を刺してしまう失敗もありつつ、なんとか完成。
見本と比べて顔のパーツが歪んでいたり足が大きくなってしまったりしましたが、自分で時間をかけて作ったからこそ愛着がわいてきます。
黙々と針を刺す作業に没頭できるので、デジタルデトックスにもなります。`,
  },
  {
    title: "生成AIの活用",
    description:
      "頭の中にあるユニークなアイデアを言葉にして入力し、自分の理想通りのイラストやストーリーを創る",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    imageUrl: "/images/gemini.webp",
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
    impressions: `昔絵本で見たお菓子の家が印象に残っていて、自分も作ってみたいなと思い、森永の公式レシピを参考に作ってみました。
溶かしたチョコを接着剤にしてビスケットで壁、チョコ菓子で屋根を組み立てていき、最後に金平糖やラムネでデコレーションしました。
見た目も可愛く、味も市販のお菓子を使っているので美味かったです。`,
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
  {
    title: "凝った料理づくり",
    description:
      "休日のまとまった時間を使い、普段は作らない手間の要るメニューを自分のためだけに作る",
    category: Category.GOURMET,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/liver_paste.webp",
    impressions: `休日にじっくり時間をかけて料理を作り、自分自身へのおもてなしをするのはいかがでしょうか。
最近貧血気味だったので、鉄分豊富なレバーペーストを作ってみました。レバーとハツを切り分け、玉ねぎとハーブで炒め、生クリームやバターとミキサーで混ぜて……といった数々の工程を実施し、ついに完成。
バゲットにたっぷり付けていただきました。お金も時間もかかりましたが、お店クオリティの味に仕上がり、美味しかったので作ったかいがありました。`,
  },
  {
    title: "採石場跡",
    description:
      "かつての巨大な地下採石場に広がる、まるで異世界や古代遺跡のような幻想的な空間を巡る",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
    imageUrl: "/images/oya.webp",
    impressions: `YouTubeの旅動画で見て気になっていた、栃木県宇都宮市にある大谷資料館に行きました。
ここはかつて大谷石を掘り出していた地下採石場の跡地で、野球場1つが入ってしまうほどの広大な空間が広がっています。
館内にはアートも飾られており、ライトアップされた光景は非常に幻想的でした。
帰りに宇都宮餃子とビールを味わうのもいいですよ。`,
    tips: `
- 館内の平均気温は年間を通して10度くらいしかなく夏でも冷え込むため、上着を持参しましょう。
- 階段が多い場所なので、歩き慣れたスニーカーで行くのがおすすめです。
    `.trim(),
  },
  {
    title: "Google Mapで行きたい場所リストを作る",
    description: "ネットやSNSで見かけた気になるスポットをGoogle Mapにピン留め",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
    impressions: `いつか行ってみたいお店やSNSで見かけた絶景スポットを忘れないように、Googleマップにリスト化しています。
これまではSNSのブックマークで保存したりスクショを撮ったまま埋もれてしまったりしていましたが、マップ上に一覧で可視化されると一気にワクワク感が増します。
「気になる喫茶店」「次の旅行先の観光スポット」などとアイコンを色分けして整理していく作業自体が楽しく、まるで自分専用のガイドブックを作っているような気分です。
ふと一人の時間ができたときも、このマップを開けば「ここから一番近い行きたい場所」がすぐに見つかるので、休日のお出かけのフットワークが軽くなりました。`,
  },
];
