import React from 'react';
import ContactForm from '../components/digilynk/ContactForm';
import contactBanner from '../assets/images/contactBanner2.png';

export default function Contact() {
    return (
        <>
            <section className='flex flex-col md:flex-row-reverse bg-zinc-50 min-h-screen'>
                {/* Image container - full width on mobile, sticky on desktop */}
                <div className='w-full md:w-2/6 md:sticky md:top-0 h-64 md:h-screen'>
                    <img
                        src={contactBanner}
                        alt="Contact banner"
                        className='scale-x-[-1] w-full h-full object-cover'
                    />
                </div>

                {/* Form container */}
                <div className='w-full md:w-4/6 p-0 md:p-0'>
                    <div className='w-full'>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}












// import React from 'react'
// import ContactForm from '../components/digilynk/ContactForm'
// import contactBanner from '../assets/images/contactBanner2.png';

// export default function Contact() {
//     return (
//         <>
//             <section className='flex flex-col md:flex-row-reverse bg-zinc-50 min-h-screen'>
//                 {/* Sticky image container - takes full width on mobile, half on desktop */}
//                 <div className='w-full md:w-2/6 sticky top-0 h-screen'>
//                     <img
//                         src={contactBanner}
//                         alt=""
//                         className='scale-x-[-1] w-full h-full object-cover'
//                     />
//                 </div>

//                 {/* Scrollable form container - takes full width on mobile, half on desktop */}
//                 <div className='w-full md:w-4/6 overflow-y-auto'>
//                     <div className=''>
//                         <ContactForm />
//                     </div>
//                     {/* <div className='bg-zinc-800 rounded-lg p-8 max-w-[542px] mx-auto my-[50px]'>
//                         <ContactForm />
//                     </div> */}
//                 </div>
//             </section>
//         </>
//     )
// }








// import React from 'react'
// import ContactForm from '../components/digilynk/ContactForm'
// import contactBanner from '../assets/images/contactBanner.png';

// export default function Contact() {
//     return (
//         <>
//             <section id='top' className='grid grid-cols-5 bg-zinc-50 justify-between'>
//                 <div className='col-span-3 max-h-[calc(100vh-5rem)] overflow-y-scroll'>
//                     <ContactForm />
//                 </div>
//                 <div className='max-h-[calc(100vh-5rem)] ms-auto col-span-2'>
//                     <img src={contactBanner} alt="" className='scale-x-[-1] w-full' />
//                 </div>
//             </section>
//         </>
//     )
// }
