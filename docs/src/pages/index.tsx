import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container padding-top--lg padding-bottom--xl">
          <div className="row">
            <div>
              <h2>About Dogu-Utils</h2>
              <p>
                Dogu-Utils is a utility library for TypeScript and JavaScript.
                The name "Dogu" (도구) is a Korean word that translates to
                "tool" in English. This library aims to be a useful tool for
                developers, providing a collection of utility functions and
                hooks.
              </p>
              <h2 className="margin-top--lg">Features</h2>
              <ul>
                <li>TypeScript support</li>
                <li>React hooks</li>
                <li>Utility functions</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="margin-top--lg">
              <h2>Getting Started</h2>
              <p>
                To get started with Dogu-Utils, install the library using npm:
              </p>
              <Tabs
                defaultValue="npm"
                values={[
                  { label: "npm", value: "npm" },
                  { label: "Yarn", value: "yarn" },
                  { label: "pnpm", value: "pnpm" }
                ]}
              >
                <TabItem value="npm">
                  <pre>
                    <code>npm install dogu-utils</code>
                  </pre>
                </TabItem>
                <TabItem value="yarn">
                  <pre>
                    <code>yarn add dogu-utils</code>
                  </pre>
                </TabItem>
                <TabItem value="pnpm">
                  <pre>
                    <code>pnpm add dogu-utils</code>
                  </pre>
                </TabItem>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
