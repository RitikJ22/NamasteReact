const Shimmer = () => {
  return (
    <>
      <div  className="body m-6">
        {Array(12).fill("").map((e,index) => (
            <div key={index}className="w-64 h-72 2 p-1 m-6  mt-20 bg-gray-200 float-left"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer; 

