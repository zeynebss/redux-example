import React from 'react'
import '../detaiLeft/detailLeft.scss'
import OtherDetail from '../other-detail/OtherDetail'

const DetailLeft = ({data}) => {
    return (
        <div className="col-lg-8">
            <div className="detailLeft">
                <OtherDetail data={data}/>
            </div>
        </div>
    )
}

export default DetailLeft