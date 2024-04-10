const RatingBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="border-2 border-white h-[50px] w-[600px] bg-white rounded-lg shadow-lg hover:transition-shadow hover:duration-300 hover:shadow-red-200">
        <div className="flex space-x-6 justify-center my-2">
          <p className="text-lg">
            App Rating <span className="ml-4">⭐⭐⭐⭐</span>
            <span className="ml-6 font-semibold">4</span>
          </p>
          <p className="text-gray-300"> | </p>
          <p className="font-bold text-gray-500">2,750,143 Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
