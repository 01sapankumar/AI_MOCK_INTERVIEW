import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from "next/image"
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
const page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview With AI-Powred Practice & feedback</h2>

        <p className='text-lg'>
          Practice on real interview question & get instanat feedback with which area to improvise   </p>

          <Button asChild className='btn-primary max-sm:w-full' >
            <Link href = "/interview">Start a Interview</Link>
          </Button>
      </div>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
  <Image 
    src="/robot.png" 
    alt="Robo" 
    width={400} 
    height={400} 
    className="w-full h-auto object-contain"
  />
</div>  
  </section>


<section className='flex flex-col gap-6 mt-8'>
  <h2>Your Interview</h2>
  <div className="interviews-section">
  {dummyInterviews.map((interview) => (
  <InterviewCard {...interview} key = {interview.id} />
))}



 {/*<p>You haven&apos;t taken any interviews yet</p>*/}
  </div>
</section>

<section className=' flex flex-col gap-6 mt-8 '>
  <h2>Taken an Interview </h2>
  <div className="interviews-section">
  
  {dummyInterviews.map((interview) => (
  <InterviewCard {...interview} key = {interview.id} />
))}



 </div>
</section>

    </>
  )
}

export default page;
