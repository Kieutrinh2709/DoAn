import React from 'react'
import anh from "../../../images/taotour.jpg"
import { Link } from 'react-router-dom'

function CreateTour(props) {
    return (
        <div >
            <div className="mb-5 tour" >
                <div className="heading text-center pt-5">
                    <span>My tour</span>
                    <hr  width="40%" align="center" />
                    <p className="mb-4">
                       Hãy tạo cho mình những chuyến đi thật đáng nhớ và đầy kỉ niệm !
                    </p>
                </div>
                <div className="container">
                    <Link to="/create-tour"><img src={anh} className="w-100" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

CreateTour.propTypes = {

}

export default CreateTour

