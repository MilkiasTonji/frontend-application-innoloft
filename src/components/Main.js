import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { RiHome2Fill, RiHomeFill, RiHomeLine } from "react-icons/ri";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BsPeople } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import { Avatar } from "antd";
import man from "../assets/For-Men.jpg";
import { fetchProduct, getLoaging, getProduct } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumb } from 'antd';
import { AiOutlineHome } from "react-icons/ai";
import { fetchConfiguration, getConfigLoaging, getConfiguration } from "../features/configSlice";


const Main = ({ children, className = "", type }) => {

  const dispatch = useDispatch()
  const prd = useSelector(getProduct);
  const loading = useSelector(getLoaging);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct())
  }, [loading, dispatch])



  const { pathname } = useLocation();
  const items = [
    {
      label: <a href="https://www.google.com">Google</a>,
      key: "0",
    },
    {
      label: <a href="https://www.facebook.com">facebook</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "MicroSoft",
      key: "3",
    },
  ];


  const handleEdit = () => {
    navigate("/product/edit")
  }

  const handleOrder = () => {
    console.log("Orders clicked")
  }

  return (
    <div className={`w-full h-screen bg-light ${className}`}>
      <div className="w-full mb-4">
        <Navbar />
      </div>
      <div className="w-full flex flex-col md:hidden">
              {
                type === "product" &&
                <div className="flex items-center justify-between flex-wrap">
                  <Breadcrumb
                    className="w-full"
                    separator=">"
                    items={[
                      {
                        title: <AiOutlineHome className="my-1 w-6" />,
                      },
                      {
                        title: 'Offers',
                        href: '',
                      },
                      {
                        title: 'Intelligent Finite Element in StruCtural mechanics',
                        href: '',
                      },
                    ]}
                  />
                  <button
                    onClick={handleEdit}
                    className="bg-main text-light py-1 px-4 rounded-md my-3">
                    Edit
                  </button>
                </div>
              }
              {
                type === "edit" &&
                <div className="w-[90%] md:w-full flex items-center justify-between flex-wrap">
                 <p>Offer Title</p>
                  <button
                    onClick={handleOrder}
                    className="bg-main text-light py-1 px-4 rounded-md my-3">
                    View Orders
                  </button>
                </div>
              }
              {children}
            </div>
      {
        Object.keys(prd?.product).length === 0 && prd.product.error ?
          (
            <div className="flex items-center justify-center">
              <p>{prd.product.error}</p>
            </div>
          ) :
          <div className="md:flex w-full px-0 md:px-32">
            {/* sidebar */}
            <div className="w-full md:w-1/4 md:h-screen py-4">
              <div className="py-2 flex items-start gap-3">
                {
                  prd.product && prd.product.user &&
                  (
                    <>
                      <Avatar src={prd.product?.user.profilePicture ? prd.product?.user.profilePicture : man} size={64} />
                      <div className="flex flex-col">
                        <p className="text-bold text-xl">{prd.product.user.firstName} {prd.product.user.lastName}</p>
                        <span className="text-gray-500 text-sm">{prd.product.user.email}</span>
                        <p className="text-gray-500">{prd.product.user.position}</p>
                      </div>
                    </>
                  )
                }
              </div>
              <ul className="w-full flex flex-col items-center justify-center gap-1">
                <li
                  className={`w-full py-2 px-5   hover:text-dark cursor-pointer ${pathname} === "/" ? bg-gray-100 text-white: ""`}
                >
                  <Link
                    to="/"
                    className={`w-full flex items-center justify-start gap-2`}
                  >
                    <RiHomeLine />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="w-full py-2 px-5    hover:text-dark cursor-pointer">
                  <Link
                    to="/product"
                    className="w-full flex items-center justify-start gap-2"
                  >
                    <BsPeople />
                    <span>Members</span>
                  </Link>
                </li>

                <li className="w-full py-2 px-5   hover:text-dark cursor-pointer">
                  <Link
                    to="/product"
                    className="w-full flex items-center justify-start gap-2"
                  >
                    <RiOrganizationChart width={10} height={10} />
                    <span>Organization</span>

                    <Dropdown
                      className="ml-24"
                      menu={{
                        items,
                      }}
                      trigger={["click"]}
                    >
                      <button onClick={(e) => e.preventDefault()}>
                        <Space>
                          <DownOutlined />
                        </Space>
                      </button>
                    </Dropdown>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/4 flex flex-col hidden md:block">
              {
                type === "product" &&
                <div className="flex items-center justify-between">
                  <Breadcrumb
                    className="w-full"
                    separator=">"
                    items={[
                      {
                        title: <AiOutlineHome className="my-1 w-6" />,
                      },
                      {
                        title: 'Offers',
                        href: '',
                      },
                      {
                        title: 'Intelligent Finite Element in StruCtural mechanics',
                        href: '',
                      },
                    ]}
                  />
                  <button
                    onClick={handleEdit}
                    className="bg-main text-light py-1 px-4 rounded-md my-3">
                    Edit
                  </button>
                </div>
              }
              {
                type === "edit" &&
                <div className="w-[90%] md:w-full flex items-center justify-between flex-wrap">
                 <p>Offer Title</p>
                  <button
                    onClick={handleOrder}
                    className="bg-main text-light py-1 px-4 rounded-md my-3">
                    View Orders
                  </button>
                </div>
              }
              {children}
            </div>
          </div>
      }
    </div>
  );
};

export default Main;
