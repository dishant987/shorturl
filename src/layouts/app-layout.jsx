import Header from "@/components/header"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { LinkIcon, Twitter, Github, Linkedin } from "lucide-react"

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen container">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-xl mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 group mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                    <LinkIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Trimrr
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The most powerful URL shortener with advanced analytics and custom branding.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Trimrr. Made with 💗 by Dishant</p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppLayout
