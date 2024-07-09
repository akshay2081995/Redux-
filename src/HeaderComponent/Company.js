import React from "react";

export const Company = () => {
  return (
    <div>
      <section className="mb-12">
        <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-red-700 leading-relaxed">
            Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus.
          </p>
          <h2 className="text-start">
            <span className="font-bold">Teaching Purpose.</span> Our teaching
            purpose to make begineer to master developer.
          </h2>
          <h2 className="text-start">
            <span className="font-bold">Classes Value.</span> What does your
            class stand for? For example, are you environmentally conscious and
            provide a more sustainable solution to solve a problem? Values are
            what make your classes unique.
          </h2>
          <h2 className="text-start">
            <span className="font-bold">Teaching Goal.</span> What does your
            teaching accomplish for developer? Why should they teach from you
            instead of other competitors?
          </h2>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">John Doe</h3>
              <div>
                <div
                  id="tooltip-jese"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Jese Leos
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    data-tooltip-target="tooltip-jese"
                    className="w-10 h-10 rounded"
                    src="https://lawschoolpolicyreview.com/wp-content/uploads/2018/06/passport-size-photo-2-e1558013566564.jpg"
                    alt="Medium avatar"
                  />
                </div>
              </div>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Jane Smith
              </h3>
              <div>
                <div
                  id="tooltip-jese"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Jese Leos
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    data-tooltip-target="tooltip-jese"
                    className="w-10 h-10 rounded"
                    src="https://thepeoplemanagement.com/wp-content/uploads/2022/11/ArchanaKrishna.jpg"
                    alt="Medium avatar"
                  />
                </div>
              </div>
              <p className="text-gray-700">HR</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Michael Johnson
              </h3>
              <div>
                <div
                  id="tooltip-jese"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Jese Leos
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    data-tooltip-target="tooltip-jese"
                    className="w-10 h-10 rounded"
                    src="https://www.businessmanager.in/wp-content/uploads/2022/07/Mahesh-Phadke-elevated-to-the-position-of-Senior-General-Manager-HR-of-Deepak-Group-Co.-768x432.jpg"
                    alt="Medium avatar"
                  />
                </div>
              </div>
              <p className="text-gray-700">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
