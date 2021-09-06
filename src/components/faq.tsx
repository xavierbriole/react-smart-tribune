import React, { useEffect } from 'react'
import useScript from '../hooks/useScript'

interface Props {
  account: string
  production?: boolean
  name?: string
  kbId: number
  locale: string
  cookieOptin: boolean
  analyticsUA?: string
  buildName?: string
  searchFiltered?: boolean | Filters
  customVariables?: CustomVariables
  filters?: Filters
  headerId?: string
  entrypoint?: Entrypoint
}

const SmartFAQ: React.FC<Props> = ({
  account,
  production,
  name,
  kbId,
  locale,
  cookieOptin,
  analyticsUA,
  buildName,
  searchFiltered,
  customVariables,
  filters,
  headerId,
  entrypoint,
}) => {
  useScript(
    `https://assets.app.smart-tribune.com/${account}/FAQ/${
      production ? '' : 'public/'
    }${name || 'faq'}.main.js`
  )

  useEffect(() => {
    var element: CustomWindow = window

    element.addEventListener('STFAQLoaded', (event: CustomEvent) => {
      var stFaq = event.detail

      stFaq.init({
        kbId: kbId,
        locale: locale,
        cookieOptin: cookieOptin,
        analyticsUA: analyticsUA,
        buildName: buildName,
        searchFiltered: searchFiltered,
        customVariables: customVariables,
        filters: filters,
        headerId: headerId,
        entrypoint: entrypoint,
      })
    })
  }, [
    kbId,
    locale,
    cookieOptin,
    analyticsUA,
    buildName,
    searchFiltered,
    customVariables,
    filters,
    headerId,
    entrypoint,
  ])

  return <div id='st-faq' />
}

export default SmartFAQ
