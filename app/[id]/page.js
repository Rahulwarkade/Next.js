'use client'
import React, { Suspense } from 'react'
import getData from '../../utils/getData.js'

const page = async ({params}) => {
    const id = params.id;
    const post = await getData(id);
  return (
    <>
        <div className="container p-5">
          {JSON.stringify(post)}
          <Suspense fallback={<h3>fallback is loading</h3>}>
            {wait(2000)}
            <h3>Data is loaded now...</h3>
          </Suspense>
        </div>
    </>
  )
}
export const wait = (ms)=>{
  return new Promise((res,rej)=>setTimeout(res,ms));
}
export default page