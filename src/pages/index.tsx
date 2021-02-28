import Head from 'next/head'

import SocialBanner from 'components/social-banner'
import PageHeader from 'components/page-header'
import CardRow from 'components/card-row'

const resources = [
  {
    title: 'Write a contact form in XState',
    name: 'XState Tutorial',
    path: 'blog/charting-a-contact-form-in-xstate',
    description: 'A series of statecharts representing a contact form.',
  },
  {
    title: 'Add footnotes to your content',
    name: 'HTML Tutorial',
    path: 'blog/add-footnotes-to-your-html',
    description:
      'Use HTML anchor tags to add accessible semantic footnotes to your article or webpage',
  },
]
export default function Home() {
  const greetings = ["Hi, I'm ", "Hey, I'm ", "It's ", "Hey there, I'm "]
  const punctuation = ['!', '!!', '', '.', ' 🙏']

  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="dark:bg-gray-900">
        <section className="py-8 mx-auto max-w-7xl px-42 sm:px-6">
          <div className="mb-4">
            <span className="text-4xl font-black text-gray-900 dark:text-gray-100 sm:text-6xl">
              {sample(greetings)}
            </span>

            <h1 className="inline text-4xl font-black text-gray-900 dark:text-gray-100 sm:text-6xl">
              Jacob Paris
            </h1>

            <span className="text-4xl font-black text-gray-900 dark:text-gray-100 sm:text-6xl">
              {sample(punctuation)}
            </span>
          </div>

          <p className="max-w-3xl mb-4 text-2xl text-gray-800 dark:text-gray-100">
            I'm a digital nomad from Canada 🇨🇦
          </p>

          <p className="max-w-3xl mb-4 text-2xl text-gray-800 dark:text-gray-100">
            When I'm not working, I'm diving all-in on one hobby or another.
            This month I'm <b className="text-red-800">snowboarding</b>.
          </p>
        </section>

        <SocialBanner className="mb-8" />

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {resources.map((resource) => (
            <CardRow resource={resource} />
          ))}
        </section>
      </main>
    </div>
  )
}

function sample(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)]
}
