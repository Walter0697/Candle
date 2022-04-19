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

const getDifficultyText = () => {
    return {
        'easy': {
            'label': '簡單',
            'description': '第三次都估唔中嘅話，會比頭一個字作為提示',
        },
        'middle': {
            'label': '中等',
            'description': '第三次都估唔中嘅話，會比矖所有聲母你作為提示',
        },
        'difficult': {
            'label': '困難',
            'description': '唔會比任何提示',
        }
    }
}

const display = {
    favicon: changeFavicon,
    difficulty: getDifficultyText,
}

export default display