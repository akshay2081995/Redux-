import React from 'react'

export const Team = () => {
  return (
    <div className=''>
         <div className="bg-white">

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h1>
            <p className="text-gray-700 leading-relaxed">
              Meet the amazing team behind <span className='font-bold text-2xl text-blue-900'>REDUx.</span>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">John Doe</h2>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://c.vanceai.com/assets/images/bgremover_vanceai/passport_photo_maker/feature_after_1-b8d713a1d2.png"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Jane Smith</h2>
              <p className="text-gray-700">HR Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Sam Johnson</h2>
              <p className="text-gray-700">Senior developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://www.topmediai.com/micro/passport-photo-maker/assets/bigger_pic4-843adaaa.png"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Emily Davis</h2>
              <p className="text-gray-700">Project Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://lh4.googleusercontent.com/proxy/bgnmCM3CmssTIcHP99KPnrFKB1rV-D2_NGB48e_V21JN0VN0t-o7QTZIlimcaftujPGZbKU9505ujR6UCWSXitWaUnQAjvQ4NKgaP5uY1RvD"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Michael Brown</h2>
              <p className="text-gray-700">CMO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://superlawyer.in/wp-content/uploads/2022/10/Divyashree-Suri-Passport-Photo.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Sophia Wilson</h2>
              <p className="text-gray-700">Web developer</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 REDUx. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}
