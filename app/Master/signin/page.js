import React from 'react'
import Link from 'next/link';
const singin = () => {
  return (
    <>
    <div className="container mt-3">
      <div className="list-group ">
        <Link href="/Master/signin/Rahul" className="list-group-item list-group-item-primary mt-3">Rahul warkade</Link>

        <Link href="/Master/signin/Alpha" className="list-group-item list-group-item-success mt-3 ">Alpha warkade</Link>
        <Link href="/Master/signin/Beta" className="list-group-item list-group-item-dark mt-3 ">Beta warkade</Link>
        <Link href="/Master/signin/Rahul" className="list-group-item list-group-item-danger mt-3 ">Charli warkade</Link>
        <Link href="/Master/signin/Delta" className="list-group-item list-group-item-warning mt-3 ">Delta warkade</Link>
        <Link href="/Master/signin/Rahul" className="list-group-item list-group-item-info mt-3 ">Echo warkade</Link>
        <Link href="/Master/signin/Rahul" className="list-group-item list-group-item-light mt-3 active">Forxt warkade</Link>
      </div>
    </div>
    </>
  )
}

export default singin