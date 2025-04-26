import Image from "next/image";
import Link from "next/link";
import Contacts from "@/app/contacts/page";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <div className="bg-neutral-950 w-full">
            <div className="flex justify-around py-12 px-11 ">
                <Image
                    src="/home/fametonicFont.svg"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    className="flex justify-start"
                />
                <button type="button" className="inline-flex items-center lg:hidden"
                        onClick={toggle}>
                    {/* Menu icon */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="40"
                         height="40"
                         viewBox="0 0 24 24">
                        <path fill="#fff"
                              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                    </svg>
                </button>
                {/*<div className="w-1/3"></div>*/}
                <ul className="hidden lg:flex gap-x-6 text-white w-3/5 flex justify-end">
                    <li>
                        <Link href="/about">
                            <p>About Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <p>Contacts</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;