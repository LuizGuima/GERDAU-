btnBanner = document.querySelectorAll('.gerdau-banner-segment-sub a')
type = ''
btnBanner.forEach(function (item, index){
    item.addEventListener('click', function () {
        switch (index) {
            case 0:
                type = btnBanner[0].href.split('/')[4];
                break;

            case 1: 
                type = btnBanner[1].href.split('/')[4];
                break;

            case 2:
                type = btnBanner[2].href.split('/')[4];
                break;

            case 3:
                type = btnBanner[3].href.split('/')[4];
                break;

            case 4:
                type = btnBanner[4].href.split('/')[4];
                break;
        }
        dataLayer.push({
            'event': "GAEvent",
            'eventAction':"Buscar Produtos",
            'eventCategory': "Automotivo +",
            'eventLabel': type,
            'eventNonInteraction': false,
        })
    })
})