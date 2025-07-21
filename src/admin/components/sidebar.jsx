import { Link, useLocation } from "react-router"
import { Home, ShoppingCart, Package, Users2, Fish, LayoutGrid, User } from "lucide-react"

export default function Sidebar() {
  const location = useLocation()

  const navItems = [
    { href: "/admin", icon: Home, label: "Dashboard" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
    { href: "/admin/categories", icon: LayoutGrid, label: "Category" },
    { href: "/admin/fish", icon: Fish, label: "Fish" },
    { href: "/admin/products", icon: Package, label: "Products" },
    { href: "/admin/users", icon: Users2, label: "Users" },
    { href: "/admin/profile", icon: User, label: "Profile" },
  ]

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 text-lg font-semibold text-white md:h-8 md:w-8 md:text-base"
        >
          <Fish className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Fish Store</span>
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            title={item.label}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-900 md:h-8 md:w-8 ${
              location === item.href ? "bg-gray-100 text-gray-900" : ""
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
