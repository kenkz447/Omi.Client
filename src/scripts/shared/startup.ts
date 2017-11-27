import { Configuration } from './core/app'

// Import modules:
import { Module as App } from '../website'
import { Module as Account } from './modules/Account'
import { Module as CMS } from '../CMS'
function startup() {
    const configuration = new Configuration()

    configuration.useModule(App)
    configuration.useModule(Account)
    configuration.useModule(CMS)
    
    // Start app when your configuration done
    configuration.appInit()
}

export default startup