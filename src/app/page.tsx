import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="bg-neutral-950 sm:flex max-sm:flex lg:px-15 lg:flex-row sm:static max-sm:static lg:h-svh sm:justify-center max-sm:justify-center lg:justify-start">
                <div
                    className="flex flex-col sm:z-20 max-sm:z-20 lg:z-2 sm:mt-[86%] md:mt-[90%] max-sm:mt-[84%] lg:mt-[1%] sm:px-5 max-sm:px-5">
                    <p className="text-4xl text-white font-bold sm:text-center max-sm:text-center lg:text-left">Want to
                        Turn Social Media Into a Profitable Career?</p>
                    <p className="text-4xl text-cyan-400 text-shadow-lg/50 [text-shadow:_0_4px_8px_#FC004E] text-[#FC004E] font-bold mt-3
                     sm:text-center max-sm:text-center lg:text-left">Discover your way to success with Fametonic:</p>
                    <p className="text-base text-white font-bold inline-flex items-baseline flex items-center lg:mt-5 sm:mt-8 max-sm:mt-8">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="bullet point"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Start growing your influence right away—no waiting required!</p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center mt-3">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="bullet point"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center mt-3">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="bullet point"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Use a Personal AI Worker to boost your content </p>
                    <p className="text-base  text-white font-bold inline-flex items-baseline flex items-center mt-3">
                        <Image
                            src="/home/bulletPoint.png"
                            alt="bullet point"
                            width={20}
                            height={20}
                            className="mr-2"
                        /> Learn from expert-led courses designed for aspiring influencers</p>
                    <div
                        className="relative lg:invisible sm:visible max-sm:visible sm:text-center max-sm:text-center">
                        <p className="text-xs text-gray-400 mt-6">By clicking "Get Started", you agree with Terms and
                            Conditions, Privacy Policy, Subscription Terms </p>
                        <p className="text-[10px] text-gray-400 mt-5">Fametonic 2025 ©All Rights Reserved.</p>
                    </div>
                    <div
                        className="lg:w-1/2 sm:place-content-center max-sm:place-content-center sm:grid max-sm:grid lg:place-content-start lg:flex lg:flex-col">
                        <button type="button"
                                className="inline-flex justify-center lg:w-full sm:w-lg max-sm:w-sm mt-3 text-white bg-pink-600 focus:ring-2 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 uppercase">Get
                            Started
                            <Image
                                src="/home/forwardIcon.svg"
                                alt="button forward"
                                className="pl-2"
                                width={15}
                                height={15}
                            />
                        </button>
                        <p className="text-xs text-white mt-2 flex justify-center mb-8">1-minute quiz for personalized
                            Insights</p>
                    </div>
                    <div
                        className="relative lg:visible sm:invisible max-sm:invisible lg:text-left ">
                        <p className="text-xs text-gray-400 mt-6">By clicking "Get Started", you agree with Terms and
                            Conditions, Privacy Policy, Subscription Terms </p>
                        <p className="text-[10px] text-gray-400 mt-5">Fametonic 2025 ©All Rights Reserved.</p>
                    </div>
                </div>

                <div className="absolute lg:top-40 sm:top-80 max-sm:top-80 sm:px-15 max-sm:px-15 lg:left-200"
                     style={{ display: 'flex', flexDirection: 'column' }}>
                    <Image
                        src="/home/homeImage.svg"
                        alt="home title image"
                        height={1000}
                        width={1000}
                        objectFit="cover" // Controls how the image fills the container
                    />
                </div>

            </div>
        </>
    );
}