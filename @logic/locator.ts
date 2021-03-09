import {createContainer, asFunction} from 'awilix'

import MaooImpl from './remote/contract/maooReal'

const locator = createContainer()
  .register({
    remoteMaoo: asFunction(MaooImpl)
  })

export default locator
