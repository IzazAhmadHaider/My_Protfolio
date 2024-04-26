import React from 'react';

function Contact() {
  return (
    <div className='bg-gradient-to-r from-yellow-400 to-orange-400 min-h-screen  flex justify-center items-center'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-5xl font-bold text-[#219ebc] mb-20">Contact Us</div>

       <div className="container mx-auto px-4 py-8 shadow-2xl rounded-lg bg-gradient-to-r from-yellow-300 to-orange-300   max-w-4xl">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-500 font-semibold mb-2" htmlFor="name">Name</label>
                        <input className="w-full px-4 py-2 border rounded-md bg-yellow-200" type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-500 font-semibold mb-2" htmlFor="email">Email</label>
                        <input className="w-full px-4 py-2 border rounded-md bg-yellow-200" type="email" id="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-500 font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea className="w-full px-4 py-2 border rounded-md bg-yellow-200" id="message" name="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-600" type="submit">Send Message</button>
                </form>
            </div>
            <div className='bg-gradient-to-br from-yellow-400 shadow-2xl to-orange-400  w-96 h-full'>
                <h2 className="text-xl font-semibold text-gray-700 text-center  mb-2">Contact Information</h2>
                <ul className="text-gray-700">
                    <li className="mb-2 p-4"> 

                        <span className="font-semibold">Address:</span> 123 Main St, City, Country

                    </li>
                    <li className="mb-2 p-4">
                        <span className="font-semibold">Phone:</span> +1234567890
                    </li>
                    <li className='p-4'>
                        <span className="font-semibold">Email:</span> info@example.com
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
