// ══════════════════════════════════════════════════
//  Лавка Старого Торговца — игровая логика
// ══════════════════════════════════════════════════

const INTRO_PHRASES = [
  "Мир дому твоему, странник. Стар я стал, а глаза ещё помнят, кому камень служит, а кому — нет.",
  "Вижу: ищешь ты не просто побрякушку. У меня есть кольцо, что шепчет ветру. Или брошь, что оберегает от дурного глаза.",
  "Не поторгуемся, пока солнце в зенит не ушло?",
  "А давай-ка, путник, по-иному сделаем. Сядь вот сюда, солнце не печёт, ветер не дует. Я тебе предложу две дороги.",
  "Обе к моему товару ведут, а плата разная — смех да память.",
  "Первый путь: я расскажу тебе интересные истории. Не пустую болтовню, а быль про украшения. Выслушаешь до конца — выберешь любое украшение с лотка. Даром. Только слушай молча да не перебивай старика.",
  "А второй путь: без басен, без сказок. Сыграем с тобой в «Камень, ножницы, бумага». Камень бьёт ножницы. Ножницы режут бумагу. Бумага накрывает камень.",
  "Кидаем знак одновременно. Три схватки. Трижды победишь — забираешь украшение из ларца. Ни разу не победишь — уходишь с пустыми руками, но с моим благословением.",
  "Так что решай, путник. Будешь слушать мою сказку — или сразу в «Камень, ножницы, бумага» сыграем? Время терпит, солнце ещё высоко. Ты только скажи, а старик пока ладонь разомнёт..."
];

// Фразы для повторных визитов
const RETURN_PHRASES = [
  "О, ты вернулся! Помню тебя, странник. Глаза не те, что были, а память ещё держит. Чего желаешь на этот раз?",
  "А, знакомое лицо! Присаживайся. Солнце ещё высоко, время есть. Слушать будешь, играть — или уйдёшь восвояси?",
  "Вернулся, значит. Хорошо. Моя лавка всегда открыта для тех, кто знает цену хорошей вещи. Чего желаешь?",
  "И снова ты, странник. Старик рад. Товар никуда не делся — что выберешь сегодня?"
];

