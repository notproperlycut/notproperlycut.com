import Link from 'next/link'

const Header = () => (
  <div>
    <div>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
    <div>
      <Link href="https://medium.com/@notproperlycut">
        <a>blog</a>
      </Link>
    </div>
    <div>
      <Link href="https://github.com/notproperlycut">
        <a>github</a>
      </Link>
    </div>
    <div>
      <Link href="https://www.linkedin.com/in/chris-tierney-edinburgh/">
        <a>linkedin</a>
      </Link>
    </div>
  </div>
)

export default Header
