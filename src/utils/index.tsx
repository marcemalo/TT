import React, {Suspense} from 'react'

const SuspenseElement: React.FC<{children: React.ReactNode, fallback: React.ReactNode}> = ({children, fallback}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

export  {SuspenseElement}