const STORIES = [
  {
    id: 'travels',
    title: 'О путешествиях',
    phrases: [
      "Был я в Египте, путник, лет сорок назад. Жара там — даже тень плавится. А мастера сидят в своих лавках и золото перебирают. Они его плотью богов зовут, потому и трепетно.",
      "Я своими глазами видел, как они на золотую пластину перегородки тонкие напаивают — тоньше ногтя. Потом в ячейки кладут лазурит, бирюзу, сердолик или цветное стекло и плавят. Выходит узор, будто само небо на золоте застыло.",
      "Я тогда два таких браслета купил. Сам фараон, говорят, похожие носил. А уж в гробницы их клали — чтобы перед Осирисом не с пустыми руками предстать.",
      "А после Египта подался я в Междуречье, к шумерам. Старше их мастеров нет никого, путник. Ты видал когда-нибудь филигрань? Это когда узор из тончайшей золотой проволоки вьют, что паутину. А зернь — напаивают крупицы золота мельче мушиной головы.",
      "Я сидел у старца в Уре, он мне показывал. Его дед ещё царицам серьги-полумесяцы делал. Глаза у него слезились, а руки плясали. Я тогда три ожерелья-чокера купил и все деньги на них спустил. Зато теперь у меня есть такое, чего ни у кого нет.",
      "Из Египта в Грецию переплыл. Там другие мастера. Они первыми догадались: украшение — не просто побрякушка, а искусство. Сочетают золото с эмалью, жемчугом, камнями. Зовут это полихромией — цвета играют, как море под солнцем.",
      "Я в Афинах видел, как диадему делали. Мастер три дня сидел, каждый листочек вычеканил, чтобы живым казался. Я говорю: «Продай». А он: «Это для богини». Я тогда венок купил поменьше. Говорят, такие на пирах носили сами боги. Или люди, которым боги завидовали. Не знаю. Но золото там поёт, путник. Точно тебе говорю.",
      "Ну а оттуда — на Русь, в Киев да Новгород. Там свои мастера, не хуже греческих. Чернением берут: сплав особый из серебра, меди да серы плавят и в вырезанный узор заливают. Выходит тёмный рисунок на светлом металле — строгий и красивый.",
      "А сканью узор вьют из проволоки, что паутину. А зернь напаивают — крупицы до половины маковой. Я у одного новгородского кузнеца заказал. Он византийцев переплюнул, да своё добавил — душу. Медальон тот я до сих пор берегу. И тебе бы советовал приглядеть не деревяшку какую, а настоящее…"
    ]
  },
  {
    id: 'metals',
    title: 'О металлах и камнях',
    phrases: [
      "Золото, путник, — первый среди равных. Мягкое оно, пластичное, в руках тает. Не ржавеет, не тускнеет, хоть тысячу лет в земле пролежи. Древние мастера его за это и любили.",
      "Из золота и тончайшие узоры гнули, и сложные подвески выковывали, и литьём по воску такие вещи создавали, что дух захватывает. Египтяне его плотью богов называли — неспроста. Самое дорогое, что у меня есть, — всё из золота. Потому что другой металл так не заиграет, когда на него солнце упадёт или лунный свет.",
      "А серебро — металл лунный, путник. Подешевле золота, да красоты своей не уступает. Блестит тихо, без спеси. На нём чернь хорошо ложится — сплав особый расплавишь, в вырезанный узор зальёшь, и выходит тёмный рисунок, что сказку рассказывает.",
      "Раньше серебро больше золота ценили в некоторых землях. И ковкой оно хорошо берётся, и чеканкой. Для тех, кто не кричит о богатстве, а носит тайну на груди. У меня таких вещей — полларца. Глаз радуют и кошель не пугают.",
      "Медь, путник, первой в руки человек взял. Ещё до всякого золота. Кузнецы её и холодной ковкой били, и в формы лили. А потом догадались с оловом смешивать — так бронза родилась. Твёрже выходит, крепче. Из бронзы не только украшения — доспехи ковали, мечи, щиты.",
      "Китайские мастера в древности таких высот в литье достигли, что их сосуды до сих пор музеи украшают. У меня есть несколько бронзовых перстней. Грубоваты на вид, зато каждый царапину помнит. Носили их воины да вожди, кому сила нужнее блеска.",
      "Камни — это особая песня, путник. Бирюза, гранат, янтарь, яшма, агат. Ценили их не за то, что дорогие, а за цвет да блеск, за редкость. В древности мастера их шлифовали, полировали до зеркального блеска.",
      "А в самых старых землях, бывало, просто сверлили и носили как есть — верили, что камень сам по себе силу имеет. Лазурит из Египта, сердолик из Междуречья, янтарь с берегов Балтики. Вставляли их в золото, в серебро, в бронзу. А то и просто на шнурок вешали.",
      "Камень, путник, врать не умеет. Он или твой, или нет. Мои — все настоящие. Можешь щупать, можешь на зуб пробовать. Старик не обманывает."
    ]
  },
  {
    id: 'techniques',
    title: 'О техниках мастеров',
    phrases: [
      "Слушай, путник, расскажу тебе про главные хитрости, которыми мастера с древности золото да серебро в украшения превращают. Все они ещё в бронзовом веке родились и до нас дошли — почти не изменились.",
      "Литьё — самый древний способ. Расплавил металл, залил в глиняную форму, остудил — и готово. Сначала формы были открытые, простые. Потом придумали разъёмные — из камня делали, две половинки, внутри узор.",
      "А самое хитрое — литьё по воску. Это как колдовство, путник. Лепишь из воска точную модель, обмазываешь глиной, обжигаешь в печи. Воск вытекает, а глина становится формой. Заливаешь туда золото — и получается пустотелая вещь сложнейшей формы. Китайцы в эпоху Шан так бронзовые сосуды с богатейшим орнаментом отливали.",
      "Ковка — по-другому. Тут молотом бьёшь. Медь, золото, серебро и в холодную гнутся, пластичные они. А железо — только горячим. На Руси, бывало, кузнец в каждом селе первый человек после попа. Ковкой и чаши выколачивали, и ковши, и подвески.",
      "Чеканка — для красоты. Берут лист золота, кладут на смоляную подушку и бьют стальными стержнями — чеканами. У каждого свой профиль: один для линии, другой для точки, третий для завитка. Так рождается рельеф. В домонгольской Руси чеканка высокого совершенства достигла.",
      "Басма — та же чеканка, только быстрая. Доску-матрицу с готовым узором вырезают, кладут на неё тонкий металл и давят. Рельеф отпечатывается сразу. Слово тюркское — «тиснение». Удобно, время экономит. Я сам такие матрицы у бухарских мастеров видел.",
      "Гравировка — резцом по металлу. Инструмент называется штихель. Мастер режет штрихи, линии, узоры. А когда научились железо закалять — в VII веке до нашей эры — вот тогда гравировка стала тончайшей. На Руси новгородцы, киевляне, псковичи — все гравировкой владели.",
      "Чернь — вырезали узор, а в него засыпали сплав из серебра, меди, свинца и серы, потом плавили. Выходит чёрный рисунок на светлом металле. Таушировка — на железе или бронзе прорезают канавки и забивают туда золотой или серебряной проволокой. Древний приём, очень красивый.",
      "Пайка — как клей, только металлический. Соединять детали придумали ещё пять тысяч лет назад. Берут припой: олово, свинец, серебро, медь. Намазал между деталями, нагрел — припой расплавился и схватил края намертво. Вот и все хитрости, путник. Тысячи лет им, а золото в них до сих пор поёт. Как в первый день."
    ]
  },
  {
    id: 'master',
    title: 'О мастере и диадеме',
    phrases: [
      "Слушай, путник, расскажу я тебе одну историю. Был я лет тридцать назад в Константинополе, у одного старого мастера. Он взялся сделать диадему для самой императрицы. Я сидел рядом, смотрел, как из ничего — из куска металла — рождается красота. До сих пор помню каждый этап.",
      "Сначала он делал литьё по воску. Слепил из воска тончайшие веточки, листья, бутоны — всё как живое. Потом обмазал глиной, обжёг в печи. Воск вытек, осталась форма. Залил туда расплавленное золото. Когда остудил и разбил глину — я ахнул. Ветки и листья стояли передо мной, будто только что с дерева сорванные.",
      "Потом он взялся за ковку. Некоторые детали были слишком тонкими для литья — их мастер выковал молотом вручную. Я смотрел, как он бьёт по золотому листу, и тот гнётся, тянется, принимает нужную форму. Руки у него плясали, а я сидел, боясь дышать.",
      "Потом началась чеканка. Мастер положил диадему на смоляную подушку. Достал свои чеканы — стальные стержни, у каждого на конце свой узор. И начал бить. Не сильно, а любовно. Под его ударами на золотых листьях появились прожилки, на лепестках — тени. Я спросил: «Долго?» А он: «Три дня бить, потом три дня смотреть — что вышло».",
      "Потом была гравировка. Самые тонкие линии, какие я в жизни видел, он резал штихелем. Я наклонился близко — он меня отогнал: «Дыханием своим узор сотрёшь, не мешай». Он делал обронную резьбу — фон выбирал, чтобы рисунок выступал над поверхностью. Глаза у него слезились, а рука не дрожала.",
      "Потом он взялся за чернь. Расплавил сплав из серебра, меди, свинца и серы. Залил в вырезанные углубления. Чёрный узор проступил на золоте чётко и строго, как письмена на свитке.",
      "Рядом, на другой детали, он сделал таушировку — на серебре прорезал канавки и забил туда золотой проволокой. Получилось, что золото внутри серебра горит, как лампада в ночи.",
      "А когда пришло время соединять всё в одно целое, мастер достал припой — олово, свинец, немного серебра. Намазал между деталями, нагрел. Я спросил: «Не развалится?» Он усмехнулся: «Эта диадема и после меня, и после императрицы, и после всех нас переживёт. Потому что пайка древнее Вавилона, а секрет — мой».",
      "Когда он закончил, диадема лежала передо мной на чёрной ткани. Солнце упало на неё, и она загорелась — все листья, все ветки, все чёрные узоры, вся золотая вязь. Я заплакал, путник. Не от жалости, от красоты. С тех пор я и смотрю на каждое украшение, как на ту диадему. За каждым стоит мастер, его руки, его огонь, его время."
    ]
  }
];

