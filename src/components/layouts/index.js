import React from 'react'
import Header from './header'
import Footer from './footer'
import useIsDashboard from '@/hooks/use-is-dashboard'

export default function Layout({children}) {
  const isDashboard = useIsDashboard()
  return (
<div className="min-h-screen h-full w-full flex flex-col bg-no-repeat bg-[url('/car.jpg')] bg-cover">
  <div className="flex-grow">
 {isDashboard && <Header/>}
<main>
    {children}
</main>
</div>
<Footer/>
</div>
  )
}
