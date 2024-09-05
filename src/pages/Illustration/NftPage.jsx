import { getImage } from '../../utils/image';

const NftPage = () => {
    const listItem = [
        'MadScientist Chippies(procreate)-01',
        'EasterFemale Chippies(procreate)-01',
        'Golden Knight Chippies(procreate)-01',
        'Poker Chippies(procreate)-01',
        'Dal Lama aka DeChips 1',
        'Astronaut Chippies-01 1',
        'St Patrick Chippies(procreate)-01',
        '1201 1',
        'EasterMale Chippies(procreate)-01',
        'Samurai Chippies(procreate)-01',
        'Santa(female) Chippies-01',
        'SAC Chippies(procreate)-01 1',
        'Cookie Chippies(procreate)-01',
        'Marilyn Monroe 1_1',
        '1176 1',
        'Artist Chippies(procreate)-01',
        'X-Ray Chippies(1)-01 1',
        '897 1',
        '1116 1',
        '1038 1',
        'Halloween Chippies(procreate)-01',
        '1008 1',
        '984 1',
        '792 1',
        '759 1',
        '720 1',
        '703 1',
        'Artist Chippies(procreate)-01',
        'X-Ray Chippies(1)-01 2',
        '897 2',
        '1116 2',
        '1038 2',
        'Halloween Chippies(procreate)-01',
        '1008 2',
        '984 2',
        '792 2',
        '759 2',
        '720 2',
        '703 2',
        '1116 3',
        '1038 3',
        '1008 3',
        'Halloween Chippies(procreate)-01',
        '984 3',
        '759 3',
        '792 3',
        '720 3',
        '703 3'
    ];
    return (
        <div className="">
            <h2 className="c-title text-[#1E2242] mb-12">Freelance NFT Artist</h2>
            <div className="grid grid-cols-3 mb-12 gap-7">
                <img className="aspect-square" src={getImage('Twitter(tablet).png')} alt="" />
                <img className="aspect-square" src={getImage('ME(tablet).png')} alt="" />
                <img className="aspect-square" src={getImage('Discord (tablet).png')} alt="" />
            </div>
            <p className="max-w-[26rem] mx-auto ">
                I co-founded and led the art team of an NFT Collection on Solana Blockchain from pre-money valuation to
                post-money valuation. I worked with cross-functional team that consists of crypto gurus, entrepreneurs,
                elite AI students, and 5 developers working for major tech companies.
                <br />
                <br />
                The project attracted 5000 SOL trading volume in the first month ($1M at SOL all-time-high-price) and
                collaborated with multiple famous NFT Projects/DAOs (DeGods, SAC, Solana Yacht Club, etc.)
            </p>
            <div className="flex justify-center my-8">
                <a
                    className="border border-[#1E2242] border-solid p-2 font-semibold "
                    target="_blank"
                    href="https://magiceden.io/marketplace/chippies_nft"
                >
                    View Collection
                </a>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {listItem.map((img) => (
                    <img key={img} className="w-full aspect-square" src={getImage(`${img}.png`)} />
                ))}
            </div>
        </div>
    );
};

export default NftPage;
