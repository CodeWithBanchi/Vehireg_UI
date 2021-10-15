import React from 'react';
import './viewComp.css'

function ViewComp(props) {
    return (
        <div className="main-container">
            <div className="viewBox">
              <span className="vehiName">Honda Civic 2020</span>
                <div className="inputCouple">
                    <span className="input1">
                        License Plate no :
                    </span>
                    <span className="input2">
                         SG BHL 1975
                    </span>
                </div>
                <div className="inputCouple">
                    <span className="input1">
                        Owners Name :
                    </span>
                    <span className="input2">
                         Kasun Gayantha
                    </span>
                </div>
                <div className="inputCouple">
                    <span className="input1">
                        Manufacture  :
                    </span>
                    <span className="input2">
                         Honda
                    </span>
                </div>
                <div className="inputCouple">
                    <span className="input1">
                        Manufacured Year :
                    </span>
                    <span className="input2">
                         2020
                    </span>
                </div>

                <div className="inputCouple">
                    <span className="input1">
                        Vehilce Color:
                    </span>
                    <span className="input2">
                         White
                    </span>
                </div>
                <div className="inputCouple">
                    <span className="input1">
                        Vehicle Type :
                    </span>
                    <span className="input2">
                         Vintage
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ViewComp;