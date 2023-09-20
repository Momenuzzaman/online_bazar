import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsImages } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

import img from "../../images/admin.jpg";
const EditProduct = () => {
  const categorys = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 2,
      name: "Sports",
    },
    {
      id: 3,
      name: "Sports",
    },
    {
      id: 4,
      name: "Books",
    },

    {
      id: 5,
      name: "Sports",
    },

    {
      id: 6,
      name: "Sports",
    },

    {
      id: 7,
      name: "Sports",
    },
  ];

  // input state
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  useEffect(() => {
    setState({
      name: "Polo",
      description: "It's very comfortable",
      discount: 10,
      price: 100,
      brand: "Easy",
      stock: 10,
    });
    setCategory("Sports");
    setImageShow([img, img, img]);
  }, []);

  // get input value
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [cateShow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState(categorys);
  const [searchValue, setSearchValue] = useState("");

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      let srcValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categorys);
    }
  };

  // image state
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  // handle change image
  const handleImageChange = (img, files) => {
    if (files.length > 0) {
      console.log(img);
      console.log(files[0]);
    }
  };

  return (
    <div className="page_body">
      <div className="page_container">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-text_primary text-xl font-semibold">
            Edit Product
          </h1>
          <Link
            className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 "
            to="/seller/dashboard/products"
          >
            Products
          </Link>
        </div>
        {/* form */}
        <div>
          <form className="text-text_primary">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="input-parent mb-0">
                <label htmlFor="name"> Product Name</label>
                <input
                  className="input"
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  placeholder="Product Name"
                  name="name"
                />
              </div>
              <div className="input-parent mb-0">
                <label htmlFor="brand"> Product Brand</label>
                <input
                  className="input"
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  placeholder="Product Brand"
                  name="brand"
                />
              </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="input-parent mb-0 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  placeholder="--select category--"
                  id="category"
                />
                <div
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all duration-500 ${
                    cateShow ? "scale-100 rounded-b-md" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-text_primary overflow-hidden"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-auto">
                    {allCategory.map((c, i) => (
                      <span
                        className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${
                          category === c.name && "bg-indigo-500"
                        }`}
                        onClick={() => {
                          setCateShow(false);
                          setCategory(c.name);
                          setSearchValue("");
                          setAllCategory(categorys);
                        }}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="input-parent mb-0">
                <label htmlFor="stock"> Stock</label>
                <input
                  className="input"
                  onChange={inputHandle}
                  value={state.stock}
                  type="number"
                  min={0}
                  placeholder="Product stock"
                  name="stock"
                />
              </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="input-parent mb-0">
                <label htmlFor="price"> Price</label>
                <input
                  className="input"
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  min={0}
                  placeholder="price"
                  name="price"
                />
              </div>
              <div className="input-parent mb-0">
                <label htmlFor="discount">Discount</label>
                <input
                  className="input"
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  min={0}
                  placeholder="%discount%"
                  name="discount"
                />
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col w-full gap-1 text-[#d0d2d6] mb-5">
              <label htmlFor="description">Description</label>
              <textarea
                rows={4}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
                onChange={inputHandle}
                value={state.description}
                placeholder="description"
                name="description"
                id="description"
              ></textarea>
            </div>
            {/* img */}
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
              {imageShow.map((img, i) => (
                <div>
                  <label htmlFor={i} className="cursor-pointer">
                    <img src={img} alt="img" />
                  </label>
                  <input
                    onChange={(e) => handleImageChange(img, e.target.files)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              <button className="bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