const WIN_SPEECH =
  "Ох, ловок ты, путник! Моя старая ладонь три хода делала — и все мимо. Видать, глаза уже не те, а может, ты сам с удачей в родстве. Держу слово. Выбирай любую безделицу из ларца.";

const LOSE_PHRASES = [
  "Хм-хм... Видать, не твой день, странник. Рука дрогнула, а может, камни сегодня не в духе. Бывает.",
  "Ничего, путник. Я не в обиде — фортуна дама капризная. Попробуй ещё раз или послушай мою сказку.",
  "Эх, не повезло. Но это не беда. Хочешь — ещё раз попытай удачу, хочешь — садись, слушай старика."
];

// ══════════════════════════════════════════════════
//  Состояние
// ══════════════════════════════════════════════════
let introIndex       = 0;
let storyIndex       = 0;
let gameStreak       = 0;
let currentMode      = 'main';
let currentStoryId   = null;
let hasVisited       = false;
let shownJewelryIds  = new Set();
let ownedJewelryIds  = new Set();
let readStoryIds     = new Set();
let jewelryPool      = [];

const LS_KEY_OWNED        = 'medievalJewelryOwned';
const LS_KEY_VISITED      = 'medievalVisited';
const LS_KEY_READ_STORIES = 'medievalReadStories';

