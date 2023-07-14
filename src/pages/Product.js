import React, { useEffect } from 'react'
import Main from '../components/Main'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getLoaging, getProduct } from '../features/productSlice';

import { GiRibbonMedal } from "react-icons/gi";
import YouTubePlayer from "../components/YouTubePlayer";
import { GrTechnology } from "react-icons/gr";
import { LiaHorseHeadSolid } from "react-icons/lia"
import { CiClock2, CiLocationOn } from "react-icons/ci"
import { AiOutlineDollarCircle } from "react-icons/ai"

import { Avatar } from "antd";
import man from "../assets/For-Men.jpg";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';


const Product = () => {


  const dispatch = useDispatch()
  const prd = useSelector(getProduct);
  const loading = useSelector(getLoaging);

  useEffect(() => {
    dispatch(fetchProduct())

    // console.log("============== prd ==============", prd)

  }, [loading, dispatch])

  return (
    <Main type={"product"}>
      {
        loading ? (
          <Loader type={"spokes"} color={"#272e71"} />
        ) : prd.product && !prd.error ?
          <div className="w-full">
            <ToastContainer />
            <div className="w-full h-auto md:flex border-[1px] border-solid border-gray-300">
              <div className="w-full md:w-[65%] flex flex-col items-start justify-start">
                {/* {children} */}
                <div className="relative md:w-full w-[80%]">
                  <img src={prd.product.picture ? prd.product.picture : man} className="w-full h-60" />

                  <div className="absolute top-0 left-0 rounded-br-lg flex bg-white w-28 gap-3">
                    <div className="w-8 bg-blue-800 h-7 rounded-br-lg flex items-center justify-center text-white">
                      <GiRibbonMedal />
                    </div>
                    <h1>Patent</h1>
                  </div>
                </div>
                <div className="w-full flex flex-col p-5 border-r-[1px] border-gray-300 border-solid bg-white">
                  <h1>Intelligent Finite Element in StruCtural mechanics</h1>
                  <p className="py-2 w-full">
                    {prd.product?.description?.replace(/<[^>]+>/g, '')}
                  </p>
                </div>
              </div>


              <div className="w-full md:w-[30%] py-4 px-3 bg-white">
                <div className="flex flex-col gap-3">
                  <h1>Offered By</h1>
                  <img
                    src={`${prd.product?.company?.logo ? prd.product?.company?.logo : "https://img.innoloft.com/logo.svg"} `}
                    alt="something"
                    className="w-[80%] h-full bg-white"
                  />
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
                  <div className="flex flex-col items-start">
                    {
                      prd.product.company && prd.product.company.address && (
                       <>
                        <div className="flex items-scenter justify-center gap-3">
                          <CiLocationOn />
                          <span>{prd.product.company.address.street}</span>
                          <span>{prd.product.company.address.house}</span>
                        </div>

                        <div className="flex items-scenter justify-center gap-3 ml-7">
                          <span>{prd.product.company.address.zipCode}</span>
                          <span>{prd.product.company.address.city.name},</span>
                          <span>{prd.product.company.address.country.name}</span>
                        </div>
                       </>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-auto flex border-[1px] border-solid border-gray-300 p-5 my-10">
              <h1>Video</h1>
              <div className="ml-32 pt-4 w-full h-[90%]">
                <YouTubePlayer
                  _src={prd.product?.video}
                  className="ml-64" />
              </div>
            </div>

            <div className="w-full py-10">
              <h1>Offer details</h1>
              <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                <div className="flex flex-col gap-2">
                  {
                    prd.product.type && prd.product.categories &&
                    (
                      <>
                        <div className="flex items-center gap-3">
                          <GrTechnology />
                          <h1 className="text-gray-600">{prd.product?.type?.name}</h1>
                        </div>
                        <ul className="list-none flex gap-4 ml-6">
                          {
                            prd.product.categories &&
                            prd.product.categories.map((category, index) => (
                              <li key={index} className="bg-gray-300 rounded-lg px-2">{category.name}</li>
                            ))
                          }
                        </ul>
                      </>
                    )
                  }
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <LiaHorseHeadSolid />
                    <h1 className="text-gray-600">Business Model</h1>
                  </div>
                  <ul className="list-none flex gap-4 ml-6 flex-wrap">
                    {
                      prd.product.businessModels &&
                      prd.product.businessModels.map((bmodel, index) => (
                        <li key={`${index}-${bmodel.name}`} className="bg-gray-300 rounded-lg px-2">{bmodel.name}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <CiClock2 />
                    <h1 className="text-gray-600">TRL</h1>
                  </div>
                  <ul className="list-none flex gap-4 ml-6">
                    {
                      prd.product.trl &&
                      (
                        <li className="bg-gray-300 rounded-lg px-2">
                          {prd.product?.trl.name}
                        </li>
                      )
                    }
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <AiOutlineDollarCircle />
                    <h1 className="text-gray-600">Costs</h1>
                  </div>
                  <ul className="list-none flex gap-4 ml-6">
                    <li className="bg-gray-300 rounded-lg px-2 flex items-center">
                      {prd.product.investmentEffort}

                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div> :

          (
            <p> There is no data here... </p>
          )
      }

    </Main>
  )
}

export default Product