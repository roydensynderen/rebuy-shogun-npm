import { useState, useEffect } from 'react'

export function useRebuyData(dataSourceUrl) {
  const [rebuyData, setRebuyData] = useState({})

  useEffect(() => {
    fetch(dataSourceUrl)
      .then(response => response.json())
      .then(data => {
        setRebuyData(data);
      })
  }, []);

  return rebuyData
}