import { getImage } from '../../utils/image';

const RobosPage = () => {
    const listItem = ['wellcome_robos', 'wallet', 'Clip path group', 'collections', 'new_nft', 'Clip path group-1'];

    return (
        <div className="w-full">
            <div
                className="max-h-[40rem] mb-[20%]"
                style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
            >
                <div className="flex flex-col items-center container__box pt-14 ">
                    <h3 className="text-2xl font-semibold text-[#BDCCEA] text-opacity-55 mb-3">UX/UI CASE STUDY</h3>
                    <img className="px-20" src={getImage('Group 58.png')} alt="" />
                    <img src={getImage('Home Demo 1.png')} alt="" />
                    <p className="text-[#7881A1] font-semibold text-3xl text-center px-20 pb-10">
                        A Sentimental Analysis Dashboard for NFT Traders
                    </p>
                </div>
            </div>

            {/* section 1 */}
            <div className="py-12 container__box">
                <div className="robos__title">
                    <h2 className="robos__title--number">01</h2>
                    <h3 className="robos__title--text">Project Overview</h3>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <h4 className="mb-4 text-2xl font-bold">Challenge</h4>
                        <p className="pl-6">
                            The team wanted to develop an effective
                            <span className="font-semibold">Sentiment Analysis Dashboard</span> that integrates Data and
                            AI from all NFTs communities into the Solana Blockchain.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-2xl font-bold">Goal</h4>
                        <p className="pl-6">
                            Provided NFT enthusiasts, collectors, and investors with the tools they need to make
                            informed financial decisions while fostering a more transparent and trustworthy NFT
                            ecosystem.
                        </p>
                    </div>
                    <hr className="w-32 h-1 bg-[#97A7C9] col-span-2" />
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 ">
                            <h4 className="mb-4 text-2xl font-bold">My Role</h4>
                            <div className="grid grid-cols-2 pl-3">
                                <div className="flex flex-col gap-1">
                                    <span>UX Research</span>
                                    <span>Visual Design</span>
                                    <span>User Flow</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span>Wireframes</span>
                                    <span>Prototyping</span>
                                    <span>NFT Artist</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-4 text-2xl font-bold">Tools</h4>
                            <div className="flex justify-center gap-4">
                                <img src={getImage('logos_figma.png')} alt="" />
                                <img src={getImage('logos_adobe-illustrator.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="mx-auto" src={getImage('ROBOS LOGO.png')} alt="" />
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="mb-20">
                <div
                    className="relative pt-12 min-h-[15rem] mb-[10rem]"
                    style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
                >
                    <div className="flex-row-reverse justify-center robos__title">
                        <h2 className="robos__title--number text-[#BDCCEA]">02</h2>
                        <h3 className="text-white robos__title--text">Design Process</h3>
                    </div>
                    <img
                        className="container__box w-[80%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[37%]"
                        src={getImage('design_process.png')}
                        alt=""
                    />
                </div>
            </div>

            {/* section 3 */}
            <div className="mb-20 container__box">
                <div className="robos__title">
                    <h2 className="robos__title--number">03</h2>
                    <h3 className="robos__title--text">UX Research - Paint Points</h3>
                </div>
                <img className="w-[80%] mx-auto" src={getImage('paint_point.png')} alt="" />
            </div>

            {/* section 4 */}
            <div className="container relative mx-auto mb-20 ">
                <div className="absolute top-0 left-0 robos__title">
                    <h2 className="robos__title--number">04</h2>
                    <h3 className="robos__title--text">User Flow </h3>
                </div>
                <img src={getImage('user_flow.png')} alt="" />
            </div>

            {/* section 5 */}
            <div
                className="pt-12 mb-20"
                style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
            >
                <div className="container__box">
                    <div className="robos__title">
                        <h2 className="robos__title--number text-[#BDCCEA] text-opacity-90">05</h2>
                        <h3 className="text-white robos__title--text">Wireframe</h3>
                    </div>
                    <p className="pl-48 text-white">
                        I created the high fidelity wireframes for a detailed and refined representation of a user
                        interface (UI). It helps the stakeholders visualize the design&apos;s aesthetics and
                        functionality before moving on to the actual development phase.
                    </p>
                    <div className="grid grid-cols-3 gap-5 p-10">
                        {listItem.map((item) => (
                            <img
                                key={item}
                                className="object-contain w-full border border-black border-solid"
                                src={getImage(`${item}.png`)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* section 6 */}
            <div className="mb-10 container__box ">
                <div className="robos__title">
                    <h2 className="robos__title--number ">06</h2>
                    <h3 className="robos__title--text">Style Guidline</h3>
                </div>
                <p>
                    I selected these colors to create a modern, neutral aesthetic that is often seen in
                    technology-related products and services.
                </p>
                <div className="grid grid-cols-2 gap-5">
                    <div
                        className="py-10"
                        style={{
                            background: 'linear-gradient(269.64deg, #BDCCEA 51.82%, rgba(189, 204, 234, 0.33) 83.03%)'
                        }}
                    >
                        <img className="w-[80%] ml-auto" src={getImage('colors.png')} alt="" />
                    </div>

                    <div className="px-20">
                        <h3 className="text-2xl font-bold text-right ">Typography</h3>
                        <div className="py-10 text-center">
                            <div className="font-bold inline-block text-[18rem] text-[#BDCCEA] relative ml-20 leading-none">
                                Aa
                                <span className="absolute bottom-0 left-0 z-10 inline-block font-bold text-black -translate-x-[70%] -translate-y-[80%] text-7xl">
                                    Inter
                                </span>
                            </div>
                            <div className="">
                                <p className="text-2xl font-semibold max-w-[19rem] mb-12 text-left">
                                    The quick brown fox jumps over the lazy dogs
                                </p>
                                <div className="flex gap-10 text-xl">
                                    <span className="font-bold">Bold</span>
                                    <span className="font-semibold">Semi Bold</span>
                                    <span className="font-medium">Medium</span>
                                    <span>Regular</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 px-20">
                        <h3 className="text-2xl font-bold">Icongraphy</h3>
                        <div className="grid w-full grid-cols-2 px-20">
                            <div className="flex flex-col items-center gap-6">
                                <img src={getImage('Group 68.png')} alt="" />
                                <span className="text-xl">Icon set</span>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <div className="flex items-center flex-1">
                                    <img className="" src={getImage('emoji.png')} alt="" />
                                </div>
                                <span className="text-xl">Emoji set</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 7 */}
            <div
                className="px-12 pt-24"
                style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
            >
                <div className="container__box">
                    <div className="flex-row-reverse justify-center robos__title">
                        <h2 className="robos__title--number text-[#BDCCEA] text-opacity-90">07</h2>
                        <h3 className="text-white robos__title--text">Visual Design</h3>
                    </div>
                    <div className="text-white">
                        <div className="flex">
                            <div className="w-[60%]">
                                <img src={getImage('Home Demo 2.png')} alt="" />
                            </div>
                            <div className="flex-1 my-auto">
                                <h4 className="mb-5 text-2xl font-bold">Home Page</h4>
                                <p className="text-[#BDCCEA] text-xl">Users land when they first visit the website.</p>
                            </div>
                        </div>

                        <div className="flex mb-8">
                            <div className="w-[60%]">
                                <img className="w-[75%] mx-auto" src={getImage('select_wallet.png')} alt="" />
                            </div>
                            <div className="flex-1 my-auto">
                                <h4 className="mb-5 text-2xl font-bold">Login / Registration</h4>
                                <p className="text-[#BDCCEA] text-xl">
                                    Simplified user registration or log in by connecting to their crypto and NFT wallet
                                </p>
                            </div>
                        </div>

                        {/* launches */}
                        <div className="flex mb-8">
                            <div className="w-[60%] relative">
                                <img className="w-[75%] mx-auto" src={getImage('launches_upcomming.png')} alt="" />
                                <img
                                    className="absolute mx-auto w-[40%] right-[9%] top-[52%]"
                                    src={getImage('hype_mood.png')}
                                    alt=""
                                />
                            </div>
                            <div className="flex-1 my-auto">
                                <h4 className="mb-5 text-2xl font-bold">Upcoming Launches</h4>
                                <p className="text-[#BDCCEA] text-xl">
                                    A central hub for users to stay informed about what&apos;s on the horizon and plan
                                    their engagement accordingly <br />
                                    <br />
                                    <span>
                                        Each NFT Collection will have a specific sentiment (
                                        <span className="text-[#51C274]">Positive</span>,{' '}
                                        <span className="text-[#EFC535]">Neutral</span>,{' '}
                                        <span className="text-[#E28886]">Negative</span>) to determine{' '}
                                        <span className="text-[#E09040]">Hype</span> of each collection.
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        We also analyze mood from emotions to see if people are:{' '}
                                        <span className="text-[#51C274]">Happy</span>,{' '}
                                        <span className="text-[#EFC535]">Sad</span>,{' '}
                                        <span className="text-[#E28886]">Angry</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        {/* my collection */}
                        <div className="flex flex-row-reverse">
                            <div className="w-[45%]">
                                <img className="ml-auto " src={getImage('my_collections.png')} alt="" />
                            </div>
                            <div className="flex-1 pl-[8%] my-auto">
                                <h4 className="mb-5 text-2xl font-bold">My Collection</h4>
                                <p className="text-[#BDCCEA] text-xl">
                                    Major role - allow users to keep track of their favorite or collected items in an
                                    organized manner. Also, the <span className="font-bold">Spending</span> Summary
                                    graph provides users with insights into their spending patterns or investments
                                    related to their collections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <img className="w-full max-w-[2048px] mx-auto" src={getImage('ROBOS Display.png')} alt="" />
        </div>
    );
};

export default RobosPage;
