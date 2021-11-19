import { useEffect } from 'react'

export function useRebuyWidget(shopifyDomain) {
  useEffect(() => {
    const rebuyScript = document.querySelector('[data-script="rebuy"]')

    if (!rebuyScript) {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://cdn.rebuyengine.com/onsite/js/rebuy.js?shop=${shopifyDomain}`
        script.dataset.script = 'rebuy'
        document.head.append(script)
    }
  }, [shopifyDomain])
}
