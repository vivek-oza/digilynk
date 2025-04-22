import React from 'react'
import { Button } from '../ui/button'

export default function WorkWithUs() {
    return (
        <>
            <section className='my-48 flex flex-col justify-center items-center'>
                <div className="mb-20 text-5xl mx-auto font-semibold  text-zinc-800">Work with us</div>
                <Button className='text-xl shadow-xl hover:scale-105  shadow-black/40'>
                    Get a quote
                </Button>
            </section>
        </>
    )
}
