"use client";
import { useEffect, useState } from "react";
import DashboardMaster from "@/components/DashboardMaster";
import { read_all_product__Request__API } from "@/utility/api";

export default function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    read_all_product__Request__API().then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <main>
      <DashboardMaster>
        <div className="flex gap-[30px]">
          <div>
            <section className="antialiased  text-gray-600 h-screen px-4">
              <div className="flex flex-col justify-center h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">All Product</h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Product Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Product Image
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                          {product.map((item, index) => (
                            <tr className="hover:bg-gray-50" key={index}>
                              <td className="px-6 py-4">{item.title}</td>
                              <td className="px-6 py-4">
                                {item.updateAt.split("T", 1)[0]}
                              </td>

                              <td className="px-6 py-4">
                                <img
                                  src={item.imgCDN}
                                  alt=""
                                  className="w-[50px] h-[50px] object-cover"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DashboardMaster>
    </main>
  );
}
