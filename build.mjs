window.onload = async () => {
    let rawTmpl = await fetch('./card.hbs')
    var template = Handlebars.compile(await rawTmpl.text())
    let data = await fetch('./cards.json');
    let cards = await data.json();
    console.log(`Got cards`)
    console.dir(cards)
    let printArea = document.getElementById('cards')
    cards.forEach(card => {
        console.log(`compiling card ${card.title}`)
        let temp = document.createElement('template')
        let html = template(card)
        console.log(html)
        temp.innerHTML = html
        console.dir(temp)
        printArea.appendChild(temp.content.childNodes[0])
    })
}