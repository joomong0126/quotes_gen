// 명언 데이터 (quotes.json 파일의 내용)
const quotes = [
    {
      "quote": "성공은 최선을 다한 결과이지, 반드시 승리하는 것이 아니다.",
      "author": "존 우든"
    },
    {
      "quote": "천 마디 말보다 하나의 행동이 더 가치 있다.",
      "author": "마하트마 간디"
    },
    {
      "quote": "실패는 성공으로 가는 가장 빠른 길이다.",
      "author": "코코 샤넬"
    },
    {
      "quote": "오늘 걷지 않으면 내일은 뛰어야 한다.",
      "author": "이소룡"
    },
    {
      "quote": "기회는 준비된 자에게 온다.",
      "author": "토마스 에디슨"
    },
    {
      "quote": "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.",
      "author": "헨리 포드"
    },
    {
      "quote": "작은 성취도 반복되면 큰 성공이 된다.",
      "author": "로버트 콜리어"
    },
    {
      "quote": "성공한 사람이 되려고 하지 말고, 가치 있는 사람이 되려고 노력하라.",
      "author": "알베르트 아인슈타인"
    },
    {
      "quote": "가장 어두운 밤도 끝나고 해는 떠오른다.",
      "author": "빅토르 위고"
    },
    {
      "quote": "지금 이 순간이 당신의 삶이다.",
      "author": "오프라 윈프리"
    },
    {
      "quote": "당신이 멈추지 않는 한, 얼마나 느린지는 중요하지 않다.",
      "author": "공자"
    },
    {
      "quote": "위대한 일은 작은 일들이 모여 이루어진다.",
      "author": "빈센트 반 고흐"
    },
    {
      "quote": "두려움은 선택이고, 용기는 행동이다.",
      "author": "존 맥스웰"
    },
    {
      "quote": "당신의 시간이 제한되어 있다는 것을 기억하라. 그러니 다른 사람의 삶을 사느라 낭비하지 마라.",
      "author": "스티브 잡스"
    },
    {
      "quote": "실패는 끝이 아니다. 포기가 끝이다.",
      "author": "마릴린 먼로"
    },
    {
      "quote": "생각은 말이 되고, 말은 행동이 되며, 행동은 습관이 된다.",
      "author": "마하트마 간디"
    },
    {
      "quote": "당신이 보는 세상은 당신이 생각하는 대로 만들어진다.",
      "author": "노먼 빈센트 필"
    },
    {
      "quote": "성공은 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.",
      "author": "윈스턴 처칠"
    },
    {
      "quote": "당신이 할 수 있다고 생각하든, 할 수 없다고 생각하든, 당신은 옳다.",
      "author": "헨리 포드"
    },
    {
      "quote": "행동은 모든 성공의 기초이다.",
      "author": "파블로 피카소"
    }
];

// DOM 요소 선택
const quoteTextElement = document.getElementById('quoteText');
const quoteAuthorElement = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// 현재 명언 인덱스 추적 (중복 방지)
let currentQuoteIndex = -1;

// 랜덤 명언 선택 함수
function getRandomQuote() {
    let randomIndex;
    
    // 현재 명언과 다른 명언 선택 (중복 방지)
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = randomIndex;
    return quotes[randomIndex];
}

// 명언 표시 함수 (페이드 효과 포함)
function displayQuote() {
    const randomQuote = getRandomQuote();
    
    // 페이드 아웃 효과
    quoteTextElement.classList.add('fade-out');
    quoteAuthorElement.classList.add('fade-out');
    
    // 500ms 후 새로운 명언으로 교체하고 페이드 인
    setTimeout(() => {
        quoteTextElement.textContent = randomQuote.quote;
        quoteAuthorElement.textContent = `— ${randomQuote.author}`;
        
        // 페이드 인 효과
        quoteTextElement.classList.remove('fade-out');
        quoteAuthorElement.classList.remove('fade-out');
        quoteTextElement.classList.add('fade-in');
        quoteAuthorElement.classList.add('fade-in');
        
        // 애니메이션 클래스 정리
        setTimeout(() => {
            quoteTextElement.classList.remove('fade-in');
            quoteAuthorElement.classList.remove('fade-in');
        }, 500);
    }, 250);
}

// 첫 번째 명언 표시 함수
function displayFirstQuote() {
    const randomQuote = getRandomQuote();
    quoteTextElement.textContent = randomQuote.quote;
    quoteAuthorElement.textContent = `— ${randomQuote.author}`;
    
    // 로딩 애니메이션 제거
    quoteTextElement.classList.remove('loading');
}

// 버튼 클릭 효과
function handleButtonClick() {
    // 버튼 비활성화 (중복 클릭 방지)
    newQuoteBtn.disabled = true;
    
    // 새로운 명언 표시
    displayQuote();
    
    // 750ms 후 버튼 다시 활성화
    setTimeout(() => {
        newQuoteBtn.disabled = false;
    }, 750);
}

// 이벤트 리스너 등록
newQuoteBtn.addEventListener('click', handleButtonClick);

// 키보드 이벤트 (스페이스바로 새 명언 보기)
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !newQuoteBtn.disabled) {
        event.preventDefault();
        handleButtonClick();
    }
});

// 페이지 로드 시 첫 번째 명언 표시
document.addEventListener('DOMContentLoaded', () => {
    // 약간의 지연 후 첫 번째 명언 표시 (로딩 효과)
    setTimeout(() => {
        displayFirstQuote();
    }, 1000);
});

// 페이지 가시성 변경 시 새로운 명언 표시 (탭 전환 시)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !newQuoteBtn.disabled) {
        // 페이지가 다시 보이면 새로운 명언 표시
        setTimeout(() => {
            displayQuote();
        }, 500);
    }
});

// 터치 디바이스 지원
if ('ontouchstart' in window) {
    // 터치 디바이스에서 hover 효과 대신 active 효과 사용
    newQuoteBtn.addEventListener('touchstart', () => {
        newQuoteBtn.style.transform = 'translateY(0)';
    });
    
    newQuoteBtn.addEventListener('touchend', () => {
        newQuoteBtn.style.transform = 'translateY(-2px)';
    });
} 