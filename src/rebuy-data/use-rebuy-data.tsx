import { useState, useEffect } from 'react'

export function useRebuyData(dataSourceId, apiKey) {
  const [rebuyData, setRebuyData] = useState({})
  const dataSourceUrl = `https://cdn.rebuyengine.com/api/v1/custom/id/${dataSourceId}?key=${apiKey}`

  useEffect(() => {
    fetch(dataSourceUrl)
      .then(response => response.json())
      .then(data => {
        setRebuyData(data);
      })
  }, []);

  return rebuyData
}