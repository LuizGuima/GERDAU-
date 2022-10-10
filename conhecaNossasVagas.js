btnVagas = document.querySelector('.work-us .we-are__description a')
btnVagas.addEventListener('click', function() {
    alert(btnVagas.innerText)
    dataLayer.push({
        'event': "GAEvent",
        'eventAction': btnVagas.innerText,
        'eventCategory': "Trabalhe Conosco",
        'eventLabel': "-",
        'eventNonInteraction': false,
    })
})