// ══════════════════════════════════════════════════
//  DOM
// ══════════════════════════════════════════════════
const mainView          = document.getElementById('main-view');
const dialogueView      = document.getElementById('dialogue-view');
const storySelectView   = document.getElementById('story-select-view');
const storySelectBtns   = document.getElementById('story-select-buttons');
const btnLeaveStorySelect = document.getElementById('btn-leave-story-select');
const gameView          = document.getElementById('game-view');
const rewardOverlay     = document.getElementById('reward-overlay');

// Главный экран
const btnTalk       = document.getElementById('btn-talk');
const btnCollection = document.getElementById('btn-collection');

// Диалог
const dialogueText     = document.getElementById('dialogue-text');
const btnNext          = document.getElementById('btn-next');
const btnClaim         = document.getElementById('btn-claim');
const btnListen        = document.getElementById('btn-listen');
const btnGame          = document.getElementById('btn-game');
const btnRetry         = document.getElementById('btn-retry');
const btnLeaveDialogue = document.getElementById('btn-leave-dialogue');

// Игра
const pip1 = document.getElementById('pip-1');
const pip2 = document.getElementById('pip-2');
const pip3 = document.getElementById('pip-3');
const pips = [pip1, pip2, pip3];

const merchantIcon     = document.getElementById('merchant-icon');
const merchantNameText = document.getElementById('merchant-name-text');
const playerIcon       = document.getElementById('player-icon');
const playerNameText   = document.getElementById('player-name-text');
const merchantSide     = document.getElementById('merchant-side');
const playerSide       = document.getElementById('player-side');
const rpsButtonsWrap   = document.getElementById('rps-buttons');

const ICONS = { rock: '🪨', scissors: '✂️', paper: '📜' };
const NAMES = { rock: 'Камень', scissors: 'Ножницы', paper: 'Бумага' };

// Награда
const rewardImg           = document.getElementById('reward-img');
const rewardCaption       = document.getElementById('reward-caption');
const btnPlayFromReward   = document.getElementById('btn-play-from-reward');
const btnLeaveReward      = document.getElementById('btn-leave-reward');
const btnRestart          = document.getElementById('btn-restart');
const btnListenFromReward = document.getElementById('btn-listen-from-reward');

