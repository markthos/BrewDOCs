import Link from "next/link";

export default async function Header() {
  const navLinks = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact Us",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/apollo_test",
      label: "Test",
    },
  ];

  const Logo = () => {
    return (
      <Link href="/" className="flex items-center font-medium text-stone-600 mb-4 md:mb-0">
        <span className="rounded-full bg-slate-300 size-6 inline-block text-xs" />
        <span className="ml-3 text-xl inline-block">BrewDocs</span>
      </Link>
    );
  };

  const NavLinks = () => {
    return (
      <nav className="flex flex-wrap items-center font-semibold justify-center">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="ml-5 hover:text-gray-900">
            {link.label}
          </Link>
        ))}
      </nav>
    );
  };

  const AuthLinks = () => {
    return (
      <div className="flex gap-2 items-center">
        <Link href="/login" className="hover:text-gray-900 font-semibold">
          Login
        </Link>
        <Link href="/signup">
          <button className="flex font-semibold items-center bg-gradient-to-t from-amber-400 to-amber-200 border-0 py-1 px-3 focus:outline-none rounded transition-all hover:shadow-md text-base">
            Get Started
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    );
  };

  return (
    <header className="text-stone-600 bg-slate-300/35 drop-shadow-xl border-b border-white">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <NavLinks />
        <AuthLinks />
      </div>
    </header>
  );
}
