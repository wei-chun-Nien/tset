const startTime = new Date().getTime();

// 目標時間(要倒數幾秒)。
const targetSeconds = 360;

// timer.
var timer = function (startTime) {
  // 當前時間。
  var currentTime = new Date().getTime();
  
  // 當前時間 - 起始時間 = 經過時間。(因為不需要毫秒，所以將結果除以1000。)
  var diffSec = Math.round((currentTime - startTime) / 1000);
  
  // 目標時間 - 經過時間 = 剩餘時間。
  var remainingTime = targetSeconds - diffSec;
  
  // update progess.  
  update(remainingTime);   
  
  if (remainingTime == 0) {
    // stop the timer.
    clearInterval(timerId);
    
    // do anything you want to.
    $(".msg").text("time up!");
  } 
}

// start the timer.
var timerId = setInterval( function () { timer(startTime); }, 1000);

// update progess with the timer.
function update (seconds) {
  textRenderer(seconds);
}

// refresh the bar.

// refresh the text of the bar.
function textRenderer (seconds) {
  var sec = seconds % 60;  
  var min = Math.floor(seconds / 60); 

  /* 兩種作法都可以 */
  //min = min > 9 ? min : "0" + min;
  //sec = sec > 9 ? sec : "0" + sec;  
  min = min.toString().padStart(2, '0');
  sec = sec.toString().padStart(2, '0');
  
  $(".text").text(min + ":" + sec);		
}


