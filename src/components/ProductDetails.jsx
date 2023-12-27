import ReactHtmlParser from "react-html-parser";
const ProductDetails = ({ data }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-[100px]">
          <h2 className="text-[26px] font-semibold">{data?.title}</h2>
          <br />
          <div className="py-5 w-full h-full">
            <img
              src={data?.imgCDN}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <br />
          <div>{ReactHtmlParser(data?.des)}</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
