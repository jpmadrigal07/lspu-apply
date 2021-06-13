import production from "./production";
import development from "./development";
import local from "./local";

const appStage = process.env.REACT_APP_STAGE?.trim();

interface Keys {
    graphqlUrl: string,
    restApiUrl: string
}

// Default is local
let keys: Keys = local;

if (appStage == 'production') {
    // PRODUCTION KEYS
    keys = production;
} else if (appStage == 'development') {
    // DEVELOPMENT KEYS
    keys = development;
}

export default keys;