const quiz = [
{
  question: 'あなたは親戚の葬式に妹と出席した。そこにいた黒い髪で黒い服を着た黒い靴の男にあなたは魅力を感じた。その男はあなたの妹の理想の男だったその夜にあなたは妹を殺した。殺した動機は？',
  answers: [
  '①妹と交際してほしくないから',
'②既に妹の彼氏だったから',
'③その男に命令された',
'④妹の葬式でまた会えると思った'
  ],
  correct: '④妹の葬式でまた会えると思った'
},{
question: 'あなたは自宅(マンション)のバルコニーに出た。すると男が女を刀で刺し殺していた。慌てて通報しようとした時、男と目が合ってしまった。男はあなたの方を指してその手を一定の動きで動かした。何故？',
  answers: [
  '①あなたのいる階数を数えている',
'②次はおまえだ！という宣言',
'③助けを求めている',
'④通報させないための脅し'
  ],
  correct: '①あなたのいる階数を数えている'
},{
question: 'あなたがある家に泥棒に入った所、その家の主人が眠りから覚めあなたの顔を見た。するとあなたが見る前で鍵の掛からないタンスに入って隠れた。あなたはどうやって殺すか。',
  answers: [
  '①タンスの外から刺す',
'②扉を固定して燃やす',
'③出てくるまでじっと待つ',
'④こじ開ける'
  ],
  correct: '③出てくるまでじっと待つ'
},{
question: 'あなたは連続殺人犯だ。あなたは窓があるエレベーターでのみ人を刃物で刺して逃げる。どうしてか。',
  answers: [
  '①違う視点で死を見たいから',
'②目撃者に恐怖を植え付けるため',
'③景色を見せたいから',
'④世の中へアピールしたい'
  ],
  correct: '①違う視点で死を見たいから'
},{
question: 'あなたは一面木で囲まれた深い山奥にいる。あなたの目の前にはちょっと休憩スペースがあるが、その後ろを何かがざっと過ぎ去った。果たしてそれは何か。',
  answers: [
  '①鬼',
'②人',
'③落ち葉',
'④猫'
  ],
  correct: '②人'
},{
question: 'あなたはある人を恨んでいます。その人の家に忍び込みその人を殺しました。無関係な子供とペットも殺しました。何故か。' ,
  answers: [
  '①現場を見られた',
'②ペットが吠えるから',
'③抵抗されたため',
'④あの世で再会できるように'
  ],
  correct: '④あの世で再会できるように'
},{
question: 'あなたは街中で突発的に人を殺した。折り悪く一台の車が通りかかり、異常を察した運転手が降りて近寄ってきた。あなたは車に他の人間が乗っていないのを見て取るとその運転手を殺した。何故か。', 
  answers: [
  '①口封じ',
'②あの世で付き添わせるため',
'③怖かったから',
'④車を使って逃げるため'
  ],
  correct: '④車を使って逃げるため'
},{
question: 'あなたが殺さなければならない相手があなたの前で断崖にぶら下げられ、棒のような物に掴まってようやく生きている。あなたはどのようにして敵を断崖の下に落とすか。' ,
  answers: [
  '①石を投げる',
'②腕に切りつける',
'③指を一本ずつ離す',
'④罵声を浴びせる'
  ],
  correct: '③指を一本ずつ離す'
},{
question: 'サンタクロースが男の子にサッカーボールと自転車を与えた。ところがその男の子は喜ばなかった。 何故か。' ,
  answers: [
  '①男の子には足がなかった',
'②もう持っていたから',
'③サッカー選手に恨みがある',
'④別のスポーツがやりたかった'
  ],
  correct: '①男の子には足がなかった'
},{
question: 'あなたの前に戦時中で怪我をした軍人の肖像画がある。どこに怪我をしているだろうか。' ,
  answers: [
  '①足',
'②頬',
'③目',
'④背中'
  ],
  correct: '③目'
},


];

const quizLength = quiz.length;

let quizIndex = 0;

let score = 0;





const $button = document.getElementsByTagName("button");
let buttonLength = $button.length;
//クイズの問題文と選択肢を定義

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;

  while(buttonIndex < buttonLength ){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('それはサイコパスな答えです...!');
      score++;
    } else {
    window.alert('あなたは正常です^^');
    }

quizIndex++;
  if (quizIndex < quizLength){
    //問題数が残ってたらこっちを実行
    setupQuiz();
  }else{
    
//問題が終わりならこっちを実行
window.alert('テスト終了!あなたのサイコパス度は' + score + '0%です！');
  }

};


//ボタンクリックで正誤判定

let handlerIndex = 0;
while(handlerIndex < buttonLength){

$button[handlerIndex].addEventListener('click',(e) =>{
   clickHandler(e);
  });
handlerIndex++;
}