// Коллекция
const collectionOverlay  = document.getElementById('collection-overlay');
const collectionGrid     = document.getElementById('collection-grid');
const btnCloseCollection = document.getElementById('btn-close-collection');

// Детальный просмотр
const itemDetailOverlay = document.getElementById('item-detail-overlay');
const detailImg         = document.getElementById('detail-img');
const detailName        = document.getElementById('detail-name');
const detailCaption     = document.getElementById('detail-caption');
const btnCloseDetail    = document.getElementById('btn-close-detail');

// ══════════════════════════════════════════════════
//  ИНИЦИАЛИЗАЦИЯ
// ══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  if (window.JEWELRY_DATA && window.JEWELRY_DATA.jewelry) {
    jewelryPool = window.JEWELRY_DATA.jewelry;
  }

  loadOwned();
  loadVisited();
  loadReadStories();
  setupListeners();
  showView('main');
  checkPlaceholders();
});

function checkPlaceholders() {
  const bg = new Image();
  bg.onload = () => document.getElementById('bg-image').classList.add('loaded');
  bg.src = 'images/bg.jpg';

  const mc = new Image();
  mc.onload = () => {
    document.getElementById('merchant-placeholder-text').style.display = 'none';
  };
  mc.src = 'images/merchant.png';
}

function setupListeners() {
  // Главный экран
  btnTalk.addEventListener('click', startTalk);
  btnCollection.addEventListener('click', openCollection);

  // Диалог
  btnNext.addEventListener('click', handleNext);
  btnClaim.addEventListener('click', claimGift);
  btnListen.addEventListener('click', showStorySelect);
  btnGame.addEventListener('click', startGame);
  btnRetry.addEventListener('click', startGame);
  btnLeaveDialogue.addEventListener('click', () => showView('main'));

  // Выбор истории
  btnLeaveStorySelect.addEventListener('click', () => showView('main'));

  // Награда
  btnPlayFromReward.addEventListener('click', startGame);
  btnLeaveReward.addEventListener('click', () => showView('main'));
  btnRestart.addEventListener('click', startGame);
  btnListenFromReward.addEventListener('click', showStorySelect);

  // Коллекция
  btnCloseCollection.addEventListener('click', closeCollection);
  btnCloseDetail.addEventListener('click', closeItemDetail);

  // КНБ
  document.querySelectorAll('.rps-btn').forEach(btn => {
    btn.addEventListener('click', () => handleRPS(btn.dataset.choice));
  });
}

// ══════════════════════════════════════════════════
//  ГЛАВНЫЙ ЭКРАН / НАЧАЛО РАЗГОВОРА
// ══════════════════════════════════════════════════
function startTalk() {
  if (hasVisited) {
    showReturnPhrase();
  } else {
    hasVisited = true;
    saveVisited();
    introIndex = 0;
    showIntroPhrase();
  }
}

// ══════════════════════════════════════════════════
//  ПОВТОРНЫЙ ВИЗИТ
// ══════════════════════════════════════════════════
function showReturnPhrase() {
  currentMode = 'return';
  showView('dialogue');
  dialogueText.textContent =
    RETURN_PHRASES[Math.floor(Math.random() * RETURN_PHRASES.length)];

  toggle(btnNext,          false);
  toggle(btnClaim,         false);
  toggle(btnListen,        true);
  toggle(btnGame,          true);
  toggle(btnRetry,         false);
  toggle(btnLeaveDialogue, true);

  btnListen.textContent = 'Послушать историю';
}

// ══════════════════════════════════════════════════
//  ВСТУПЛЕНИЕ (первый визит)
// ══════════════════════════════════════════════════
function showIntroPhrase() {
  currentMode = 'intro';
  showView('dialogue');
  dialogueText.textContent = INTRO_PHRASES[introIndex];

  const isLast = (introIndex === INTRO_PHRASES.length - 1);
  btnNext.textContent = 'Далее ›';
  toggle(btnNext,          !isLast);
  toggle(btnClaim,         false);
  toggle(btnListen,         isLast);
  toggle(btnGame,           isLast);
  toggle(btnRetry,         false);
  toggle(btnLeaveDialogue, false);
}

