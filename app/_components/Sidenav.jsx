'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';




const SidebarLinks = [
  {
    imgURL: '/icons/upcoming.svg',
    route: '/',
    label: 'Home',
  },

  {
    imgURL: '/icons/upcoming.svg',
    route: '/Programs',
    label: 'Programs',
  },
  {
    imgURL: '/icons/previous.svg',
    route: '/About',
    label: 'About us',
  },
  {
    imgURL: '/icons/Video.svg',
    route: '/Contact',
    label: 'Contact',
  },

];

const Sidenav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          {/* Ensure no code is present here to neutralize any potential errors */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/ElixirLogo2.svg"
              width={50}
              height={50}
              alt="logo"
            />
            <p className="text-[26px] font-extrabold text-white">Elixir</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {SidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                     
                        
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Sidenav;