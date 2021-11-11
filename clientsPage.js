import Link from "next/link"

import Layout from "../components/layout"

import MainNavigation from "../components/mainNavigation"

import Client from "../components/client"

export default function Clients(props) {
  return (
    <Layout>
      <div>
        <MainNavigation />
        <h1>
          ClieNTS
          <ul>
            <li>
              {777}
            </li>
          </ul>
        </h1>
      </div>
    </Layout>
  )  

}