function handleNext() {
  if (currentMode === 'intro') {
    if (introIndex < INTRO_PHRASES.length - 1) {
      introIndex++;
      showIntroPhrase();
    }
    return;
  }
  if (currentMode === 'story') {
    const story   = STORIES.find(s => s.id === currentStoryId);
    const phrases = story ? story.phrases : [];
    if (storyIndex < phrases.length - 1) {
      storyIndex++;
      showStoryPhrase();
    } else {
      showStoryReward();
    }
  }
}

// ══════════════════════════════════════════════════
//  ВЫБОР ИСТОРИИ
// ══════════════════════════════════════════════════
function showStorySelect() {
  currentMode = 'story-select';
  showView('story-select');
  renderStorySelectButtons();
}

function renderStorySelectButtons() {
  storySelectBtns.innerHTML = '';
  STORIES.forEach(story => {
    const isRead = readStoryIds.has(story.id);
    const btn = document.createElement('button');
    btn.className = 'btn btn-story-option';
    btn.innerHTML =
      `<span class="story-option-title">${story.title}</span>` +
      (isRead ? '<span class="story-option-check">&#10003;</span>' : '');
    btn.addEventListener('click', () => selectStory(story.id));
    storySelectBtns.appendChild(btn);
  });
}

function selectStory(id) {
  currentStoryId = id;
  currentMode    = 'story';
  storyIndex     = 0;
  showView('dialogue');
  showStoryPhrase();
}

// ══════════════════════════════════════════════════
//  ИСТОРИЯ
// ══════════════════════════════════════════════════
function showStoryPhrase() {
  const story   = STORIES.find(s => s.id === currentStoryId);
  const phrases = story ? story.phrases : [];
  dialogueText.textContent = phrases[storyIndex] || '';

  const isLast     = (storyIndex === phrases.length - 1);
  const alreadyRead = readStoryIds.has(currentStoryId);
  if (isLast) {
    btnNext.textContent = alreadyRead ? 'Завершить ›' : 'Получить украшение ›';
  } else {
    btnNext.textContent = 'Далее ›';
  }
  toggle(btnNext,          true);
  toggle(btnClaim,         false);
  toggle(btnListen,        false);
  toggle(btnGame,          false);
  toggle(btnRetry,         false);
  toggle(btnLeaveDialogue, false);
}

function showStoryReward() {
  const isFirstRead = !readStoryIds.has(currentStoryId);
  readStoryIds.add(currentStoryId);
  saveReadStories();

  if (isFirstRead) {
    const jewel = pickJewelry();
    addToOwned(jewel);
    showReward(jewel, 'story');
  } else {
    currentMode = 'story-end';
    showView('dialogue');
    dialogueText.textContent = 'Хорошая история, правда? Рад, что выслушал старика ещё раз. Но подарок за одну историю я дважды не даю — ты своё уже получил.';
    toggle(btnNext,          false);
    toggle(btnClaim,         false);
    toggle(btnListen,        true);
    toggle(btnGame,          false);
    toggle(btnRetry,         false);
    toggle(btnLeaveDialogue, true);
    btnListen.textContent = 'Послушать другую историю';
  }
}

// ══════════════════════════════════════════════════
//  ИГРА КНБ
// ══════════════════════════════════════════════════
function startGame() {
  currentMode = 'game';
  gameStreak  = 0;
  updatePips();
  resetChoiceDisplay();
  showView('game');
}

function getMerchantChoice(playerChoice) {
  const options = ['rock', 'scissors', 'paper'];
  if (Math.random() < 0.12) return playerChoice;
  const nonDraw = options.filter(o => o !== playerChoice);
  return nonDraw[Math.floor(Math.random() * 2)];
}

