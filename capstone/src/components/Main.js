import React from "react";
import Booking from "./Booking";

const Main = () => {

  return (
    <div className="">
      <section>
                <div>
                    <div className="logo-container flex justify-center">
                        <img src="mainimage.jpg" className="sm:max-w-auto md:max-w-3xl object-cover" id="banner" />
                    </div>
                </div>
            </section>

            <div id="order-area" className="text-3xl flex justify-center m-10">
                <a href="booking" type="button" className="p-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reserve a table</a>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
                

            <div id="sec-section" className="md:flex ">

              
                <div className="item-section md:w-1/3 p-4">

                  <div className="flex-wrap max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img className="rounded-t-lg" src="comida1.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Falafel</h5>
                          </a>
                          <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">Chickpea, herbs, spices. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus suscipit porro, nihil numquam quibusdam quam corporis unde, ut quas quaerat inventore iure in aliquid ducimus dolorum itaque, odio dolorem accusantium? Ipsa ducimus iure possimus id dolorem fugiat necessitatibus quae et.</p>
                          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          View similar
                          </a>
                      </div>
                  </div>



                </div>
                <div className="item-section md:w-1/3 p-4">


                <div className="flex-wrap max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img className="rounded-t-lg" src="comida2.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pasta Salad</h5>
                          </a>
                          <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fugiat doloremque magnam optio modi natus vero facilis quisquam odit obcaecati exercitationem voluptate, accusamus provident et! Lettuce, vegetables, mozzarella.</p>
                          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              View similar
                          </a>
                      </div>
                  </div>

                </div>
                <div className="item-section md:w-1/3 p-4" >


                <div className="flex-wrap max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img className="" src="comida3.jpg" alt="" />
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pasta Salad</h5>
                          </a>
                          <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea voluptas in iste! Saepe quis nulla iusto nemo aliquam nam tempora iste. Fuga deleniti in ipsam necessitatibus dicta voluptatum harum. Lettuce, vegetables, mozzarella.</p>
                          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          View similar
                          </a>
                      </div>
                  </div>

                </div>
            </div>
           


    </div>
  );
};

export default Main;