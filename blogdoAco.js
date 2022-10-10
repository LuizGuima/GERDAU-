bannerPrincipal = document.querySelectorAll('#card-cm-15344 .details-text h4')
bannerPrincipal.forEach(function(item, index) {
    item.addEventListener('click', function() {
        switch (index) {
            case 0:
                alert(bannerPrincipal[0].innerText);
                break
        }
    })
})