agroBanner = document.querySelectorAll('.gerdau-products-soft li')
type =''
agroBanner.forEach(function (item,index) {
    item.addEventListener('click', function (){
        switch (index) {
            case 0:
                type = agroBanner[0].innerText.split('\n')[0]
                break;

            case 1: 
                type = agroBanner[1].innerText.split('\n')[0]
                break;

            case 2:
                type = agroBanner[2].innerText.split('\n')[0]
                break;
        }
        dataLayer.push({
            'event': "GAEvent",
            'eventAction':"Buscar Produtos",
            'eventCategory': "Semi-acabados  +",
            'eventLabel': type,
            'eventNonInteraction': false,
        })
    })
})