"use client";
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import Image from "next/image";
import crowdfundingIcon from "@public/crowdfunding.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const account = useActiveAccount();
  const router = useRouter();

  return (
    <nav className="bg-slate-100 border-b-2 border-b-slate-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link href={`/dashboard/${account?.address}`} className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </Link>
          <div className="flex flex-1 items-center -translate-x-10 justify-center sm:translate-x-0 sm:items-stretch sm:justify-start">
            <Link href={"/"} className="flex flex-shrink-0 items-center">
              <Image
                src={crowdfundingIcon}
                alt="Crowdfunding"
                width={40}
                height={40}
                style={{
                  filter: "drop-shadow(0px 0px 24px #a726a9a8)",
                }}
              />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href={"/"}>
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-slate-700">
                    Campaigns
                  </p>
                </Link>
                {account && (
                  <Link href={`/dashboard/${account?.address}`}>
                    <p className="rounded-md px-3 py-2 text-sm font-medium text-slate-700">
                      Dashboard
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ConnectButton
              client={client}
              theme={lightTheme()}
              detailsButton={{
                style: {
                  maxHeight: "50px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
