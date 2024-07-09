import React from 'react'

export const Contact = () => {
  return (
    <div className="bg-white">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Have any questions? We'd love to hear from you.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-green-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 REDUx. All rights reserved.</p>
      </footer>
    </div>
  )
}
