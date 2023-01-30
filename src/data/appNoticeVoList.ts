import randomChoose from "../wrappers/randomChoose";

const poem = [
  [
    "人猿相揖别。",
    "只几个石头磨过，小儿时节。",
    "铜铁炉中翻火焰，",
    "为问何时猜得？",
    "不过几千寒热。",
    "人世难逢开口笑，",
    "上疆场彼此弯弓月。",
    "流遍了，郊原血。",
    "一篇读罢头飞雪，",
    "但记得斑斑点点，几行陈迹。",
    "五帝三皇神圣事，",
    "骗了无涯过客。",
    "有多少风流人物？",
    "盗跖庄蹻流誉后，",
    "更陈王奋起挥黄钺。",
    "歌未竟，东方白。",
  ],
  [
    "有一个人前来买瓜",
    "生意行嘛你们哥俩",
    "哥们儿，这瓜多少钱一斤呐",
    "两块钱一斤",
    "What’s up，这瓜皮子是金子做的还是这瓜粒子是金子做的",
    "你瞧瞧现在哪有瓜呀，这都是大棚的瓜，你嫌贵我还嫌贵呢",
    "给我挑一个",
    "行",
    "这个怎么样",
    "这瓜保熟吗",
    "我开水果摊的，能卖你生瓜蛋子？",
    "我问你这瓜保熟吗",
    "你是故意找茬儿，是不是，你要不要吧",
    "你这瓜要是熟我肯定要啊",
    "那它要是不熟怎么办呀",
    "要是不熟，我自己吃了它，满意了吧",
    "15斤，30块",
    "你这哪儿够15斤，你这秤有问题呀",
    "你TM故意找茬儿是不是，你要不要吧，你要不要",
    "吸铁石",
    "另外你说的，这瓜要是生的，你自己吞进去，啊",
    "你TM劈我瓜是吧，我……",
    "杀人啦，杀人啦，郝哥，杀人啦，杀人啦，杀人啦",
    "华强，诶，华强",
  ],
];

const generateAppNoticeVoList = (titles: string[], picPath: string) =>
  titles.map((title) => ({
    title,
    alert: title,
    picPath,
  }));

const getAppNoticeVoList = (): {
  title: string;
  alert: string;
  picPath: string;
}[] => generateAppNoticeVoList(randomChoose(poem), "https://bilibili.com");

export default getAppNoticeVoList;
