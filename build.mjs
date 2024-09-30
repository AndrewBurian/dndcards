window.onload = async () => {
    Handlebars.registerHelper('includes', function (value, target, options) {
        if (!Array.isArray(value)) return
        if (value.includes(target)) {
            return options.fn(this)
        }
    });
    Handlebars.registerHelper('eq', function (value, target, options) {
        if (value == target) return options.fn(this)
    });
    let rawTmpl = await fetch('./card.hbs')
    var template = Handlebars.compile(await rawTmpl.text())
    let data = await fetch('./cards.json');
    let cards = await data.json();
    let printArea = document.getElementById('cards')
    cards.forEach(card => {
        let temp = document.createElement('template')
        let html = template(card)
        temp.innerHTML = html
        printArea.appendChild(temp.content.childNodes[0])
    })
}