function handleRPS(playerChoice) {
  const merchantChoice = getMerchantChoice(playerChoice);
  const outcome = getOutcome(playerChoice, merchantChoice);

  setChoiceDisplay(playerChoice, merchantChoice, outcome);

  if (outcome === 'draw') return;

  if (outcome === 'win') {
    gameStreak++;
    updatePips();
    if (gameStreak >= 3) {
      lockRPS(true);
      setTimeout(() => { lockRPS(false); showWinSpeech(); }, 700);
    }
  } else {
    gameStreak = 0;
    updatePips();
    lockRPS(true);
    setTimeout(() => { lockRPS(false); showGameLose(); }, 1500);
  }
}

function setChoiceDisplay(playerChoice, merchantChoice, outcome) {
  merchantIcon.textContent     = ICONS[merchantChoice];
  merchantNameText.textContent = NAMES[merchantChoice];
  playerIcon.textContent       = ICONS[playerChoice];
  playerNameText.textContent   = NAMES[playerChoice];

  merchantSide.classList.remove('outcome-win', 'outcome-lose', 'outcome-draw');
  playerSide.classList.remove('outcome-win', 'outcome-lose', 'outcome-draw');

  if (outcome === 'win') {
    playerSide.classList.add('outcome-win');
    merchantSide.classList.add('outcome-lose');
  } else if (outcome === 'lose') {
    playerSide.classList.add('outcome-lose');
    merchantSide.classList.add('outcome-win');
  } else {
    playerSide.classList.add('outcome-draw');
    merchantSide.classList.add('outcome-draw');
  }
}

function resetChoiceDisplay() {
  merchantIcon.textContent     = '—';
  merchantNameText.textContent = '';
  playerIcon.textContent       = '—';
  playerNameText.textContent   = '';
  merchantSide.classList.remove('outcome-win', 'outcome-lose', 'outcome-draw');
  playerSide.classList.remove('outcome-win', 'outcome-lose', 'outcome-draw');
}

function lockRPS(lock) {
  rpsButtonsWrap.classList.toggle('locked', lock);
}

function getOutcome(p, m) {
  if (p === m) return 'draw';
  if (
    (p === 'rock'     && m === 'scissors') ||
    (p === 'scissors' && m === 'paper')    ||
    (p === 'paper'    && m === 'rock')
  ) return 'win';
  return 'lose';
}

function updatePips() {
  pips.forEach((pip, i) => pip.classList.toggle('active', i < gameStreak));
}

function showWinSpeech() {
  currentMode = 'win_speech';
  showView('dialogue');
  dialogueText.textContent = WIN_SPEECH;
  toggle(btnNext,          false);
  toggle(btnClaim,         true);
  toggle(btnListen,        false);
  toggle(btnGame,          false);
  toggle(btnRetry,         false);
  toggle(btnLeaveDialogue, false);
}

function claimGift() {
  const jewel = pickJewelry();
  addToOwned(jewel);
  showReward(jewel, 'win');
}

function showGameLose() {
  currentMode = 'lose';
  showView('dialogue');
  dialogueText.textContent = LOSE_PHRASES[Math.floor(Math.random() * LOSE_PHRASES.length)];
  toggle(btnNext,          false);
  toggle(btnClaim,         false);
  toggle(btnListen,        true);
  toggle(btnGame,          false);
  toggle(btnRetry,         true);
  toggle(btnLeaveDialogue, true);
  btnListen.textContent = 'Послушать историю';
}

// ══════════════════════════════════════════════════
//  НАГРАДА
// ══════════════════════════════════════════════════
function showReward(jewel, mode) {
  // mode 'story' → "Сыграть в игру" + "Уйти"
  // mode 'win'   → "Сыграть снова" + "Послушать историю"
  rewardOverlay.classList.remove('hidden');

  if (jewel) {
    rewardImg.src = jewel.image;
    rewardImg.alt = jewel.name || 'Украшение';
    rewardCaption.textContent = jewel.caption;
  } else {
    rewardImg.src = '';
    rewardCaption.textContent = 'Все украшения уже были показаны...';
  }

  toggle(btnPlayFromReward,   mode === 'story');
  toggle(btnLeaveReward,      true);              // "Уйти" всегда
  toggle(btnRestart,          mode === 'win');
  toggle(btnListenFromReward, mode === 'win');
}

