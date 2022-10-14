const quotes=[
    {
    quotes: "Silence is the virtue of fools.",
    author: "Francis Bacon"
},
    {
    quotes: "역사라는 놀이는 흔히 중간의 다수자들은 제쳐놓고 최상위와 최하위 사람들에 의해 이루어진다.",
    author: "에릭 호퍼"
},
    {
    quotes: "돈이 모든 악의 근원이라는 상투어를 만들어낸 사람은 악의 본질에 대해 아무 것도 모르며, 인간에 대해서도 아는 것이 거의 없다.",
    author: "에릭 호퍼"
},
    {
    quotes: "인생을 꼼꼼하게 챙기다가는 모두 지나가 버린다. 단순하게 살아라, 단순하게, 단순하게! (Our life is frittered away by detail... Simplicity, simplicity, simplicity!)",
        author: "월든 - 헨리 데이비드 소로 (Walden - Henry David Thoreau)"
},
    {
    quotes: "어려움이라는 것은 해결하는 데 시간이 좀 걸리는 일이다. 불가능이라는 것은 그보다 조금 더 시간이 걸리는 일이다.(The difficult is what takes a little time. The impossible is what takes a little longer.)",
    author: "프리드쇼프 난센(Fridtjof Nansen)"
},
    {
    quotes: "인내는 쓰지만, 그 열매는 달다.(Patience is bitter, but its fruit is sweet.)",
    author: "장 샤르댕의 페르시아와 동인도 여행 ― 장 샤르댕(The Travels of Sir John Chardin into Persia and the East Indies ― John Chardin)"
},
    {
    quotes: "인간이 시련을 가져다 주는 상황을 변화시킬 수는 없다. 하지만 그에 대한 자신의 태도를 선택할 수는 있다.(If one cannot change a situation that causes his suffering, he can still choose his attitude.)",
    author: "죽음의 수용소에서 ― 빅터 프랭클(Man’s Search for Meaning ― Viktor Frankl)"
},
    {
    quotes: "다른 사람에게 몰두하는 것은 그것이 지원이라 할지라도, 방해라 할지라도 애정이라 할지라도, 증오라 할지라도 결국은 나 자신에게서 벗어나기 위한 수단에 불과하다.",
    author: "에릭 호퍼"
}
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuote.quotes
author.innerText = todaysQuote.author