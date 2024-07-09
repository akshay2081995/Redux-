import React from "react";
// import { Header } from "../Header";

export const Features = () => {
  return (
    <div>
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Our Features
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Explore the features that make REDUx stand out.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Feature 1
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                quis risus eget urna mollis ornare vel eu leo.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Feature 2
              </h2>
              <p className="text-gray-700">
                Vestibulum id ligula porta felis euismod semper. Sed posuere
                consectetur est at lobortis.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Feature 3
              </h2>
              <p className="text-gray-700">
                Curabitur blandit tempus porttitor. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Feature 4
              </h2>
              <p className="text-gray-700">
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Feature 5
              </h2>
              <p className="text-gray-700">
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Nulla vitae elit libero.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Feature 6
              </h2>
              <p className="text-gray-700">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 REDUx. All rights reserved.</p>
      </footer>
    </div>
  );
};
