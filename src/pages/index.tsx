import Head from 'next/head'
import { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import List from '@/components/List'

const Index: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Happl - Frontend Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List />
    </div>
  )
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default Index
