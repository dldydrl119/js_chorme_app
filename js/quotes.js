const quotes = [
    {
        title : "기댈곳",
        singer : "김필"
      },
      {
        title : "Let me out",
        singer : "박혜원"
      },
      {
        title : "차가워진 이 바람엔 우리가 써있어",
        singer : "박혜원"
      },
      {
        title : "그래서 그대는",
        singer : "얀"
      },
      {
        title : "사말어사",
        singer : "장범준"
      },
      {
        title : "폭죽과 별",
        singer : "김진호"
      },
      {
        title : "고백",
        singer : "정준일"
      },
      {
        title : "이별이란 어느 별에",
        singer : "박혜원"
      },
      {
        title : "Never Give Up",
        singer : "Gene Sinozaki"
      },
      {
        title : "아따",
        singer : "새봄"
      }
];

const title = document.querySelector("#quote span:first-child");
const singer = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

title.innerText = todaysQuote.title;
singer.innerText = todaysQuote.singer;