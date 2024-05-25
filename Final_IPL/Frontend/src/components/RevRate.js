import { user1 } from "../utils/userAvatar";

const RevRate = (props) => {
    const {name, match, winnings, review, img} = props;
    console.log(img);
  return (
    <div>
      <div className="border-2 border-black bg-white rounded-2xl w-[430px] h-[280px] hover:drop-shadow-xl">
        <div className="flex">
          <div className="border-2 border-black w-[66px] h-[64px] rounded-full ml-4 mt-2 ">
            <img src={img} className="rounded-full" />
          </div>
          <div className="p-2 mt-3 font-semibold text-2xl">{name}</div>
        </div>
        <div className="border-2 border-black mt-2 h-[56px] bg-black px-2">
          <div className="flex justify-between items-center ">
            <div className="text-white">
              <p className="font-semibold text-base">Mega Contest Winner</p>
              <p className="ml-2 font-thin text-sm text-slate-200">
                {match}
              </p>
            </div>
            <div className="text-white">
              <p className="text-center font-extrabold text-lg text-yellow-300">
                {winnings}
              </p>
              <p className="text-center font-thin text-sm text-slate-200">
                Worth Vouchers
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 mx-2 text-justify mt-2">
          <p>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevRate;
