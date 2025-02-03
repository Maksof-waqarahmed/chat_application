import Layout from '@/components/dashboard-layout/layout'
import React from 'react'

interface Props {
    children: React.ReactNode
}
const layout = ({children}: Props) => {
  return (
    <Layout>{children}</Layout>
  )
}

export default layout