let featureDiv = document.getElementsByClassName('box-wrapper');

let cardClass = 'box';
let redColor = 'text-red';
let grayColor = 'text-gray';
let iconName = 'fa-route';
let iconTypeRoute = 'fa-route';
let iconTypeDollar = 'fa-dollar';
let iconTypeUser = 'fa-user-check';
let cardHeadingAdventurous = 'Adventurous';
let cardHeadingLessPrice = 'Less Price';
let cardHeadingExpercience = 'Expercience';
let paraGraphContent = `Lorem ipsum dolor sit amet consectetur adipisicing Eum
delectus commodi fugit fugiat, obcaecati est voluptatem aliquid
voluptate ? Doloribus, consequuntur ?`;

function setFeature(className, color, iconType, cardHeading, content) {
    let element = document.createElement('div');
    let innerHeading = document.createElement('h2');
    let cardPara = document.createElement('p');
    let icon = document.createElement('i');
    element.classList.add('box');
    element.classList.add(className);
    element.classList.add(color);
    icon.classList.add('fas', 'fa-4x');
    icon.classList.add(iconType);
    innerHeading.classList.add('md-heading');
    innerHeading.innerHTML = cardHeading;
    cardPara.innerHTML = content;
    element.appendChild(icon);
    element.appendChild(innerHeading);
    element.appendChild(cardPara);
    return element;

}

let myCards = [
    {
        className: cardClass,
        color: redColor,
        iconType: iconTypeRoute,
        cardHeading: cardHeadingAdventurous,
        content: paraGraphContent
    },
    {
        className: cardClass,
        color: grayColor,
        iconType: iconTypeDollar,
        cardHeading: cardHeadingLessPrice,
        content: paraGraphContent
    },
    {
        className: cardClass,
        color: redColor,
        iconType: iconTypeUser,
        cardHeading: cardHeadingExpercience,
        content: paraGraphContent
    },
    {
        className: cardClass,
        color: redColor,
        iconType: iconTypeRoute,
        cardHeading: cardHeadingAdventurous,
        content: paraGraphContent
    },
    {
        className: cardClass,
        color: grayColor,
        iconType: iconTypeDollar,
        cardHeading: cardHeadingLessPrice,
        content: paraGraphContent
    },
    {
        className: cardClass,
        color: redColor,
        iconType: iconTypeUser,
        cardHeading: cardHeadingExpercience,
        content: paraGraphContent
    },
]

for (let i = 0; i < myCards.length; i++) {
    let element = setFeature(`${myCards[i].className}${i + 1}`, myCards[i].color, myCards[i].iconType, myCards[i].cardHeading, myCards[i].content);
    console.log(element);
    featureDiv[0].appendChild(element);
}