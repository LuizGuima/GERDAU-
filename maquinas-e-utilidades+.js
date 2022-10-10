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

            case 3:
                type = btnBanner[3].innerText
                break;

            case 4:
                type = btnBanner[4].innerText
                break;
        }
        dataLayer.push({
            'event': "GAEventaaaa",
            'eventAction':"Buscar Produtos",
            'eventCategory': "Máquinas e utilidades +",
            'eventLabel': type,
            'eventNonInteraction': false,
        })
    })
})