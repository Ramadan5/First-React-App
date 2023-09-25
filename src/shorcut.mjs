import { isAndroid, isIOS } from "react-device-detect";

window.addEventListener ("load", () => {
    if (isAndroid) {
        window.location.replace ("intent://chat/#Intent;scheme=whatsapp;package=com.whatsapp;end");    
    }
    else if (isIOS) {
        window.location.replace ("whatsapp://");
    }
    else {
        window.location.replace ("https://web.whatsapp.com/");
    }
});


