import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { TopMenu } from './style';
import { DiscoverWrapper} from './style';

export default memo(function WYDiscover(props) {
    const { route } = props;

    return (
        <DiscoverWrapper>
          <div className="top">
            <TopMenu className="wrap-v1">

            </TopMenu>
          </div>
          {renderRoutes(route.routes)}
        </DiscoverWrapper>
    
        
    )
})
