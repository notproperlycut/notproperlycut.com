import Header from './header'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}

    <style jsx>{`
      div {
        text-align: left;
        margin-left: 1em;
      }
    `}</style>

    <style jsx global>{`
      html {
        font-family: "Trebuchet MS", sans-serif;
      }

      a {
        text-decoration: none;
        color: #BF7F3F;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>

)

export default Layout
