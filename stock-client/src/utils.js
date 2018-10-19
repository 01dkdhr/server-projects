const utils = {
    getParamMap(url) {
        const map = {};
        if (url) {
            let bFind = false;
            let arr = url.split(/^epp-\w+:\/\/|^https?:\/\//);
            if (arr && arr.length && arr.length > 1) {
                arr = arr[1].split('?');
                if (arr && arr.length && arr.length > 1) {
                    arr = arr[1].split('&');
                    bFind = true;
                }
            }
            if (!bFind) {
                return {};
            }

            if (!arr || !arr.length) {
                return {};
            }
            arr.forEach(e => {
                let k = e.split('=')[0];
                let v = e.split('=')[1];
                map[k] = v;
            });    
        } 
        
        return map;
    }
};

export default utils;