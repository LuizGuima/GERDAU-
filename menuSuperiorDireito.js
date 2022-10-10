btnSearch = document.querySelector('.gerdau-header-container i')

btnSearch.addEventListener('click', function(e) {
    dataLayer.push({
        'event': "GAEvent",
        'eventAction': btnSearch.className,
        'eventCategory': "Menu Superior ",
        'eventLabel': "-",
        'eventNonInteraction': false,
    })
})

btnLogin = document.querySelectorAll('.gerdau-header-button-group a')[0]

btnLogin.addEventListener('click', function(e) {
    dataLayer.push({
        'event': "GAEvent",
        'eventAction': btnLogin.innerText,
        'eventCategory': "Menu Superior ",
        'eventLabel': "-",
        'eventNonInteraction': false,
    })
})

btnCotacao = document.querySelector('#gerdau-button-quote-cart')

btnCotacao.addEventListener('click', function(e) {
    dataLayer.push({
        'event': "GAEvent",
        'eventAction': btnCotacao.innerText,
        'eventCategory': "Menu Superior ",
        'eventLabel': "-",
        'eventNonInteraction': false,
    })
})