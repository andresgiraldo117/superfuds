/**
 * @param {Object} CurrentServer - Get frontend url.
 */
const CurrentServer = {
    host: window.location.host,
    hostname: window.location.hostname,
    origin: window.location.origin,
    pathname: window.location.pathname
}

/**
 * @param {Object} urlsBackend - List of urls.
 */
const urlsBackend = {
    localhost: 'https://api.andresgiraldo.xyz/',
    dev: 'https://api.andresgiraldo.xyz/',
    backend: 'https://api.andresgiraldo.xyz/',
    stage: 'https://api.andresgiraldo.xyz/',
    prod: 'https://api.andresgiraldo.xyz/'
}

/**
 * @param {string} url_base - init url base variable.
 */
let url_base = ''

//LOCAL
if( CurrentServer.host === 'localhost:3000' || CurrentServer.hostname === 'localhost' 
){
    url_base = urlsBackend.localhost
}
//DEV
else if( CurrentServer.host === 'dev.andresgiraldo.xyz:3000' || CurrentServer.hostname === 'dev.andresgiraldo.xyz' ){
    url_base = urlsBackend.dev
}
//PROD
else if( CurrentServer.host === 'andresgiraldo.xyz:3000' || CurrentServer.hostname === 'andresgiraldo.xyz' ){
    url_base = urlsBackend.prod
}
//STAGE
else if( CurrentServer.host === 'stage.andresgiraldo.xyz:3000' || CurrentServer.hostname === 'stage.andresgiraldo.xyz' ){
    url_base = urlsBackend.stage
}
else{
    url_base = urlsBackend.dev
}

/**
 * @param {Object} url_superfuds - list of available superfuds urls.
 */
const url_superfuds = {
    get_all: 'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
}

export { 
    url_base,
    url_superfuds,
}