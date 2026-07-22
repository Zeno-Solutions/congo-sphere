import React from "react";
import Image from "next/image";
export default function ticket() {
  return (
    <div>
      <div className=" bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
        <h1 className="font-bold text-2xl my-4 text-center text-purple-400">
          UPP COMERCE
        </h1>
        <hr className="mb-2" />
        <div className="flex justify-between mb-6">
          <h1 className="text-lg font-bold">Invoice</h1>
          <div className="text-gray-700">
            <div>Date: 01/05/2023</div>
            <div>Invoice #: INV12345</div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Bill To:</h2>
          <div className="text-gray-700 mb-2">John Doe</div>
          <div className="text-gray-700 mb-2">123 Main St.</div>
          <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
          <div className="text-gray-700">johndoe@example.com</div>
        </div>
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-700">Description</th>
              <th className="text-right font-bold text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left text-gray-700">Product 1</td>
              <td className="text-right text-gray-700">$100.00</td>
            </tr>
            <tr>
              <td className="text-left text-gray-700">Product 2</td>
              <td className="text-right text-gray-700">$50.00</td>
            </tr>
            <tr>
              <td className="text-left text-gray-700">Product 3</td>
              <td className="text-right text-gray-700">$75.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left font-bold text-gray-700">Total</td>
              <td className="text-right font-bold text-gray-700">$225.00</td>
            </tr>
          </tfoot>
        </table>
        <div className="text-gray-700 mb-2">Thank you for your business!</div>
        <div className="text-gray-700 text-sm">
          Please remit payment within 30 days.
        </div>
      </div>

      <div className="bg-[url('/bg1.jpeg')] overflow-hidden bg-no-repeat  bg-cover border rounded-lg shadow-lg px-6 py-4 max-w-4xl mx-auto mt-8">
        <h1 className="font-bold text-2xl my-2 text-center text-white">
          CONGO SHERE
        </h1>
        <hr className="mb-2 bg-purple-500" />
        <div className="flex justify-between mb-1">
          <h1 className="text-4xl font-black text-white">
            Cyber Punk Nights Underground
          </h1>
          <div className=" pb-2">
            <div>Date: 01/05/2023</div>
            <div>
              Mtricule: <span className="font-black">INV12345</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-between z-8 max-h-50  p-0">
          <div className="flex ">
            <div className="bg-gray-50 skew-x-9 pl-3 min-w-105 z-10">
              <h1 className="font-black max-w-80 overflow-hidden max-h-18 z-15 text-purple-500  flex-wrap text-3xl ">
                Martial OYAGA
              </h1>
              <div className="flex flex-col z-15  text-black">
                <p className=" font-black">123 Main St.</p>
                <p className="">Anytown, USA 12345</p>
                <p className="">johndoe@example.com</p>
              </div>
            </div>
            <Image
              src={"/loginTest.jpg"}
              alt="dgd"
              width={300}
              height={30}
              className="transform skew-x-11 h-70 z-15 scale-x-100 absolute left-99 top-0"
            />
          </div>
          <div className=" flex flex-col ">
            <div className="h-1/2 flex items-center scale-y-125 skew-x-9 bg-red-500 justify-center shadow-md/50">
              <span className="text-5xl font-black  ">VIP</span>
            </div>

            <Image src={"/qr.jpeg"} height={100} width={130} alt={"qr"} />
          </div>
        </div>
        <div className="text-purple-300 mb-2">Thank you for ticket!</div>
        <div className="text-purple-300 text-sm">
          Please remit payment within 30 days.
        </div>
      </div>
    </div>
  );
}
