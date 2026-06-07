import { Prisma, Category, Difficulty, Budget } from "@prisma/client";

export const initialSoloKatsuData: Prisma.SoloKatsuCreateInput[] = [
  {
    title: "純喫茶巡り",
    description:
      "レトロな雰囲気の喫茶店で、静かに読書をしたり、名物のクリームソーダや硬めプリンを味わいます。おひとり様が多いので人目も気になりません。",
    category: Category.GOURMET,
    difficulty: Difficulty.EASY,
    budget: Budget.LIGHT,
  },
  {
    title: "陶芸体験",
    description:
      "陶芸教室で、土をこねて自分だけの器を作ります。集中して手を動かすことで、日常のストレスから解放されます。完成した作品はお土産にもなります。",
    category: Category.CULTURE,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
  },
  {
    title: "動物カフェ",
    description:
      "猫やうさぎなど、様々な動物たちと間近で触れ合える癒やしのスポット。日々の疲れをリセットしたいおひとり様にぴったりです。最近はハリネズミやマイクロブタといった珍しい動物カフェも増えています。",
    category: Category.ENTERTAINMENT,
    difficulty: Difficulty.NORMAL,
    budget: Budget.STANDARD,
  },
  {
    title: "季節の花を楽しむ",
    description:
      "春は桜、夏はひまわり、秋はコスモス、冬は梅など四季折々の花を見ることができます。写真を撮るのもおすすめです。",
    category: Category.REFRESH,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
  {
    title: "断捨離",
    description:
      "不要なモノを手放すことで、部屋がスッキリして心も軽くなります。身の回りのモノを最低限まで減らしてお気に入りのモノに囲まれると、毎日がもっと快適になります。",
    category: Category.INDOOR,
    difficulty: Difficulty.EASY,
    budget: Budget.FREE,
  },
];
