import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="bg-neutral-950 sm:flex md:px-15 md:flex-row sm:static">
                <div className="md:flex md:flex-col sm:z-20 md:z-2 sm:min-w-screen md:min-w-md sm:mt-160 md:mt-0 sm:px-15 md:relative sm:static">
                    <p className="text-4xl text-white font-bold sm:text-center md:text-left">Want to Turn Social Media Into a Profitable Career?</p>
                    <p className="text-4xl text-cyan-400 text-shadow-lg/50 [text-shadow:_0_4px_8px_#FC004E] text-[#FC004E] font-bold mt-3
                     sm:text-center md:text-left">Discover your way to success with Fametonic:</p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center md:mt-3 sm:mt-8">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Start growing your influence right away—no waiting required!</p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center mt-3">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center mt-3">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Use a Personal AI Worker to boost your content </p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center mt-3">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Learn from expert-led courses designed for aspiring influencers</p>
                    <div className="w-2/5 sm:mt-20 md:mt-0">
                        <button type="button"
                                className="inline-flex justify-center md:w-full sm:w-lg mt-3 text-white bg-pink-600 focus:ring-2 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 uppercase ">Get Started
                            <Image
                                src="/home/forwardIcon.svg"
                                alt="Picture of the author"
                                className="pl-2"
                                width={15}
                                height={15}
                            />
                        </button>
                            <p className="text-xs text-white mt-2 flex justify-center">1-minute quiz for personalized Insights</p>

                    </div>
                    <div className="md:relative sm:absolute sm:top-332 md:top-0 sm:text-center md:text-left">
                        <p className="text-xs text-gray-400 mt-6">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                        <p className="text-[10px] text-gray-400 mt-5">Fametonic 2025 ©All Rights Reserved.</p>
                    </div>
                </div>

                <div className="md:relative sm:absolute md:top-0 sm:top-80 sm:px-15">
                    <Image
                        src="/home/homeImage.svg"
                        alt="Picture of the author"
                        width={800}
                        height={800}
                        className="object-cover"
                    />
                </div>

            </div>
        </>
    );
}//z-40 absolute top-90
