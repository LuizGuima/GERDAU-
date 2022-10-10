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

            case 3:
                type = agroBanner[3].innerText.split('\n')[0]
                break;

            case 4: 
                type = agroBanner[4].innerText.split('\n')[0]
                break;

            case 5:
                type = agroBanner[5].innerText.split('\n')[0]
                break;

            case 6:
                type = agroBanner[6].innerText.split('\n')[0]
                break;

            case 7:
                type = agroBanner[7].innerText.split('\n')[0]
                break;

            case 8:
                type = agroBanner[8].innerText.split('\n')[0]
                break;

            case 9:
                type = agroBanner[9].innerText.split('\n')[0]
                break;

            case 10:
                type = agroBanner[10].innerText.split('\n')[0]
                break;

            case 11:
                type = agroBanner[11].innerText.split('\n')[0]
                break;

            case 12:
                type = agroBanner[12].innerText.split('\n')[0]
                break;

            case 13:
                type = agroBanner[13].innerText.split('\n')[0]
                break;

            case 14:
                type = agroBanner[14].innerText.split('\n')[0]
                break;

            case 15:
                type = agroBanner[15].innerText.split('\n')[0]
                break;

            case 16:
                type = agroBanner[16].innerText.split('\n')[0]
                break;
        }
        dataLayer.push({
            'event': "GAEvent",
            'eventAction':"Buscar Produtos",
            'eventCategory': "Agropecuária  +",
            'eventLabel': type,
            'eventNonInteraction': false,
        })
    })
})