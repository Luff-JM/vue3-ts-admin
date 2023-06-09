import { getAppEnvConfig } from '../env'
import { RequestService } from './Service'
import { serviceHooks } from './ServiceHooks'

function createService() {
  const { VITE_USE_MOCK } = getAppEnvConfig()

  return new RequestService({
    timeout: 10000,
    serviceHooks,
    requestOptions: {
      useMock: VITE_USE_MOCK,
      withToken: true,
      useNativeResponse: false,
      useHandledData: true
    }
  })
}

export const http = createService()