// ══════════════════════════════════════════════════
//  УКРАШЕНИЯ
// ══════════════════════════════════════════════════
function pickJewelry() {
  let available = jewelryPool.filter(j => !shownJewelryIds.has(j.id));
  if (available.length === 0) {
    shownJewelryIds.clear();
    available = [...jewelryPool];
  }
  if (available.length === 0) return null;
  const item = available[Math.floor(Math.random() * available.length)];
  shownJewelryIds.add(item.id);
  return item;
}

function addToOwned(jewel) {
  if (!jewel) return;
  ownedJewelryIds.add(jewel.id);
  saveOwned();
}

// ══════════════════════════════════════════════════
//  КОЛЛЕКЦИЯ
// ══════════════════════════════════════════════════
function openCollection() {
  renderCollection();
  collectionOverlay.classList.remove('hidden');
}

function closeCollection() {
  collectionOverlay.classList.add('hidden');
}

function renderCollection() {
  collectionGrid.innerHTML = '';
  jewelryPool.forEach(item => {
    const card  = document.createElement('div');
    const owned = ownedJewelryIds.has(item.id);
    card.className = 'jewelry-card ' + (owned ? 'owned' : 'locked');

    if (owned) {
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="card-name">${item.name}</div>`;
      card.addEventListener('click', () => openItemDetail(item.id));
    } else {
      card.innerHTML = `
        <div class="card-img-wrap">
          <span class="card-question">?</span>
        </div>
        <div class="card-name">???</div>`;
    }

    collectionGrid.appendChild(card);
  });
}

function openItemDetail(id) {
  const item = jewelryPool.find(j => j.id === id);
  if (!item) return;
  detailImg.src             = item.image;
  detailImg.alt             = item.name;
  detailName.textContent    = item.name;
  detailCaption.textContent = item.caption;
  itemDetailOverlay.classList.remove('hidden');
}

function closeItemDetail() {
  itemDetailOverlay.classList.add('hidden');
}

// ══════════════════════════════════════════════════
//  localStorage
// ══════════════════════════════════════════════════
function loadOwned() {
  try {
    const saved = localStorage.getItem(LS_KEY_OWNED);
    if (saved) JSON.parse(saved).forEach(id => ownedJewelryIds.add(id));
  } catch (e) {}
}

function saveOwned() {
  try {
    localStorage.setItem(LS_KEY_OWNED, JSON.stringify([...ownedJewelryIds]));
  } catch (e) {}
}

function loadVisited() {
  try {
    hasVisited = localStorage.getItem(LS_KEY_VISITED) === '1';
  } catch (e) {}
}

function saveVisited() {
  try {
    localStorage.setItem(LS_KEY_VISITED, '1');
  } catch (e) {}
}

function loadReadStories() {
  try {
    const saved = localStorage.getItem(LS_KEY_READ_STORIES);
    if (saved) JSON.parse(saved).forEach(id => readStoryIds.add(id));
  } catch (e) {}
}

function saveReadStories() {
  try {
    localStorage.setItem(LS_KEY_READ_STORIES, JSON.stringify([...readStoryIds]));
  } catch (e) {}
}

// ══════════════════════════════════════════════════
//  УТИЛИТЫ
// ══════════════════════════════════════════════════
function showView(name) {
  rewardOverlay.classList.add('hidden');
  mainView.classList.toggle('hidden',        name !== 'main');
  dialogueView.classList.toggle('hidden',    name !== 'dialogue');
  storySelectView.classList.toggle('hidden', name !== 'story-select');
  gameView.classList.toggle('hidden',        name !== 'game');
}

function toggle(el, show) {
  el.classList.toggle('hidden', !show);
}
