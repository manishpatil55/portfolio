import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yourusername',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/yourusername',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/yourusername',
  },
]

export const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-x-clip z-20">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map(link => (
                <a 
                  href={link.href} 
                  key={link.title} 
                  className="inline-flex items-center gap-1.5 cursor-pointer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
