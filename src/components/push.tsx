import { useEffect } from 'react'
import useScript from '../hooks/useScript'

interface Props {
  account: string
  production?: boolean
  name?: string
  kbId: number
  locale: string
  cookieOptin: boolean
  analyticsUA?: string
  searchFiltered?: boolean | Filters
  customVariables?: CustomVariables
  filters?: Filters
  entrypoint?: Entrypoint
}

const SmartPUSH: React.FC<Props> = ({
  account,
  production,
  name,
  kbId,
  locale,
  cookieOptin,
  analyticsUA,
  searchFiltered,
  customVariables,
  filters,
  entrypoint,
}) => {
  useScript(
    `https://assets.app.smart-tribune.com/${account}/PUSH/${
      production ? '' : 'public/'
    }${name || 'push'}.main.js`
  )

  useEffect(() => {
    var element: CustomWindow = window

    element.addEventListener('STPUSHLoaded', (event: CustomEvent) => {
      var stPush = event.detail

      stPush.init({
        kbId: kbId,
        locale: locale,
        cookieOptin: cookieOptin,
        analyticsUA: analyticsUA,
        searchFiltered: searchFiltered,
        customVariables: customVariables,
        filters: filters,
        entrypoint: entrypoint,
      })
    })
  }, [
    kbId,
    locale,
    cookieOptin,
    analyticsUA,
    searchFiltered,
    customVariables,
    filters,
    entrypoint,
  ])

  return null
}

export default SmartPUSH
