import React, { useEffect } from 'react'
import './detailRight.scss'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const DetailRight = ({data}) => {
    return (
        <div className="col-lg-4">
            <div className="detailRight text-center">
                <div className="top-img-detail">
                    <img className='img-fluid' src={data.photoUrl} alt="" />
                </div>
                <div className="center-text-detail">
                    {data.discount !== 0 && data.discount != null && (
                        <span>
                            <del className="old-price">${data.price}</del>
                            ${data.discount}
                        </span>
                    )}
                    {(data.discount === 0 || data.discount == null) && (
                        <span>
                            ${data.price}
                        </span>
                    )}
                    <p>{data.description}</p>
                  
                  
                  
                    <Button colorScheme='white' className='btn-course-detail-two'>
                        Add To List
                    </Button>
                </div>
                <div className="bottom-text-detail text-start">
                    <h3>This course includes:</h3>
                    <ul>

                        {data.spesification && (
                            data.spesification.map(spec => (
                                <li key={spec.id}>{spec.description}</li>
                            ))
                        )
                        }


                    </ul>
                </div>
            </div>
        </div>

    )
}

export default DetailRight