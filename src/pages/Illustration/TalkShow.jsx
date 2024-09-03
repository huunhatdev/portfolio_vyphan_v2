import { getImage } from '../../utils/image';

const TalkShow = () => {
    return (
        <div>
            <h2 className="c-title text-[#C39CCD]">Talkshow “About Me”</h2>
            <div className="flex">
                <img src={getImage('7mineava 2.png')} alt="" />
                <img src={getImage('7minebia 1.png')} alt="" />
            </div>
            <p className="max-w-[24rem] mx-auto my-12">
                The talk show &quot;About Me&quot; is an offline event hosted by 7MINE in Hanoi, Vietnam. It was created
                for both the LGBT+ community and those interested in learning more, fostering connections, and hearing
                inspiring guest stories. Here are the front and back designs of the tickets I created for the event.
            </p>
            <div className="flex justify-center gap-8">
                <div className="flex items-center w-2/5">
                    <img className="object-contain aspect-square" src={getImage('IMG_2584_JPG 1.png')} alt="" />
                </div>
                <div className="">
                    <img className="object-contain" src={getImage('Vé Mặt Trước 1.png')} alt="" />
                    <img className="object-contain" src={getImage('Vé Mặt Sau 1.png')} alt="" />
                </div>
            </div>
            <p className="max-w-[24rem] mx-auto my-12">
                Here are some photos from the event, held at a cozy coffee shop in Hanoi, Vietnam. Although the audience
                size was limited, we had an amazing time listening to the guest speakers and connecting with each other.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <img className="col-span-2" src={getImage('pic4 1.png')} alt="" />
                <img className="" src={getImage('pic2 1.png')} alt="" />
                <img src={getImage('pic3 1.png')} alt="" />
                <img className="col-span-2" src={getImage('pic1 1.png')} alt="" />
            </div>
        </div>
    );
};

export default TalkShow;
