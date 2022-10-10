textSubmit = document.querySelector('.gerdau-input-group i')
textSubmit.addEventListener('click', function () {
            textSearch = document.querySelector('.gerdau-input-group input').value
            dataLayer.push({
                'event': "GAEvent",
                'eventAction':"Busca",
                'eventCategory': "Menu",
                'eventLabel': textSearch,
                'eventNonInteraction': false,
            })
});

enterPress = document.querySelector('.gerdau-input-group input')
enterPress.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        
        dataLayer.push({
            'event': "GAEvent",
            'eventAction':"Busca",
            'eventCategory': "Menu",
            'eventLabel': enterPress.value,
            'eventNonInteraction': false,
        })
        
      }
})