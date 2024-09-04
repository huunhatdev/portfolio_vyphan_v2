import { getImage } from '../../utils/image';

const RobosPage = () => {
    const listItem = ['wellcome_robos', 'wallet', 'Clip path group', 'collections', 'new_nft', 'Clip path group-1'];

    return (
        <div>
            <div
                className="flex flex-col items-center max-h-[40rem] mb-52 pt-14"
                style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
            >
                <h3 className="text-2xl font-semibold text-[#BDCCEA] text-opacity-55 mb-3">UX/UI CASE STUDY</h3>
                <img className="px-20" src={getImage('Group 58.png')} alt="" />
                <img src={getImage('Home Demo 1.png')} alt="" />
                <p className="text-[#7881A1] font-semibold text-3xl text-center px-20 pb-10">
                    A Sentimental Analysis Dashboard for NFT Traders
                </p>
            </div>
            <div className="">
                <div className="robos__title">
                    <h2 className="robos__title--number">01</h2>
                    <h3 className="robos__title--text">Project Overview</h3>
                </div>
                <div className="grid grid-cols-2 gap-14">
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
                    <img src={getImage('ROBOS LOGO.png')} alt="" />
                </div>
            </div>
            <div>
                <div
                    className="relative pt-12 min-h-[15rem] mb-[10rem]"
                    style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
                >
                    <div className="flex-row-reverse justify-center robos__title">
                        <h2 className="robos__title--number text-[#BDCCEA]">02</h2>
                        <h3 className="text-white robos__title--text">Design Process</h3>
                    </div>
                    <img
                        className="w-[80%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[37%]"
                        src={getImage('design_process.png')}
                        alt=""
                    />
                </div>
            </div>
            <div className="mb-20">
                <div className="robos__title">
                    <h2 className="robos__title--number">03</h2>
                    <h3 className="robos__title--text">UX Research - Paint Points</h3>
                </div>
                <img className="w-[80%] mx-auto" src={getImage('paint_point.png')} alt="" />
            </div>
            <div className="relative">
                <div className="absolute top-0 left-0 robos__title">
                    <h2 className="robos__title--number">04</h2>
                    <h3 className="robos__title--text">User Flow </h3>
                </div>
                <img src={getImage('user_flow.png')} alt="" />
            </div>
            <div
                className=""
                style={{ background: 'linear-gradient(180deg, #1F2143 0%, rgba(54, 57, 90, 0.85) 100%)' }}
            >
                <div className="robos__title">
                    <h2 className="robos__title--number text-[#BDCCEA] text-opacity-90">05</h2>
                    <h3 className="text-white robos__title--text">Wireframe</h3>
                </div>
                <p className="pl-48 text-white">
                    I created the high fidelity wireframes for a detailed and refined representation of a user interface
                    (UI). It helps the stakeholders visualize the design&apos;s aesthetics and functionality before
                    moving on to the actual development phase.
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
            <img src={getImage('ROBOS Display.png')} alt="" />
        </div>
    );
};

export default RobosPage;
