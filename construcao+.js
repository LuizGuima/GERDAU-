btnBanner = document.querySelectorAll('.gerdau-banner-segment-sub a')
type = ''
btnBanner.forEach(function (item, index){
    item.addEventListener('click', function () {
        switch (index) {
            case 0:
                type = btnBanner[0].innerText
                break;

            case 1: 
                type = btnBanner[1].innerText
                break;

            case 2:
                type = btnBanner[2].innerText
                break;
        }
        dataLayer.push({
            'event': "GAEvent",
            'eventAction':"Buscar Produtos",
            'eventCategory': "Construção +",
            'eventLabel': type,
            'eventNonInteraction': false,
        })
    })
})