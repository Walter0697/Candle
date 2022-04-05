const normalFavicon = '/favicon.ico'
const contrastFavicon = '/cfavicon.ico'

const changeFavicon = (checked) => {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    if (checked) {
        link.href = window.location.origin + '/Candle' + contrastFavicon
    } else {
        link.href = window.location.origin + '/Candle' + normalFavicon
    }
}

const display = {
    favicon: changeFavicon,
}

export default display