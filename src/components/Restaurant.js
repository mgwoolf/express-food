import React from 'react';

import Menu from './Menu';

const Restaurant = () => {
    return (<>
                <div className="row">
                    <div className="col-sm-9">
                        <h1>Big Tasty</h1>
                        <p>Lorem ipsum dolor sit amet, no vim mundi persequeris, te quod praesent sententiae sed, pri no noluisse percipitur interpretaris. Porro legere usu id, magna essent audire pro ad, in duis fabellas eam. Ne sed luptatum facilisi, amet congue vix et, movet efficiendi mel cu. Et nam solum habemus. Vulputate comprehensam vis ex, diam veniam debitis qui at.</p>
                    </div>
                    <div className="col-3 d-none d-sm-block">
                        <img src="img/no-image.svg" alt="big tasty logo" width="200" />
                    </div>
                </div>
                <Menu />
            </>);
}

export default Restaurant;