(function() {
    const myQuestions = [
      {
        question: "1.在〈念奴嬌〉中，有「……人道是，三國周郎赤壁。……」請問「周郎」指的是誰？",
        answers: {
          A:"周泰",B:"周倉",C:"周瑜",D:"周公"
        },
        correctAnswer: "C"
      },
      {
        question: "2.〈琵琶行〉的作者是誰？",
        answers: {
          A:"李白",B:"白居易",C:"杜甫",D:"蘇軾"
        },
        correctAnswer: "B"
      },
      {
        question: "3.《論語．里仁篇》中，「唯(,)者，能好人，能惡人。」請問(,)中要填入下列哪一個字",
        answers: {
          A:"仁",B:"義",C:"信",D:"智"
        },
        correctAnswer: "A"
      },
      {
        question: "4.孔子是中國偉大的教育家及思想家，他的學生們將他和他學生們的言論彙編為哪本書",
        answers: {
          A:"禮記",B:"論語",C:"孝經",D:"詩經"
        },
        correctAnswer: "B"
      },
      {
        question: "5.明代四大奇書中三國演義的作者為誰？",
        answers: {
          A:"羅貫中",B:"施耐庵",C:"曹雪芹",D:"蘭陵笑笑生"
        },
        correctAnswer: "A"
      },
      {
        question: "6.孝經:「身體髮膚.受之.不敢毀傷.孝之始也」空格中應填哪2字?",
        answers: {
          A:"天地",B:"君王",C:"父母",D:"夫子"
        },
        correctAnswer: "C"
      },
      {
        question: "7.請問下列哪一句不是出自〈琵琶行〉",
        answers: {
          A:"嘈嘈切切錯雜彈，大珠小珠落玉盤。",B:"千呼萬喚始出來，猶抱琵琶半遮面。",C:"夜深忽夢少年事，夢啼妝淚紅闌干。",D:"風吹仙袂飄飄舉，猶似霓裳羽衣舞。"
        },
        correctAnswer: "D"
      },
      {
        question: "8.下面四個選項的句子，哪一句所描寫的季節跟其他三句的季節不一樣?",
        answers: {
          A:"小樓昨夜又東風,(唐五代/李煜)",B:"寂寞梧桐深院鎖清秋,(唐五代/李煜)",C:"雨橫風狂三月暮,(北宋/歐陽修)",D:"桃花流水鱖魚肥,(唐五代/張志和)"
        },
        correctAnswer: "B"
      },
      {
        question: "9.摹寫修辭:包括了視覺、聽覺、觸覺……等。下列四句《琵琶行》的語句中，哪一句的摹寫形式與其他三句不同？",
        answers: {
          A:"忽聞水上琵琶聲",B:"別時茫茫江浸月",C:"血色羅裙翻酒汙",D:"唯見江心秋月白"
        },
        correctAnswer: "A"
      },
      {
        question: "10.一首五言絕句的唐詩共有幾個字?",
        answers: {
          A:"40字",B:"28字",C:"56字",D:"20字"
        },
        correctAnswer: "D"
      },
      {
        question: "11.一首五言律詩的唐詩共有幾個字?",
        answers: {
          A:"40字",B:"28字",C:"56字",D:"20字"
        },
        correctAnswer: "A"
      },
      {
        question: "12.一首七言絕句的唐詩共有幾個字?",
        answers: {
          A:"40字",B:"28字",C:"56字",D:"20字"
        },
        correctAnswer: "B"
      },
      {
        question: "13.一首七言律詩的唐詩共有幾個字?",
        answers: {
          A:"40字",B:"28字",C:"56字",D:"20字"
        },
        correctAnswer: "C"
      },
      {
        question: "14.唐朝哪位詩人號「青蓮居士」，他的詩文提材廣闊，感情強烈，可稱為屈原以後我國最偉大的浪,漫主義詩人？",
        answers: {
          A:"杜甫",B:"李白",C:"王維",D:"杜牧"
        },
        correctAnswer: "B"
      },
      {
        question: "15.哪位詩人眼見人民吃不飽，穿不暖，生活困苦不堪，於是悲歎：「朱門酒肉臭，路有凍死骨。」？〉",
        answers: {
          A:"杜甫",B:"李白",C:"王維",D:"杜牧"
        },
        correctAnswer: "A"
      },
      {
        question: "16.唐朝現實主義詩人，由於對中國古典詩歌影響深遠，被後人稱為「詩聖」，他的詩被稱為「詩史」？",
        answers: {
          A:"杜甫",B:"李白",C:"王維",D:"杜牧"
        },
        correctAnswer: "A"
      },
      {
        question: "17.書法家王羲之的作品「蘭亭集序」被認為是書法經典傑作，有「□□第一」之稱？",
        answers: {
          A:"草書",B:"隸書",C:"篆書",D:"行書"
        },
        correctAnswer: "D"
      },
      {
        question: "18.唐朝賀知章讀完誰的文章後，稱對方為「天上謫仙人」？",
        answers: {
          A:"杜甫",B:"李白",C:"王維",D:"杜牧"
        },
        correctAnswer: "B"
      },
      {
        question: "19.唐朝現實派詩人，有詩史之稱的是誰？",
        answers: {
          A:"孟浩然",B:"王維",C:"杜甫",D:"李白"
        },
        correctAnswer: "C"
      },
      {
        question: "20.唐朝自然派詩人，有詩佛之稱的是誰？",
        answers: {
          A:"孟浩然",B:"王維",C:"杜甫",D:"李白"
        },
        correctAnswer: "B"
      },
      {
        question: "21.唐朝浪漫派詩人，有詩仙之稱的是誰?",
        answers: {
          A:"孟浩然",B:"王維",C:"杜甫",D:"李白"
        },
        correctAnswer: "D"
      },
      {
        question:"22.「□□者，畫成其物，隨體詰詘，日、月是也。」也就是由筆畫形狀知其象物的一種字。請問□□是何種造字原則？",
        answers: {
          A:"指事",B:"象形",C:"會意",D:"形聲"
        },
        correctAnswer: "B"
      },
      {
        question: "23.□□者，視而可識，察而見意，上、下是也。也就是在象形基礎上加上符號來表示,的一種字。請問□□是何種造字原則？",
        answers: {
          A:"指事",B:"象形",C:"會意",D:"形聲"
        },
        correctAnswer: "A"
      },
      {
        question: "24.「□□者，比類合宜，以見指撝（同「揮」），武、信是也。」也就是把兩個或兩個以上,的象形字組合在一起，表示一個新的意思。請問□□是何種造字原則？",
        answers: {
          A:"轉注",B:"假借",C:"會意",D:"形聲"
        },
        correctAnswer: "C"
      },
      {
        question: "25.說文敍：「□□者，以事為名，取譬相成，江、河是也。」也就是先取一字表示類屬（形符），,然後再取另一字表示讀音（聲符）。請問□□是何種造字原則？",
        answers: {
          A:"轉注",B:"假借",C:"會意",D:"形聲"
        },
        correctAnswer: "D"
      },
      {
        question: "26.說文敍：「□□者，建類一首，同意相受，考、老是也。」也就是兩字同一部首、二字聲音相近、,可以互相解釋。請問□□是何種造字原則？",
        answers: {
          A:"轉注",B:"假借",C:"會意",D:"形聲"
        },
        correctAnswer: "A"
      },
      {
        question: "27.說文敍：「□□者，本無其事，依聲託事，令長是也。」也就是指紀錄語言時依靠同音的文字，,代替一下會說不會寫的字。請問□□是何種造字原則？",
        answers: {
          A:"轉注",B:"假借",C:"會意",D:"形聲"
        },
        correctAnswer: "B"
      },
      {
        question: "28.「月」字屬於六書中的哪一種?",
        answers: {
          A:"象形",B:"指事",C:"會意",D:"形聲"
        },
        correctAnswer: "A"
      },
      {
        question: "29.「信」字屬於六書中的哪一種？",
        answers: {
          A:"象形",B:"指事",C:"會意",D:"形聲"
        },
        correctAnswer: "C"
      },
      {
        question: "30.「上」字屬於六書中的哪一種？",
        answers: {
          A:"象形",B:"指事",C:"會意",D:"形聲"
        },
        correctAnswer: "B"
      },
      {
        question: "31.「河」字屬於六書中的哪一種？",
        answers: {
          A:"象形",B:"指事",C:"會意",D:"形聲"
        },
        correctAnswer: "D"
      },
      {
        question: "32.將兩個或兩個以上的象形文字的意思總合起來，去表達一個新的意義的字，如「武」、「信」兩字，,這種造字方法是",
        answers: {
          A:"象形",B:"指事",C:"會意",D:"形聲"
        },
        correctAnswer: "C"
      },
      {
        question: "33.將表示意義的符號「形符」和表示讀音的符號「聲符」組合起來形成字，如「江」、「河」兩字，,這種造字方法是？",
        answers: {
          A:"象形",B:"指事",C:"會意",D:"形聲"
        },
        correctAnswer: "D"
      },
      {
        question: "34.「把本子抱到露臺來，聽著維他瓦河的歌聲，我翻開了精彩的留言簿。」請問上述所使用的修,辭，與下列何者相同？",
        answers: {
          A:"真是可愛的種子，好大！好綠！",B:"你不肯冒險犯難，怎麼會成功？",C:"微風吹來，池塘裡的荷花就輕擺著腰肢，好看極了",D:"這位姑娘好喜歡山羊，常帶著羊群去吃草。"
        },
        correctAnswer: "C"
      },
      {
        question: "35.(A)夏蟲也為我沉默(B)悄悄是別離的笙簫(C)沉默是今晚的康橋(D)但我不能放歌,以上四句話,正確排列順序為何？",
        answers: {
          A:"ABCD",B:"DBAC",C:"CBAD",D:"BADC"
        },
        correctAnswer: "B"
      },
      {
        question: "36.這裡的湖光山色、名勝古蹟，相當(,)。請在括號內填入最適當的語詞？",
        answers: {
          A:"引人入勝",B:"美輪美奐",C:"脣齒相依",D:"心領神會"
        },
        correctAnswer: "A"
      },
      {
        question: "37.校長的演講(,)，振奮人心。請在括號內填入最適當的語詞？",
        answers: {
          A:"深謀遠慮",B:"引以為傲",C:"收穫豐富",D:"鏗鏘有力"
        },
        correctAnswer: "D"
      },
      {
        question: "38.世事的變遷，常令人有(,)的感覺。請在括號內填入最適當的語詞？",
        answers: {
          A:"滄海桑田",B:"毛骨聳然",C:"五花八門",D:"錦衣夜行"
        },
        correctAnswer: "A"
      },
      {
        question: "39.下列那一個語詞有錯字？",
        answers: {
          A:"咄咄逼人",B:"錯綜複雜",C:"無懈可擊",D:"再接再勵"
        },
        correctAnswer: "D"
      },
      {
        question: "40.「有人喜歡做自了漢，自己的人生自己過，自己的快樂自己找。」請問「自了漢」的意思是指？",
        answers: {
          A:"對自己了解很深的人",B:"習慣自己處理事務的人",C:"不在乎別人看法的人",D:"擅長自我娛樂的人"
        },
        correctAnswer: "B"
      },
      {
        question: "41.下列哪一組詞語的「韻母」相同？",
        answers: {
          A:"茁壯／抓周",B:"黝黑／俯瞰",C:"海峽／嗓音",D:"湛藍／燦爛"
        },
        correctAnswer: "D"
      },
      {
        question: "42.下列那一個選項的修辭，與其他不同？",
        answers: {
          A:"一個人的言語，可以像優美的歌曲",B:"有夢最美，築夢踏實",C:"他口若懸河，絕不拖泥帶水",D:"時間，是愛情的試金石"
        },
        correctAnswer: "B"
      },
      {
        question: "43.「近來國片在世界各地的影展中表現優異，獲得不少殊榮。」以上的情況適合使用哪一個成語來,形容？",
        answers: {
          A:"真情流露",B:"有始有終",C:"大放異彩",D:"燦爛奪目"
        },
        correctAnswer: "C"
      },
      {
        question: "44.下列句子中的「愛」，哪一個詞性和其他三個不同？",
        answers: {
          A:"父親對我的「愛」，至今仍令我深深感動。",B:"經過大家苦苦央求，她終於願意割「愛」，把土地賣出去。",C:"她最「愛」唱歌了。",D:"捐贈大體可說是遺「愛」人間。"
        },
        correctAnswer: "C"
      },
      {
        question: "45.下列哪一個句子的意思不完整？",
        answers: {
          A:"蟬鳴聲不絕於耳，帶來夏天的訊息。",B:"姐姐靜靜聆聽妹妹的煩惱。",C:"這座希望城市在眾人的努力下。",D:"只要是他訂的目標，他一定會竭盡所能的完成。"
        },
        correctAnswer: "C"
      },
      {
        question: "46.下列哪一個短語結構和「轟轟烈烈的愛情」相似？",
        answers: {
          A:"蹦蹦跳跳的離開。",B:"開開心心的準備。",C:"快快樂樂的長大。",D:"簡簡單單的生活。"
        },
        correctAnswer: "D"
      },
      {
        question: "47.下列選項中，哪一個句子的意思前後矛盾不合理？",
        answers: {
          A:"儘管他沒有讀過很多書，卻懂得為人處事的道理。",B:"經過多次試驗後，太空梭終於發射失敗了。",C:"由於他太熱愛戲劇了，因此在空閒時常會閱讀許多相關書籍。",D:"如果你能堅持到底，一定能獲得最後的勝利。"
        },
        correctAnswer: "B"
      },
      {
        question: "48.下面四個選項的文字敘述中，哪一個選項的文字敘述不適合用來描寫「清明節」？",
        answers: {
          A:"祖墳前的煙霧裊裊上升，大家以恭敬的態度膜拜祖先牌位。",B:"開創尊敬前人風俗習慣的商朝人，他們奠定了後代恆久不變、飲水思源的風俗。",C:"看著一片片的紙灰和煙霧緩緩上升，心中想到：不知我們的祖先在哪片雲上？",D:"望著月亮，我心中升起一股暖流，不禁思念起遠在北部工作的父親。"
        },
        correctAnswer: "D"
      },
      {
        question: "49.「湯姆歷險記」和「頑童流浪記」是描寫誰的童年生活點點滴滴？",
        answers: {
          A:"馬克．吐溫",B:"威廉．莎士比亞",C:"艾蜜莉．狄金生",D:"J.K.羅琳"
        },
        correctAnswer: "A"
      },
      {
        question: "50.「你能想像原本要開刀的重病，因為科技的進步，有了新的改變嗎？」使用了哪一種修辭法？",
        answers: {
          A:"誇飾法。",B:"頂真法。",C:"設問法。",D:"感嘆法"
        },
        correctAnswer: "C"
      },
      {
        question: "51.「隨身聽小孩」這本書中主角張家龍的家位在台灣的哪個地方？",
        answers: {
          A:"花蓮",B:"屏東",C:"宜蘭",D:"台東"
        },
        correctAnswer: "D"
      },
      {
        question: "52.這位作者自幼勤奮好學，一目十行，愛看神仙鬼怪、狐妖猴精之類的書籍，對於日後創作西遊記,有重大影響的是？",
        answers: {
          A:"羅貫中",B:"曹雪芹",C:"柳宗元",D:"吳承恩"
        },
        correctAnswer: "D"
      },
      {
        question: "53.〈虞美人〉中，「問君能有幾多愁，恰似一江(,)向東流」。請問(,)中要填入哪一個詞？",
        answers: {
          A:"秋水",B:"江水",C:"春水",D:"流水"
        },
        correctAnswer: "C"
      },
      {
        question: "54.蘇軾〈陽關曲〉：「暮雲收盡溢清寒，銀漢無聲轉玉盤。此生此夜不長好，明月明年何處看。」,根據這首詞的詞句，你能判斷出是在哪一個節日做的嗎？",
        answers: {
          A:"端午節",B:"中秋節",C:"中元節",D:"元宵節"
        },
        correctAnswer: "B"
      },
      {
        question: "55.「他很用功，□□卻不懂讀書方法。」請問□中比較不適合填入哪一個語詞？",
        answers: {
          A:"不過",B:"因此",C:"但是",D:"然而"
        },
        correctAnswer: "B"
      },
      {
        question: "56.人類最早有文字時，可能”不會”紀錄在下列哪四種物品上？",
        answers: {
          A:"紙張",B:"龜殼",C:"銅器",D:"動物的骨頭"
        },
        correctAnswer: "A"
      },
      {
        question: "57.著名的兒童散文作品《代做功課股份有限公司》，所描述的背景是在哪一個國家？",
        answers: {
          A:"臺灣",B:"香港",C:"韓國",D:"日本"
        },
        correctAnswer: "D"
      },
      {
        question: "58.「在常識和知識比較豐富的情況下，能刺激我們的想像力，你的聯想力也才會比較出色。」上,面這一段文字敘述，比較”不適合”用哪一個成語來解釋？",
        answers: {
          A:"觸類旁通",B:"一言九鼎",C:"融會貫通",D:"舉一反三"
        },
        correctAnswer: "B"
      },
      {
        question: "59.下列對於「第一」與「唯一」兩個詞語，哪一個選項的說法或用法是不適合的說法？",
        answers: {
          A:"「第一」，代表等第或排名順序。",B:"「唯一」，代表獨一無二，無可取代。",C:"「第一」榮獲認證的「唯一」品牌。",D:"武則天是中國史上「第一」位，也是「唯一」一位女皇帝。"
        },
        correctAnswer: "C"
      },
      {
        question: "60.下面四個選項的文字敘述中，哪一個選項的文字敘述不適合用來描寫「清明節」？",
        answers: {
          A:"祖墳前的煙霧裊裊上升，大家以恭敬的態度膜拜祖先牌位。",B:"開創尊敬前人風俗習慣的商朝人，他們奠定了後代恆久不變、飲水思源的風俗。",C:"看著一片片的紙灰和煙霧緩緩上升，心中想到：不知我們的祖先在哪片雲上？",D:"望著月亮，我心中升起一股暖流，不禁思念起遠在北部工作的父親。"
        },
        correctAnswer: "D"
      }
      ,
      {
        question: "61.「醫生告訴爸爸要動大手術，我和媽媽兩個人聽了，緊緊牽住爸爸的手。當時我的腦海只有一個念頭：我要給爸爸力量！讓爸爸戰勝病魔，讓爸爸看到明日的太陽。」上面這一段文字敘述，比較不適合用哪一個選項來解釋？",
        answers: {
          A:"牽手，可以溫暖對方的心靈。",B:"牽手，可以給對方力量和信心。",C:"牽手，可以消除病痛，讓人痊癒。",D:"牽手，有時是一份牽掛。"
        },
        correctAnswer: "C"
      }
      ,
      {
        question: "62.你滑過我的髮際/為我添了一絲涼意/你在強烈的日晒下/撫摸我乾燥的皮膚/你在一片死寂的教室/演奏快樂的樂曲/可是為什麼/為什麼你不再幫我/為什麼你製造災難,請問這首新詩,是在描寫自然界哪一種現象？",
        answers: {
          A:"雨",B:"雪",C:"雲",D:"風"
        },
        correctAnswer: "D"
      }
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];

      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });

      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
    

    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");

      // keep track of user's answers
      let numCorrect = 0;

      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });

      // show number of correct answers out of total
      resultsContainer.innerHTML = `你答對了${myQuestions.length}題中的${numCorrect}`;
    }
    
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }


  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    
  })();